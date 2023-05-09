# MerakiAuthUsers

### Available Operations

* [CreateNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [DeleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [GetNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [GetNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [UpdateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

## CreateNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.CreateNetworkMerakiAuthUser(ctx, operations.CreateNetworkMerakiAuthUserRequest{
        RequestBody: operations.CreateNetworkMerakiAuthUserRequestBody{
            AccountType: operations.CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumGuest.ToPointer(),
            Authorizations: []CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("minus"),
                    SsidNumber: sdk.Int64(743245),
                },
            },
            Email: "Kaylin_Purdy@hotmail.com",
            EmailPasswordToUser: sdk.Bool(false),
            IsAdmin: sdk.Bool(false),
            Name: sdk.String("Cynthia Murphy"),
            Password: sdk.String("similique"),
        },
        NetworkID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkMerakiAuthUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.DeleteNetworkMerakiAuthUser(ctx, operations.DeleteNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "nobis",
        NetworkID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.GetNetworkMerakiAuthUser(ctx, operations.GetNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "non",
        NetworkID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.GetNetworkMerakiAuthUsers(ctx, operations.GetNetworkMerakiAuthUsersRequest{
        NetworkID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.UpdateNetworkMerakiAuthUser(ctx, operations.UpdateNetworkMerakiAuthUserRequest{
        RequestBody: &operations.UpdateNetworkMerakiAuthUserRequestBody{
            Authorizations: []UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("eos"),
                    SsidNumber: 832764,
                },
            },
            EmailPasswordToUser: sdk.Bool(false),
            Name: sdk.String("Victoria Balistreri"),
            Password: sdk.String("porro"),
        },
        MerakiAuthUserID: "illo",
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
