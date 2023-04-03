<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum;
import org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequest;
import org.openapis.openapi.models.shared.V1Beta1OverrideInlineSource;
import org.openapis.openapi.models.shared.V1Beta1QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest() {{
                dollarXgafv = "2";
                v1Beta1ImportProducerOverridesRequest = new V1Beta1ImportProducerOverridesRequest() {{
                    force = false;
                    forceOnly = new org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum[]{{
                        add("LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"),
                        add("LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"),
                        add("LIMIT_DECREASE_BELOW_USAGE"),
                    }};
                    inlineSource = new V1Beta1OverrideInlineSource() {{
                        overrides = new org.openapis.openapi.models.shared.V1Beta1QuotaOverride[]{{
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "corrupti";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                                metric = "delectus";
                                name = "tempora";
                                overrideValue = "suscipit";
                                unit = "molestiae";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "minus";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("voluptatum", "iusto");
                                    put("excepturi", "nisi");
                                    put("recusandae", "temporibus");
                                    put("ab", "quis");
                                }};
                                metric = "veritatis";
                                name = "deserunt";
                                overrideValue = "perferendis";
                                unit = "ipsam";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "repellendus";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("quo", "odit");
                                    put("at", "at");
                                    put("maiores", "molestiae");
                                    put("quod", "quod");
                                }};
                                metric = "esse";
                                name = "totam";
                                overrideValue = "porro";
                                unit = "dolorum";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "dicta";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                }};
                                metric = "totam";
                                name = "beatae";
                                overrideValue = "commodi";
                                unit = "molestiae";
                            }}),
                        }};
                    }};
                }};
                accessToken = "modi";
                alt = "json";
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                parent = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }}            

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->