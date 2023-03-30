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

    req := operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest{
        Security: operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams{
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
        Request: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: "suscipit",
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "suscipit",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "minus",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "placeat",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "iusto",
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: 568045,
                    Month: 392785,
                    Year: 925597,
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: "temporibus",
                },
                RebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ChannelPartnerRepricingConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->