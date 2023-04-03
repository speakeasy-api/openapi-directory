<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfig;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingCondition;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1SkuGroupCondition;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1RepricingAdjustment;
import org.openapis.openapi.models.shared.GoogleCloudChannelV1PercentageAdjustment;
import org.openapis.openapi.models.shared.GoogleTypeDecimal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest req = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudChannelV1ChannelPartnerRepricingConfigInput = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "provident";
                                }};
                            }};
                        }};
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                            put("illum", "vel");
                        }};
                        conditionalOverrides = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride[]{{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "deserunt";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "COST_AT_LIST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "iure";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "magnam";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "DIRECT_CUSTOMER_COST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "ipsa";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "delectus";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "REBILLING_BASIS_UNSPECIFIED";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "suscipit";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 477665;
                            month = 791725;
                            year = 812169;
                        }};
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "voluptatum";
                        }};
                        rebillingBasis = "COST_AT_LIST";
                    }};
                }};
                accessToken = "excepturi";
                alt = "media";
                callback = "recusandae";
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                parent = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "perferendis";
                uploadProtocol = "ipsam";
            }}            

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse res = sdk.accounts.cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(req, new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ChannelPartnerRepricingConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->