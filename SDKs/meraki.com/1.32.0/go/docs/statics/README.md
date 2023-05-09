# Statics

### Available Operations

* [CreateNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [UpdateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

## CreateNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

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
    res, err := s.Statics.CreateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("fugiat"),
            Origin: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "deleniti",
                    "odit",
                    "quidem",
                },
                Type: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumInternet.ToPointer(),
            },
            Prefix: "corporis",
        },
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

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
    res, err := s.Statics.DeleteNetworkAppliancePrefixesDelegatedStatic(ctx, operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "assumenda",
        StaticDelegatedPrefixID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

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
    res, err := s.Statics.GetNetworkAppliancePrefixesDelegatedStatic(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "consectetur",
        StaticDelegatedPrefixID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

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
    res, err := s.Statics.GetNetworkAppliancePrefixesDelegatedStatics(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest{
        NetworkID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

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
    res, err := s.Statics.UpdateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("vero"),
            Origin: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "similique",
                    "rerum",
                },
                Type: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumInternet.ToPointer(),
            },
            Prefix: sdk.String("nesciunt"),
        },
        NetworkID: "impedit",
        StaticDelegatedPrefixID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```
