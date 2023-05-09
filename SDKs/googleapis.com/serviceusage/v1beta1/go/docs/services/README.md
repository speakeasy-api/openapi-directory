# Services

### Available Operations

* [ServiceusageServicesBatchEnable](#serviceusageservicesbatchenable) - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* [ServiceusageServicesConsumerQuotaMetricsImportAdminOverrides](#serviceusageservicesconsumerquotametricsimportadminoverrides) - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [ServiceusageServicesConsumerQuotaMetricsImportConsumerOverrides](#serviceusageservicesconsumerquotametricsimportconsumeroverrides) - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate](#serviceusageservicesconsumerquotametricslimitsadminoverridescreate) - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* [ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList](#serviceusageservicesconsumerquotametricslimitsadminoverrideslist) - Lists all admin overrides on this limit.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate](#serviceusageservicesconsumerquotametricslimitsconsumeroverridescreate) - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete](#serviceusageservicesconsumerquotametricslimitsconsumeroverridesdelete) - Deletes a consumer override.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList](#serviceusageservicesconsumerquotametricslimitsconsumeroverrideslist) - Lists all consumer overrides on this limit.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch](#serviceusageservicesconsumerquotametricslimitsconsumeroverridespatch) - Updates a consumer override.
* [ServiceusageServicesConsumerQuotaMetricsLimitsGet](#serviceusageservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [ServiceusageServicesConsumerQuotaMetricsList](#serviceusageservicesconsumerquotametricslist) - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* [ServiceusageServicesDisable](#serviceusageservicesdisable) - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* [ServiceusageServicesEnable](#serviceusageservicesenable) - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* [ServiceusageServicesGenerateServiceIdentity](#serviceusageservicesgenerateserviceidentity) - Generates service identity for service.
* [ServiceusageServicesList](#serviceusageserviceslist) - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

## ServiceusageServicesBatchEnable

Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`

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
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
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

## ServiceusageServicesConsumerQuotaMetricsImportAdminOverrides

Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsImportAdminOverrides(ctx, operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportAdminOverridesRequest: &shared.ImportAdminOverridesRequest{
            Force: sdk.Bool(false),
            ForceOnly: []shared.ImportAdminOverridesRequestForceOnlyEnum{
                shared.ImportAdminOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
                shared.ImportAdminOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified,
                shared.ImportAdminOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
                shared.ImportAdminOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
            },
            InlineSource: &shared.OverrideInlineSource{
                Overrides: []shared.QuotaOverride{
                    shared.QuotaOverride{
                        AdminOverrideAncestor: sdk.String("qui"),
                        Dimensions: map[string]string{
                            "cum": "esse",
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                            "ad": "natus",
                        },
                        Metric: sdk.String("sed"),
                        Name: sdk.String("Curtis Morissette"),
                        OverrideValue: sdk.String("saepe"),
                        Unit: sdk.String("fuga"),
                    },
                    shared.QuotaOverride{
                        AdminOverrideAncestor: sdk.String("in"),
                        Dimensions: map[string]string{
                            "iste": "iure",
                            "saepe": "quidem",
                        },
                        Metric: sdk.String("architecto"),
                        Name: sdk.String("Lela Orn"),
                        OverrideValue: sdk.String("dolores"),
                        Unit: sdk.String("dolorem"),
                    },
                },
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1{
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

## ServiceusageServicesConsumerQuotaMetricsImportConsumerOverrides

Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverrides(ctx, operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportConsumerOverridesRequest: &shared.ImportConsumerOverridesRequest{
            Force: sdk.Bool(false),
            ForceOnly: []shared.ImportConsumerOverridesRequestForceOnlyEnum{
                shared.ImportConsumerOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh,
                shared.ImportConsumerOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified,
                shared.ImportConsumerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
                shared.ImportConsumerOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified,
            },
            InlineSource: &shared.OverrideInlineSource{
                Overrides: []shared.QuotaOverride{
                    shared.QuotaOverride{
                        AdminOverrideAncestor: sdk.String("consequuntur"),
                        Dimensions: map[string]string{
                            "mollitia": "occaecati",
                            "numquam": "commodi",
                            "quam": "molestiae",
                            "velit": "error",
                        },
                        Metric: sdk.String("quia"),
                        Name: sdk.String("Gloria Padberg"),
                        OverrideValue: sdk.String("odit"),
                        Unit: sdk.String("quo"),
                    },
                    shared.QuotaOverride{
                        AdminOverrideAncestor: sdk.String("sequi"),
                        Dimensions: map[string]string{
                            "ipsam": "id",
                            "possimus": "aut",
                            "quasi": "error",
                            "temporibus": "laborum",
                        },
                        Metric: sdk.String("quasi"),
                        Name: sdk.String("Jan Thiel"),
                        OverrideValue: sdk.String("voluptatibus"),
                        Unit: sdk.String("ipsa"),
                    },
                    shared.QuotaOverride{
                        AdminOverrideAncestor: sdk.String("omnis"),
                        Dimensions: map[string]string{
                            "cum": "perferendis",
                            "doloremque": "reprehenderit",
                        },
                        Metric: sdk.String("ut"),
                        Name: sdk.String("Willie Hessel"),
                        OverrideValue: sdk.String("dicta"),
                        Unit: sdk.String("harum"),
                    },
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("ipsum"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1{
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

## ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate

Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QuotaOverride: &shared.QuotaOverride{
            AdminOverrideAncestor: sdk.String("praesentium"),
            Dimensions: map[string]string{
                "voluptates": "quasi",
                "repudiandae": "sint",
                "veritatis": "itaque",
            },
            Metric: sdk.String("incidunt"),
            Name: sdk.String("Elizabeth Orn"),
            OverrideValue: sdk.String("deserunt"),
            Unit: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum{
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage,
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage,
        },
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1{
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

## ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList

Lists all admin overrides on this limit.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(433288),
        PageToken: sdk.String("non"),
        Parent: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdminOverridesResponse != nil {
        // handle response
    }
}
```

## ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate

Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QuotaOverride: &shared.QuotaOverride{
            AdminOverrideAncestor: sdk.String("sint"),
            Dimensions: map[string]string{
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
            },
            Metric: sdk.String("illum"),
            Name: sdk.String("Jean Buckridge"),
            OverrideValue: sdk.String("facere"),
            Unit: sdk.String("ea"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum{
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnumQuotaSafetyCheckUnspecified,
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnumLimitDecreasePercentageTooHigh,
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnumLimitDecreasePercentageTooHigh,
        },
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("provident"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1{
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

## ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete

Deletes a consumer override.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum{
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnumLimitDecreaseBelowUsage,
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnumLimitDecreaseBelowUsage,
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnumQuotaSafetyCheckUnspecified,
        },
        Key: sdk.String("nihil"),
        Name: "Verna Olson",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1{
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

## ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList

Lists all consumer overrides on this limit.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("ullam"),
        PageSize: sdk.Int64(590873),
        PageToken: sdk.String("quos"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConsumerOverridesResponse != nil {
        // handle response
    }
}
```

## ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch

Updates a consumer override.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QuotaOverride: &shared.QuotaOverride{
            AdminOverrideAncestor: sdk.String("ad"),
            Dimensions: map[string]string{
                "dolor": "necessitatibus",
                "odit": "nemo",
            },
            Metric: sdk.String("quasi"),
            Name: sdk.String("Melba Toy"),
            OverrideValue: sdk.String("deleniti"),
            Unit: sdk.String("facilis"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("repudiandae"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum{
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnumLimitDecreasePercentageTooHigh,
            operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnumLimitDecreaseBelowUsage,
        },
        Key: sdk.String("repellat"),
        Name: "Louis Turner Sr.",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UpdateMask: sdk.String("magni"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1{
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

## ServiceusageServicesConsumerQuotaMetricsLimitsGet

Retrieves a summary of quota information for a specific quota limit.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsLimitsGet(ctx, operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("odit"),
        Name: "Donna Bernhard",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nam"),
        View: operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnumQuotaViewUnspecified.ToPointer(),
    }, operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsumerQuotaLimit != nil {
        // handle response
    }
}
```

## ServiceusageServicesConsumerQuotaMetricsList

Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

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
    res, err := s.Services.ServiceusageServicesConsumerQuotaMetricsList(ctx, operations.ServiceusageServicesConsumerQuotaMetricsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("aut"),
        PageSize: sdk.Int64(764912),
        PageToken: sdk.String("corporis"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolores"),
        View: operations.ServiceusageServicesConsumerQuotaMetricsListViewEnumBasic.ToPointer(),
    }, operations.ServiceusageServicesConsumerQuotaMetricsListSecurity{
        Option1: &operations.ServiceusageServicesConsumerQuotaMetricsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConsumerQuotaMetricsResponse != nil {
        // handle response
    }
}
```

## ServiceusageServicesDisable

Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "eaque": "quis",
            "nesciunt": "eos",
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("quam"),
        Key: sdk.String("dolor"),
        Name: "Dean Welch",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
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

Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`

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
            "error": "eaque",
            "occaecati": "rerum",
            "adipisci": "asperiores",
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        Name: "Rene Rolfson",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("dolorem"),
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

## ServiceusageServicesGenerateServiceIdentity

Generates service identity for service.

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
    res, err := s.Services.ServiceusageServicesGenerateServiceIdentity(ctx, operations.ServiceusageServicesGenerateServiceIdentityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("cum"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ServiceusageServicesGenerateServiceIdentitySecurity{
        Option1: &operations.ServiceusageServicesGenerateServiceIdentitySecurityOption1{
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

## ServiceusageServicesList

Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

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
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Filter: sdk.String("iure"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("quaerat"),
        PageSize: sdk.Int64(881005),
        PageToken: sdk.String("quidem"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("eos"),
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
