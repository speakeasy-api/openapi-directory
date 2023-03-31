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