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
            Parent: "unde",
        },
        QueryParams: operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams{
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
        Request: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: "eum",
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "ullam": "saepe",
                    "inventore": "sapiente",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "eum",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "autem",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "vel",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "deleniti",
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
                    Entitlement: "quo",
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