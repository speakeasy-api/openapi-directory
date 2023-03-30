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