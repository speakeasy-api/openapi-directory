# Services

### Available Operations

* [ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides](#serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides) - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet](#serviceconsumermanagementservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate) - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete) - Deletes a producer override.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist) - Lists all producer overrides on this limit.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch) - Updates a producer override.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsList](#serviceconsumermanagementservicesconsumerquotametricslist) - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

## ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides

Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        V1Beta1ImportProducerOverridesRequest: &shared.V1Beta1ImportProducerOverridesRequest{
            Force: sdk.Bool(false),
            ForceOnly: []shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum{
                shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
                shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
            },
            InlineSource: &shared.V1Beta1OverrideInlineSource{
                Overrides: []shared.V1Beta1QuotaOverride{
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: sdk.String("saepe"),
                        Dimensions: map[string]string{
                            "architecto": "ipsa",
                            "reiciendis": "est",
                            "mollitia": "laborum",
                        },
                        Metric: sdk.String("dolores"),
                        Name: sdk.String("Stacy Champlin"),
                        OverrideValue: sdk.String("omnis"),
                        Unit: sdk.String("nemo"),
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: sdk.String("minima"),
                        Dimensions: map[string]string{
                            "accusantium": "iure",
                            "culpa": "doloribus",
                            "sapiente": "architecto",
                        },
                        Metric: sdk.String("mollitia"),
                        Name: sdk.String("Cecilia Crooks"),
                        OverrideValue: sdk.String("occaecati"),
                        Unit: sdk.String("numquam"),
                    },
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("quia"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("animi"),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        Name: "Miss Rufus Ankunding",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
        View: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetViewEnumFull.ToPointer(),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Beta1ConsumerQuotaLimit != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate

Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        V1Beta1QuotaOverride: &shared.V1Beta1QuotaOverride{
            AdminOverrideAncestor: sdk.String("praesentium"),
            Dimensions: map[string]string{
                "ipsa": "omnis",
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            Metric: sdk.String("maiores"),
            Name: sdk.String("Stacy Gulgowski MD"),
            OverrideValue: sdk.String("enim"),
            Unit: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum{
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage,
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage,
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnumLimitDecreasePercentageTooHigh,
        },
        Key: sdk.String("modi"),
        OauthToken: sdk.String("praesentium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete

Deletes a producer override.

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("enim"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum{
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnumLimitDecreasePercentageTooHigh,
        },
        Key: sdk.String("quibusdam"),
        Name: "Joanna Rau",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList

Lists all producer overrides on this limit.

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        PageSize: sdk.Int64(677817),
        PageToken: sdk.String("excepturi"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Beta1ListProducerOverridesResponse != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch

Updates a producer override.

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        V1Beta1QuotaOverride: &shared.V1Beta1QuotaOverride{
            AdminOverrideAncestor: sdk.String("eum"),
            Dimensions: map[string]string{
                "eligendi": "sint",
            },
            Metric: sdk.String("aliquid"),
            Name: sdk.String("Terence Marquardt"),
            OverrideValue: sdk.String("debitis"),
            Unit: sdk.String("a"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Force: sdk.Bool(false),
        ForceOnly: []ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum{
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumLimitDecreasePercentageTooHigh,
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumQuotaSafetyCheckUnspecified,
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumQuotaSafetyCheckUnspecified,
            operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumLimitDecreasePercentageTooHigh,
        },
        Key: sdk.String("facere"),
        Name: "Beth Padberg",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UpdateMask: sdk.String("accusamus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServiceconsumermanagementServicesConsumerQuotaMetricsList

Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

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
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsList(ctx, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("amet"),
        PageSize: sdk.Int64(643990),
        PageToken: sdk.String("nisi"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
        View: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnumQuotaViewUnspecified.ToPointer(),
    }, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Beta1ListConsumerQuotaMetricsResponse != nil {
        // handle response
    }
}
```
