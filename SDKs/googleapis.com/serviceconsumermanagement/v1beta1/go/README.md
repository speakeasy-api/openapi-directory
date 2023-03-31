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
        DollarXgafv: "2",
        V1Beta1ImportProducerOverridesRequest: &shared.V1Beta1ImportProducerOverridesRequest{
            Force: false,
            ForceOnly: []shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum{
                "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH",
                "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH",
                "LIMIT_DECREASE_BELOW_USAGE",
            },
            InlineSource: &shared.V1Beta1OverrideInlineSource{
                Overrides: []shared.V1Beta1QuotaOverride{
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "corrupti",
                        Dimensions: map[string]string{
                            "vel": "error",
                            "deserunt": "suscipit",
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        Metric: "delectus",
                        Name: "tempora",
                        OverrideValue: "suscipit",
                        Unit: "molestiae",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "minus",
                        Dimensions: map[string]string{
                            "voluptatum": "iusto",
                            "excepturi": "nisi",
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        Metric: "veritatis",
                        Name: "deserunt",
                        OverrideValue: "perferendis",
                        Unit: "ipsam",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "repellendus",
                        Dimensions: map[string]string{
                            "quo": "odit",
                            "at": "at",
                            "maiores": "molestiae",
                            "quod": "quod",
                        },
                        Metric: "esse",
                        Name: "totam",
                        OverrideValue: "porro",
                        Unit: "dolorum",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "dicta",
                        Dimensions: map[string]string{
                            "officia": "occaecati",
                            "fugit": "deleniti",
                            "hic": "optio",
                        },
                        Metric: "totam",
                        Name: "beatae",
                        OverrideValue: "commodi",
                        Unit: "molestiae",
                    },
                },
            },
        },
        AccessToken: "modi",
        Alt: "json",
        Callback: "impedit",
        Fields: "cum",
        Key: "esse",
        OauthToken: "ipsum",
        Parent: "excepturi",
        PrettyPrint: false,
        QuotaUser: "aspernatur",
        UploadType: "perferendis",
        UploadProtocol: "ad",
    }

    ctx := context.Background()
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(ctx, req, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Services

* `ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides` - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet` - Retrieves a summary of quota information for a specific quota limit.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate` - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete` - Deletes a producer override.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList` - Lists all producer overrides on this limit.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch` - Updates a producer override.
* `ServiceconsumermanagementServicesConsumerQuotaMetricsList` - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
