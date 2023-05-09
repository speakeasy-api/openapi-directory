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
                shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh,
                shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh,
                shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage,
            },
            InlineSource: &shared.V1Beta1OverrideInlineSource{
                Overrides: []shared.V1Beta1QuotaOverride{
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: sdk.String("corrupti"),
                        Dimensions: map[string]string{
                            "vel": "error",
                            "deserunt": "suscipit",
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        Metric: sdk.String("delectus"),
                        Name: sdk.String("Laurie Kreiger"),
                        OverrideValue: sdk.String("voluptatum"),
                        Unit: sdk.String("iusto"),
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: sdk.String("excepturi"),
                        Dimensions: map[string]string{
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        Metric: sdk.String("veritatis"),
                        Name: sdk.String("Christopher Hills"),
                        OverrideValue: sdk.String("quo"),
                        Unit: sdk.String("odit"),
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: sdk.String("at"),
                        Dimensions: map[string]string{
                            "maiores": "molestiae",
                            "quod": "quod",
                            "esse": "totam",
                            "porro": "dolorum",
                        },
                        Metric: sdk.String("dicta"),
                        Name: sdk.String("Luke McCullough"),
                        OverrideValue: sdk.String("hic"),
                        Unit: sdk.String("optio"),
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: sdk.String("totam"),
                        Dimensions: map[string]string{
                            "commodi": "molestiae",
                        },
                        Metric: sdk.String("modi"),
                        Name: sdk.String("Krista Rippin"),
                        OverrideValue: sdk.String("excepturi"),
                        Unit: sdk.String("aspernatur"),
                    },
                },
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Services](docs/services/README.md)

* [ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides) - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGet](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate) - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete) - Deletes a producer override.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist) - Lists all producer overrides on this limit.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch) - Updates a producer override.
* [ServiceconsumermanagementServicesConsumerQuotaMetricsList](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslist) - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
