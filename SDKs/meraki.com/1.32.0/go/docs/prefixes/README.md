# Prefixes

### Available Operations

* [CreateNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [GetDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
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
    res, err := s.Prefixes.CreateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("nulla"),
            Origin: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "beatae",
                    "alias",
                    "occaecati",
                    "architecto",
                },
                Type: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumIndependent.ToPointer(),
            },
            Prefix: "accusantium",
        },
        NetworkID: "asperiores",
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
    res, err := s.Prefixes.DeleteNetworkAppliancePrefixesDelegatedStatic(ctx, operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "earum",
        StaticDelegatedPrefixID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

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
    res, err := s.Prefixes.GetDeviceAppliancePrefixesDelegated(ctx, operations.GetDeviceAppliancePrefixesDelegatedRequest{
        Serial: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegated200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

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
    res, err := s.Prefixes.GetDeviceAppliancePrefixesDelegatedVlanAssignments(ctx, operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest{
        Serial: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != nil {
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
    res, err := s.Prefixes.GetNetworkAppliancePrefixesDelegatedStatic(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "qui",
        StaticDelegatedPrefixID: "quasi",
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
    res, err := s.Prefixes.GetNetworkAppliancePrefixesDelegatedStatics(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest{
        NetworkID: "deleniti",
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
    res, err := s.Prefixes.UpdateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("voluptate"),
            Origin: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "perferendis",
                    "sapiente",
                    "ducimus",
                    "magni",
                },
                Type: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumInternet.ToPointer(),
            },
            Prefix: sdk.String("ab"),
        },
        NetworkID: "accusamus",
        StaticDelegatedPrefixID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```
