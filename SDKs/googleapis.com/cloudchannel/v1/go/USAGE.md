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
    res, err := s.Accounts.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(ctx, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudChannelV1ChannelPartnerRepricingConfigInput: &shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput{
            RepricingConfig: &shared.GoogleCloudChannelV1RepricingConfig{
                Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                    PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                        Percentage: &shared.GoogleTypeDecimal{
                            Value: sdk.String("provident"),
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
                                    Value: sdk.String("deserunt"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("iure"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("magnam"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumDirectCustomerCost.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("ipsa"),
                            },
                        },
                    },
                    shared.GoogleCloudChannelV1ConditionalOverride{
                        Adjustment: &shared.GoogleCloudChannelV1RepricingAdjustment{
                            PercentageAdjustment: &shared.GoogleCloudChannelV1PercentageAdjustment{
                                Percentage: &shared.GoogleTypeDecimal{
                                    Value: sdk.String("delectus"),
                                },
                            },
                        },
                        RebillingBasis: shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumRebillingBasisUnspecified.ToPointer(),
                        RepricingCondition: &shared.GoogleCloudChannelV1RepricingCondition{
                            SkuGroupCondition: &shared.GoogleCloudChannelV1SkuGroupCondition{
                                SkuGroup: sdk.String("suscipit"),
                            },
                        },
                    },
                },
                EffectiveInvoiceMonth: &shared.GoogleTypeDate{
                    Day: sdk.Int(477665),
                    Month: sdk.Int(791725),
                    Year: sdk.Int(812169),
                },
                EntitlementGranularity: &shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity{
                    Entitlement: sdk.String("voluptatum"),
                },
                RebillingBasis: shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnumCostAtList.ToPointer(),
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity{
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