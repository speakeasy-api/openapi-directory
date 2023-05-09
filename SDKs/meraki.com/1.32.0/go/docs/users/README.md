# Users

### Available Operations

* [DeleteOrganizationUser](#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [GetNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters

## DeleteOrganizationUser

Delete a user and all of its authentication methods.

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
    res, err := s.Users.DeleteOrganizationUser(ctx, operations.DeleteOrganizationUserRequest{
        OrganizationID: "delectus",
        UserID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSmUserDeviceProfiles

Get the profiles associated with a user

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
    res, err := s.Users.GetNetworkSmUserDeviceProfiles(ctx, operations.GetNetworkSmUserDeviceProfilesRequest{
        NetworkID: "voluptatibus",
        UserID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserSoftwares

Get a list of softwares associated with a user

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
    res, err := s.Users.GetNetworkSmUserSoftwares(ctx, operations.GetNetworkSmUserSoftwaresRequest{
        NetworkID: "assumenda",
        UserID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUsers

List the owners in an SM network with various specified fields and filters

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
    res, err := s.Users.GetNetworkSmUsers(ctx, operations.GetNetworkSmUsersRequest{
        Emails: []string{
            "minus",
            "veritatis",
            "praesentium",
            "eum",
        },
        Ids: []string{
            "laboriosam",
        },
        NetworkID: "repellendus",
        Scope: []string{
            "sit",
        },
        Usernames: []string{
            "esse",
            "eius",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
