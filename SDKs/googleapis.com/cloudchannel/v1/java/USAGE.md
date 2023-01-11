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
                    parent = "ea";
                }};
                queryParams = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "minima";
                    alt = "media";
                    callback = "ut";
                    fields = "eaque";
                    key = "voluptatem";
                    oauthToken = "quis";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "saepe";
                    uploadProtocol = "esse";
                }};
                request = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "facere";
                                }};
                            }};
                        }};
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("accusamus", "placeat");
                            put("qui", "natus");
                        }};
                        conditionalOverrides = new openapisdk.models.shared.GoogleCloudChannelV1ConditionalOverride[]() {{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "iure";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "DIRECT_CUSTOMER_COST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "delectus";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "voluptatibus";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "COST_AT_LIST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "laboriosam";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "possimus";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "COST_AT_LIST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "placeat";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 7251310948847862279;
                            month = 1058936719184805791;
                            year = 9128763404757230253;
                        }};
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "adipisci";
                        }};
                        rebillingBasis = "DIRECT_CUSTOMER_COST";
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