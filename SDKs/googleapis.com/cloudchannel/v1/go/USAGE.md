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
            Parent: "sit",
        },
        QueryParams: operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams{
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
        Request: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: "dicta",
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "voluptatum": "et",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "dolorem",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "voluptate",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "iste",
                                },
                            },
                        },
                        RebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "totam",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "dolores",
                                },
                            },
                        },
                        RebillingBasis: "DIRECT_CUSTOMER_COST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "debitis",
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: 3706853784096366226,
                    Month: 2627038740284806767,
                    Year: 6303220950515014660,
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: "id",
                },
                RebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
            },
        },
    }
    
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ChannelPartnerRepricingConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->