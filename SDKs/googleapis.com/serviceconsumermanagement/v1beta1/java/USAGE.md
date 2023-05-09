<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequest;
import org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum;
import org.openapis.openapi.models.shared.V1Beta1OverrideInlineSource;
import org.openapis.openapi.models.shared.V1Beta1QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                v1Beta1ImportProducerOverridesRequest = new V1Beta1ImportProducerOverridesRequest() {{
                    force = false;
                    forceOnly = new org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum[]{{
                        add(V1Beta1ImportProducerOverridesRequestForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                        add(V1Beta1ImportProducerOverridesRequestForceOnlyEnum.LIMIT_DECREASE_BELOW_USAGE),
                        add(V1Beta1ImportProducerOverridesRequestForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                    }};
                    inlineSource = new V1Beta1OverrideInlineSource() {{
                        overrides = new org.openapis.openapi.models.shared.V1Beta1QuotaOverride[]{{
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "illum";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("error", "deserunt");
                                    put("suscipit", "iure");
                                }};
                                metric = "magnam";
                                name = "Larry Windler";
                                overrideValue = "molestiae";
                                unit = "minus";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "placeat";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("iusto", "excepturi");
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                }};
                                metric = "quis";
                                name = "Iris Aufderhar";
                                overrideValue = "sapiente";
                                unit = "quo";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "odit";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                    put("totam", "porro");
                                }};
                                metric = "dolorum";
                                name = "Antoinette Nikolaus";
                                overrideValue = "deleniti";
                                unit = "hic";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity("esse", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->