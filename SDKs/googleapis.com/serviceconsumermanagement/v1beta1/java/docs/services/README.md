# services

### Available Operations

* [serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides](#serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides) - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet](#serviceconsumermanagementservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate) - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete) - Deletes a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist) - Lists all producer overrides on this limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch) - Updates a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsList](#serviceconsumermanagementservicesconsumerquotametricslist) - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

## serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides

Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

### Example Usage

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

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                v1Beta1ImportProducerOverridesRequest = new V1Beta1ImportProducerOverridesRequest() {{
                    force = false;
                    forceOnly = new org.openapis.openapi.models.shared.V1Beta1ImportProducerOverridesRequestForceOnlyEnum[]{{
                        add(V1Beta1ImportProducerOverridesRequestForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                    }};
                    inlineSource = new V1Beta1OverrideInlineSource() {{
                        overrides = new org.openapis.openapi.models.shared.V1Beta1QuotaOverride[]{{
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "sed";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                }};
                                metric = "in";
                                name = "Sheryl Kertzmann";
                                overrideValue = "architecto";
                                unit = "ipsa";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "reiciendis";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("mollitia", "laborum");
                                    put("dolores", "dolorem");
                                    put("corporis", "explicabo");
                                }};
                                metric = "nobis";
                                name = "Guadalupe Hickle";
                                overrideValue = "accusantium";
                                unit = "iure";
                            }}),
                            add(new V1Beta1QuotaOverride() {{
                                adminOverrideAncestor = "culpa";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("sapiente", "architecto");
                                    put("mollitia", "dolorem");
                                    put("culpa", "consequuntur");
                                    put("repellat", "mollitia");
                                }};
                                metric = "occaecati";
                                name = "Lucy Konopelski";
                                overrideValue = "error";
                                unit = "quia";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity("ipsam", "id") {{
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

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet

Retrieves a summary of quota information for a specific quota limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetSecurity;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
                view = ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetViewEnum.BASIC;
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Beta1ConsumerQuotaLimit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate

Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.V1Beta1QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                v1Beta1QuotaOverride = new V1Beta1QuotaOverride() {{
                    adminOverrideAncestor = "cum";
                    dimensions = new java.util.HashMap<String, String>() {{
                        put("doloremque", "reprehenderit");
                    }};
                    metric = "ut";
                    name = "Willie Hessel";
                    overrideValue = "dicta";
                    unit = "harum";
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum[]{{
                    add(ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                }};
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity("praesentium", "rem") {{
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

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete

Deletes a producer override.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "itaque";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum[]{{
                    add(ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                    add(ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                }};
                key = "est";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity("quibusdam", "labore") {{
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

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList

Lists all producer overrides on this limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                pageSize = 369808L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListSecurity("tempora", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Beta1ListProducerOverridesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch

Updates a producer override.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.V1Beta1QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                v1Beta1QuotaOverride = new V1Beta1QuotaOverride() {{
                    adminOverrideAncestor = "delectus";
                    dimensions = new java.util.HashMap<String, String>() {{
                        put("non", "eligendi");
                        put("sint", "aliquid");
                    }};
                    metric = "provident";
                    name = "Perry Nikolaus";
                    overrideValue = "a";
                    unit = "dolorum";
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "maiores";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum[]{{
                    add(ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                    add(ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                    add(ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                }};
                key = "facere";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                updateMask = "laborum";
                uploadType = "accusamus";
                uploadProtocol = "non";
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity("occaecati", "enim") {{
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

## serviceconsumermanagementServicesConsumerQuotaMetricsList

Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest req = new ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                pageSize = 956084L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
                view = ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum.BASIC;
            }};            

            ServiceconsumermanagementServicesConsumerQuotaMetricsListResponse res = sdk.services.serviceconsumermanagementServicesConsumerQuotaMetricsList(req, new ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity("omnis", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Beta1ListConsumerQuotaMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
