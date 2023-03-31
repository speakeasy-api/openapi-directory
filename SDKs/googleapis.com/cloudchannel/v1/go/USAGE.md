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
        DollarXgafv: "2",
        GoogleCloudChannelV1ChannelPartnerRepricingConfigInput: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: "provident",
                        },
                    },
                },
                ChannelPartnerGranularity: map[string]interface{}{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                ConditionalOverrides: []shared.GoogleCloudChannelV1ConditionalOverride{
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "deserunt",
                                },
                            },
                        },
                        RebillingBasis: "COST_AT_LIST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "iure",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "magnam",
                                },
                            },
                        },
                        RebillingBasis: "DIRECT_CUSTOMER_COST",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "ipsa",
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: "delectus",
                                },
                            },
                        },
                        RebillingBasis: "REBILLING_BASIS_UNSPECIFIED",
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: "suscipit",
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: 477665,
                    Month: 791725,
                    Year: 812169,
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: "voluptatum",
                },
                RebillingBasis: "COST_AT_LIST",
            },
        },
        AccessToken: "excepturi",
        Alt: "media",
        Callback: "recusandae",
        Fields: "temporibus",
        Key: "ab",
        OauthToken: "quis",
        Parent: "veritatis",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "perferendis",
        UploadProtocol: "ipsam",
    }

    ctx := context.Background()
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(ctx, req, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ChannelPartnerRepricingConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->