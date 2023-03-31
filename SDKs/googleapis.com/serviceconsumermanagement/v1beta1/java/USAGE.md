<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesPathParams;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesQueryParams;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse;
import org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum;
import org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequest;
import org.openapis.openapi.models.shared.V1Beta1OverrideInlineSource;
import org.openapis.openapi.models.shared.V1Beta1QuotaOverride;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest() {{
                security = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesQueryParams() {{
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
                request = new V1Beta1ImportProducerOverridesRequest() {{
                    force = false;
                    forceOnly = new org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum[]{{
                        add("LIMIT_DECREASE_BELOW_USAGE"),
                        add("QUOTA_SAFETY_CHECK_UNSPECIFIED"),
                    }};
                    inlineSource = new V1Beta1OverrideInlineSource() {{
                        overrides = new org.openapis.openapi.models.shared.V1Beta1QuotaOverride[]{{
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "ipsa";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                    put("iusto", "excepturi");
                                }};
                                metric = "nisi";
                                name = "recusandae";
                                overrideValue = "temporibus";
                                unit = "ab";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "quis";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "perferendis");
                                }};
                                metric = "ipsam";
                                name = "repellendus";
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
                                name = "dicta";
                                overrideValue = "nam";
                                unit = "officia";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "occaecati";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "hic");
                                }};
                                metric = "optio";
                                name = "totam";
                                overrideValue = "beatae";
                                unit = "commodi";
                            }}),
                        }};
                    }};
                }};
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->