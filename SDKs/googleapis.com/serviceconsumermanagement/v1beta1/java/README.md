# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### services

* `serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides` - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet` - Retrieves a summary of quota information for a specific quota limit.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate` - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete` - Deletes a producer override.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList` - Lists all producer overrides on this limit.
* `serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch` - Updates a producer override.
* `serviceconsumermanagementServicesConsumerQuotaMetricsList` - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
