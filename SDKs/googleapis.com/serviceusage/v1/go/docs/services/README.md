# Services

### Available Operations

* [ServiceusageServicesBatchEnable](#serviceusageservicesbatchenable) - Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.
* [ServiceusageServicesBatchGet](#serviceusageservicesbatchget) - Returns the service configurations and enabled states for a given list of services.
* [ServiceusageServicesDisable](#serviceusageservicesdisable) - Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.
* [ServiceusageServicesEnable](#serviceusageservicesenable) - Enable a service so that it can be used with a project.
* [ServiceusageServicesGet](#serviceusageservicesget) - Returns the service configuration and enabled state for a given service.
* [ServiceusageServicesList](#serviceusageserviceslist) - List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

## ServiceusageServicesBatchEnable

Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceusageServicesBatchEnable(ctx, operations.ServiceusageServicesBatchEnableRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchEnableServicesRequest: &shared.BatchEnableServicesRequest{
            ServiceIds: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.ServiceusageServicesBatchEnableSecurity{
        Option1: &operations.ServiceusageServicesBatchEnableSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceusageServicesBatchGet

Returns the service configurations and enabled states for a given list of services.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceusageServicesBatchGet(ctx, operations.ServiceusageServicesBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        Names: []string{
            "minima",
            "excepturi",
        },
        OauthToken: sdk.String("accusantium"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.ServiceusageServicesBatchGetSecurity{
        Option1: &operations.ServiceusageServicesBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetServicesResponse != nil {
        // handle response
    }
}
```

## ServiceusageServicesDisable

Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceusageServicesDisable(ctx, operations.ServiceusageServicesDisableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DisableServiceRequest: &shared.DisableServiceRequest{
            CheckIfServiceHasUsage: shared.DisableServiceRequestCheckIfServiceHasUsageEnumSkip.ToPointer(),
            DisableDependentServices: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        Name: "Francis Jerde",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quis"),
    }, operations.ServiceusageServicesDisableSecurity{
        Option1: &operations.ServiceusageServicesDisableSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceusageServicesEnable

Enable a service so that it can be used with a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceusageServicesEnable(ctx, operations.ServiceusageServicesEnableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "animi": "enim",
            "odit": "quo",
            "sequi": "tenetur",
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        Name: "Dr. Jake Pacocha",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.ServiceusageServicesEnableSecurity{
        Option1: &operations.ServiceusageServicesEnableSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceusageServicesGet

Returns the service configuration and enabled state for a given service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceusageServicesGet(ctx, operations.ServiceusageServicesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        Name: "Mrs. April Wuckert",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ServiceusageServicesGetSecurity{
        Option1: &operations.ServiceusageServicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIServiceusageV1Service != nil {
        // handle response
    }
}
```

## ServiceusageServicesList

List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceusageServicesList(ctx, operations.ServiceusageServicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(865103),
        PageToken: sdk.String("modi"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.ServiceusageServicesListSecurity{
        Option1: &operations.ServiceusageServicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```
