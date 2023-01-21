<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.V1Beta1ImportProducerOverridesRequest{
            Force: false,
            ForceOnly: []shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum{
                "QUOTA_SAFETY_CHECK_UNSPECIFIED",
            },
            InlineSource: &shared.V1Beta1OverrideInlineSource{
                Overrides: []shared.V1Beta1QuotaOverride{
                    shared.V1Beta1QuotaOverride{
                        AdminOverrideAncestor: "ut",
                        Dimensions: map[string]string{
                            "et": "voluptate",
                            "iste": "vitae",
                            "totam": "dolores",
                        },
                        Metric: "illum",
                        Name: "debitis",
                        OverrideValue: "vel",
                        Unit: "odio",
                    },
                },
            },
        },
    }
    
    res, err := s.Services.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->