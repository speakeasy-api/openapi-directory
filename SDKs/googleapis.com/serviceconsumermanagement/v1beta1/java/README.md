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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [services](docs/services/README.md)

* [serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides) - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate) - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete) - Deletes a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist) - Lists all producer overrides on this limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch) - Updates a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsList](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslist) - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
