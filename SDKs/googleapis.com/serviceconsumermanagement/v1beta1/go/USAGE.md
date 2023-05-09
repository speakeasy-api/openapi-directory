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