# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/serviceconsumermanagement/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest{
        Security: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.V1Beta1ImportProducerOverridesRequest{
            Force: false,
            ForceOnly: []shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum{
                "LIMIT_DECREASE_BELOW_USAGE",
                "QUOTA_SAFETY_CHECK_UNSPECIFIED",
            },
            InlineSource: &shared.V1Beta1OverrideInlineSource{
                Overrides: []shared.V1Beta1QuotaOverride{
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "ipsa",
                        Dimensions: map[string]string{
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                            "iusto": "excepturi",
                        },
                        Metric: "nisi",
                        Name: "recusandae",
                        OverrideValue: "temporibus",
                        Unit: "ab",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "quis",
                        Dimensions: map[string]string{
                            "deserunt": "perferendis",
                        },
                        Metric: "ipsam",
                        Name: "repellendus",
                        OverrideValue: "sapiente",
                        Unit: "quo",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "odit",
                        Dimensions: map[string]string{
                            "at": "maiores",
                            "molestiae": "quod",
                            "quod": "esse",
                            "totam": "porro",
                        },
                        Metric: "dolorum",
                        Name: "dicta",
                        OverrideValue: "nam",
                        Unit: "officia",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "occaecati",
                        Dimensions: map[string]string{
                            "deleniti": "hic",
                        },
                        Metric: "optio",
                        Name: "totam",
                        OverrideValue: "beatae",
                        Unit: "commodi",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Services

* `ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides` - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet` - Retrieves a summary of quota information for a specific quota limit.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate` - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete` - Deletes a producer override.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList` - Lists all producer overrides on this limit.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch` - Updates a producer override.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsList` - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
