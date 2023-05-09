# services

### Available Operations

* [serviceusageServicesBatchEnable](#serviceusageservicesbatchenable) - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* [serviceusageServicesConsumerQuotaMetricsImportAdminOverrides](#serviceusageservicesconsumerquotametricsimportadminoverrides) - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides](#serviceusageservicesconsumerquotametricsimportconsumeroverrides) - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate](#serviceusageservicesconsumerquotametricslimitsadminoverridescreate) - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* [serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList](#serviceusageservicesconsumerquotametricslimitsadminoverrideslist) - Lists all admin overrides on this limit.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate](#serviceusageservicesconsumerquotametricslimitsconsumeroverridescreate) - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete](#serviceusageservicesconsumerquotametricslimitsconsumeroverridesdelete) - Deletes a consumer override.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList](#serviceusageservicesconsumerquotametricslimitsconsumeroverrideslist) - Lists all consumer overrides on this limit.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch](#serviceusageservicesconsumerquotametricslimitsconsumeroverridespatch) - Updates a consumer override.
* [serviceusageServicesConsumerQuotaMetricsLimitsGet](#serviceusageservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [serviceusageServicesConsumerQuotaMetricsList](#serviceusageservicesconsumerquotametricslist) - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* [serviceusageServicesDisable](#serviceusageservicesdisable) - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* [serviceusageServicesEnable](#serviceusageservicesenable) - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* [serviceusageServicesGenerateServiceIdentity](#serviceusageservicesgenerateserviceidentity) - Generates service identity for service.
* [serviceusageServicesList](#serviceusageserviceslist) - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

## serviceusageServicesBatchEnable

Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchEnableRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchEnableResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchEnableSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchEnableSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchEnableSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchEnableServicesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesBatchEnableRequest req = new ServiceusageServicesBatchEnableRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                batchEnableServicesRequest = new BatchEnableServicesRequest() {{
                    serviceIds = new String[]{{
                        add("totam"),
                        add("porro"),
                    }};
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            ServiceusageServicesBatchEnableResponse res = sdk.services.serviceusageServicesBatchEnable(req, new ServiceusageServicesBatchEnableSecurity() {{
                option1 = new ServiceusageServicesBatchEnableSecurityOption1("totam", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsImportAdminOverrides

Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportAdminOverridesRequest;
import org.openapis.openapi.models.shared.ImportAdminOverridesRequestForceOnlyEnum;
import org.openapis.openapi.models.shared.OverrideInlineSource;
import org.openapis.openapi.models.shared.QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest req = new ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                importAdminOverridesRequest = new ImportAdminOverridesRequest() {{
                    force = false;
                    forceOnly = new org.openapis.openapi.models.shared.ImportAdminOverridesRequestForceOnlyEnum[]{{
                        add(ImportAdminOverridesRequestForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                        add(ImportAdminOverridesRequestForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                    }};
                    inlineSource = new OverrideInlineSource() {{
                        overrides = new org.openapis.openapi.models.shared.QuotaOverride[]{{
                            add(new QuotaOverride() {{
                                adminOverrideAncestor = "esse";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "aspernatur");
                                }};
                                metric = "perferendis";
                                name = "Faye Cormier";
                                overrideValue = "natus";
                                unit = "laboriosam";
                            }}),
                            add(new QuotaOverride() {{
                                adminOverrideAncestor = "hic";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("fuga", "in");
                                    put("corporis", "iste");
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                }};
                                metric = "ipsa";
                                name = "Carlton O'Hara";
                                overrideValue = "dolorem";
                                unit = "corporis";
                            }}),
                            add(new QuotaOverride() {{
                                adminOverrideAncestor = "explicabo";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("enim", "omnis");
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                                metric = "doloribus";
                                name = "Juan O'Hara";
                                overrideValue = "consequuntur";
                                unit = "repellat";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "commodi";
                key = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsImportAdminOverrides(req, new ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1("quis", "vitae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides

Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportConsumerOverridesRequest;
import org.openapis.openapi.models.shared.ImportConsumerOverridesRequestForceOnlyEnum;
import org.openapis.openapi.models.shared.OverrideInlineSource;
import org.openapis.openapi.models.shared.QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest req = new ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                importConsumerOverridesRequest = new ImportConsumerOverridesRequest() {{
                    force = false;
                    forceOnly = new org.openapis.openapi.models.shared.ImportConsumerOverridesRequestForceOnlyEnum[]{{
                        add(ImportConsumerOverridesRequestForceOnlyEnum.QUOTA_SAFETY_CHECK_UNSPECIFIED),
                        add(ImportConsumerOverridesRequestForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                    }};
                    inlineSource = new OverrideInlineSource() {{
                        overrides = new org.openapis.openapi.models.shared.QuotaOverride[]{{
                            add(new QuotaOverride() {{
                                adminOverrideAncestor = "tenetur";
                                dimensions = new java.util.HashMap<String, String>() {{
                                    put("id", "possimus");
                                    put("aut", "quasi");
                                }};
                                metric = "error";
                                name = "Neal Boyer";
                                overrideValue = "vero";
                                unit = "nihil";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "omnis";
                key = "voluptate";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }};            

            ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides(req, new ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1("ut", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate

Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                quotaOverride = new QuotaOverride() {{
                    adminOverrideAncestor = "dolore";
                    dimensions = new java.util.HashMap<String, String>() {{
                        put("dicta", "harum");
                        put("enim", "accusamus");
                    }};
                    metric = "commodi";
                    name = "Eric Emmerich";
                    overrideValue = "excepturi";
                    unit = "pariatur";
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum[]{{
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                }};
                key = "sint";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate(req, new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1("consequatur", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList

Lists all admin overrides on this limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                pageSize = 397821L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList(req, new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1("assumenda", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAdminOverridesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate

Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                quotaOverride = new QuotaOverride() {{
                    adminOverrideAncestor = "dolorum";
                    dimensions = new java.util.HashMap<String, String>() {{
                        put("tempora", "facilis");
                        put("tempore", "labore");
                        put("delectus", "eum");
                    }};
                    metric = "non";
                    name = "Sergio Hyatt";
                    overrideValue = "sint";
                    unit = "officia";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "dolorum";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum[]{{
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum.LIMIT_DECREASE_BELOW_USAGE),
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                }};
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate(req, new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1("facere", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete

Deletes a consumer override.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum[]{{
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum.LIMIT_DECREASE_BELOW_USAGE),
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH),
                }};
                key = "id";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "sapiente";
                uploadProtocol = "amet";
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete(req, new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1("deserunt", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList

Lists all consumer overrides on this limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                pageSize = 660174L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "suscipit";
                uploadProtocol = "natus";
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList(req, new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1("nobis", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listConsumerOverridesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch

Updates a consumer override.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QuotaOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                quotaOverride = new QuotaOverride() {{
                    adminOverrideAncestor = "architecto";
                    dimensions = new java.util.HashMap<String, String>() {{
                        put("et", "excepturi");
                        put("ullam", "provident");
                    }};
                    metric = "quos";
                    name = "Kenneth O'Hara";
                    overrideValue = "ad";
                    unit = "eum";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "nemo";
                force = false;
                forceOnly = new org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum[]{{
                    add(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum.LIMIT_DECREASE_BELOW_USAGE),
                }};
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                updateMask = "maxime";
                uploadType = "deleniti";
                uploadProtocol = "facilis";
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch(req, new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1("in", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesConsumerQuotaMetricsLimitsGet

Retrieves a summary of quota information for a specific quota limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest req = new ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "repellat";
                key = "quibusdam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
                view = ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum.QUOTA_VIEW_UNSPECIFIED;
            }};            

            ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsLimitsGet(req, new ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1("praesentium", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.consumerQuotaLimit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceusageServicesConsumerQuotaMetricsList

Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsListRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsListResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsListSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsListSecurityOption2;
import org.openapis.openapi.models.operations.ServiceusageServicesConsumerQuotaMetricsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesConsumerQuotaMetricsListRequest req = new ServiceusageServicesConsumerQuotaMetricsListRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                pageSize = 139972L;
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
                view = ServiceusageServicesConsumerQuotaMetricsListViewEnum.FULL;
            }};            

            ServiceusageServicesConsumerQuotaMetricsListResponse res = sdk.services.serviceusageServicesConsumerQuotaMetricsList(req, new ServiceusageServicesConsumerQuotaMetricsListSecurity() {{
                option1 = new ServiceusageServicesConsumerQuotaMetricsListSecurityOption1("ipsam", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listConsumerQuotaMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceusageServicesDisable

Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesDisableRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesDisableResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesDisableSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesDisableSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesDisableSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesDisableRequest req = new ServiceusageServicesDisableRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("pariatur", "nemo");
                }};
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "amet";
                key = "aut";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            ServiceusageServicesDisableResponse res = sdk.services.serviceusageServicesDisable(req, new ServiceusageServicesDisableSecurity() {{
                option1 = new ServiceusageServicesDisableSecurityOption1("nobis", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesEnable

Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesEnableRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesEnableResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesEnableSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesEnableSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesEnableSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesEnableRequest req = new ServiceusageServicesEnableRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eaque", "quis");
                    put("nesciunt", "eos");
                }};
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "quam";
                key = "dolor";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "hic";
                uploadProtocol = "recusandae";
            }};            

            ServiceusageServicesEnableResponse res = sdk.services.serviceusageServicesEnable(req, new ServiceusageServicesEnableSecurity() {{
                option1 = new ServiceusageServicesEnableSecurityOption1("omnis", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesGenerateServiceIdentity

Generates service identity for service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesGenerateServiceIdentityRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesGenerateServiceIdentityResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesGenerateServiceIdentitySecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesGenerateServiceIdentitySecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesGenerateServiceIdentitySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesGenerateServiceIdentityRequest req = new ServiceusageServicesGenerateServiceIdentityRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "error";
                key = "eaque";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "adipisci";
                uploadProtocol = "asperiores";
            }};            

            ServiceusageServicesGenerateServiceIdentityResponse res = sdk.services.serviceusageServicesGenerateServiceIdentity(req, new ServiceusageServicesGenerateServiceIdentitySecurity() {{
                option1 = new ServiceusageServicesGenerateServiceIdentitySecurityOption1("earum", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## serviceusageServicesList

Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesListRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesListResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesListSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesListRequest req = new ServiceusageServicesListRequest("iste") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nobis";
                filter = "libero";
                key = "delectus";
                oauthToken = "quaerat";
                pageSize = 554242L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolorem";
                uploadProtocol = "dolor";
            }};            

            ServiceusageServicesListResponse res = sdk.services.serviceusageServicesList(req, new ServiceusageServicesListSecurity() {{
                option1 = new ServiceusageServicesListSecurityOption1("qui", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
