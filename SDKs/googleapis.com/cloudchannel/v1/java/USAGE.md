<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest;
import org.openapis.openapi.models.operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput() {{
                    repricingConfig = new GoogleCloudChannelV1RepricingConfig() {{
                        adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                            percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                percentage = new GoogleTypeDecimal() {{
                                    value = "suscipit";
                                }};
                            }};
                        }};
                        channelPartnerGranularity = new java.util.HashMap<String, Object>() {{
                            put("magnam", "debitis");
                            put("ipsa", "delectus");
                        }};
                        conditionalOverrides = new org.openapis.openapi.models.shared.GoogleCloudChannelV1ConditionalOverride[]{{
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "suscipit";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "COST_AT_LIST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "minus";
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudChannelV1ConditionalOverride() {{
                                adjustment = new GoogleCloudChannelV1RepricingAdjustment() {{
                                    percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment() {{
                                        percentage = new GoogleTypeDecimal() {{
                                            value = "placeat";
                                        }};
                                    }};
                                }};
                                rebillingBasis = "COST_AT_LIST";
                                repricingCondition = new GoogleCloudChannelV1RepricingCondition() {{
                                    skuGroupCondition = new GoogleCloudChannelV1SkuGroupCondition() {{
                                        skuGroup = "iusto";
                                    }};
                                }};
                            }}),
                        }};
                        effectiveInvoiceMonth = new GoogleTypeDate() {{
                            day = 568045;
                            month = 392785;
                            year = 925597;
                        }};
                        entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity() {{
                            entitlement = "temporibus";
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