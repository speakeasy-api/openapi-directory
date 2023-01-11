<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest req = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest() {{
                security = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "dicta";
                                }};
                            }};
                        }};
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("voluptatum", "et");
                        }};
                        conditionalOverrides = new openapisdk.models.shared.GoogleCloudChannelV1ConditionalOverride[]() {{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "dolorem";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "COST_AT_LIST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "voluptate";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "iste";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "REBILLING_BASIS_UNSPECIFIED";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "totam";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "dolores";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "DIRECT_CUSTOMER_COST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "debitis";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 3706853784096366226;
                            month = 2627038740284806767;
                            year = 6303220950515014660;
                        }};
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "id";
                        }};
                        rebillingBasis = "REBILLING_BASIS_UNSPECIFIED";
                    }};
                }};
            }};

            CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse res = sdk.accounts.cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(req);

            if (res.googleCloudChannelV1ChannelPartnerRepricingConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->