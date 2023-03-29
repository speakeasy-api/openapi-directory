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
            Parent: "unde",
        },
        QueryParams: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
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
                        AdminOverrideAncestor: "inventore",
                        Dimensions: map[string]string{
                            "enim": "eum",
                            "voluptatum": "autem",
                            "vel": "non",
                            "deleniti": "similique",
                        },
                        Metric: "reprehenderit",
                        Name: "molestiae",
                        OverrideValue: "quo",
                        Unit: "quasi",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "laboriosam",
                        Dimensions: map[string]string{
                            "est": "voluptatem",
                        },
                        Metric: "consequatur",
                        Name: "fugiat",
                        OverrideValue: "a",
                        Unit: "omnis",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "eos",
                        Dimensions: map[string]string{
                            "accusamus": "reiciendis",
                            "rem": "quibusdam",
                            "et": "praesentium",
                            "occaecati": "dolor",
                        },
                        Metric: "soluta",
                        Name: "sed",
                        OverrideValue: "quisquam",
                        Unit: "rerum",
                    },
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "culpa",
                        Dimensions: map[string]string{
                            "sed": "rerum",
                        },
                        Metric: "possimus",
                        Name: "occaecati",
                        OverrideValue: "odit",
                        Unit: "esse",
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