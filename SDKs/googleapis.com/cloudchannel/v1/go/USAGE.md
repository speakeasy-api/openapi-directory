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
            Parent: "ut",
        },
        QueryParams: operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deleniti",
            Alt: "media",
            Callback: "enim",
            Fields: "qui",
            Key: "explicabo",
            OauthToken: "sunt",
            PrettyPrint: true,
            QuotaUser: "quod",
            UploadType: "eum",
            UploadProtocol: "recusandae",
        },
        Request: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: "expedita",
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "eligendi": "est",
                    "similique": "architecto",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "voluptatem",
                                },
                            },
                        },
                        RebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "reiciendis",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "et",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "minima",
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: 8400191370363322538,
                    Month: 1679234503331891236,
                    Year: 922063643662310344,
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: "qui",
                },
                RebillingBasis: "COST_AT_LIST",
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