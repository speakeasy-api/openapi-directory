# services

### Available Operations

* [serviceusageServicesBatchEnable](#serviceusageservicesbatchenable) - Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.
* [serviceusageServicesBatchGet](#serviceusageservicesbatchget) - Returns the service configurations and enabled states for a given list of services.
* [serviceusageServicesDisable](#serviceusageservicesdisable) - Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.
* [serviceusageServicesEnable](#serviceusageservicesenable) - Enable a service so that it can be used with a project.
* [serviceusageServicesGet](#serviceusageservicesget) - Returns the service configuration and enabled state for a given service.
* [serviceusageServicesList](#serviceusageserviceslist) - List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

## serviceusageServicesBatchEnable

Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.

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

            ServiceusageServicesBatchEnableRequest req = new ServiceusageServicesBatchEnableRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                batchEnableServicesRequest = new BatchEnableServicesRequest() {{
                    serviceIds = new String[]{{
                        add("hic"),
                        add("saepe"),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            ServiceusageServicesBatchEnableResponse res = sdk.services.serviceusageServicesBatchEnable(req, new ServiceusageServicesBatchEnableSecurity() {{
                option1 = new ServiceusageServicesBatchEnableSecurityOption1("reiciendis", "est") {{
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

## serviceusageServicesBatchGet

Returns the service configurations and enabled states for a given list of services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchGetRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchGetResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchGetSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesBatchGetRequest req = new ServiceusageServicesBatchGetRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "explicabo";
                key = "nobis";
                names = new String[]{{
                    add("omnis"),
                    add("nemo"),
                }};
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            ServiceusageServicesBatchGetResponse res = sdk.services.serviceusageServicesBatchGet(req, new ServiceusageServicesBatchGetSecurity() {{
                option1 = new ServiceusageServicesBatchGetSecurityOption1("culpa", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchGetServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceusageServicesDisable

Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.

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
import org.openapis.openapi.models.shared.DisableServiceRequest;
import org.openapis.openapi.models.shared.DisableServiceRequestCheckIfServiceHasUsageEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesDisableRequest req = new ServiceusageServicesDisableRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                disableServiceRequest = new DisableServiceRequest() {{
                    checkIfServiceHasUsage = DisableServiceRequestCheckIfServiceHasUsageEnum.SKIP;
                    disableDependentServices = false;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            ServiceusageServicesDisableResponse res = sdk.services.serviceusageServicesDisable(req, new ServiceusageServicesDisableSecurity() {{
                option1 = new ServiceusageServicesDisableSecurityOption1("molestiae", "velit") {{
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

Enable a service so that it can be used with a project.

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

            ServiceusageServicesEnableRequest req = new ServiceusageServicesEnableRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vitae", "laborum");
                    put("animi", "enim");
                }};
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                key = "ipsam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aut";
                uploadProtocol = "quasi";
            }};            

            ServiceusageServicesEnableResponse res = sdk.services.serviceusageServicesEnable(req, new ServiceusageServicesEnableSecurity() {{
                option1 = new ServiceusageServicesEnableSecurityOption1("error", "temporibus") {{
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

## serviceusageServicesGet

Returns the service configuration and enabled state for a given service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageServicesGetRequest;
import org.openapis.openapi.models.operations.ServiceusageServicesGetResponse;
import org.openapis.openapi.models.operations.ServiceusageServicesGetSecurity;
import org.openapis.openapi.models.operations.ServiceusageServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageServicesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageServicesGetRequest req = new ServiceusageServicesGetRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            ServiceusageServicesGetResponse res = sdk.services.serviceusageServicesGet(req, new ServiceusageServicesGetSecurity() {{
                option1 = new ServiceusageServicesGetSecurityOption1("cum", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleApiServiceusageV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceusageServicesList

List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

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

            ServiceusageServicesListRequest req = new ServiceusageServicesListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                filter = "dolore";
                key = "iusto";
                oauthToken = "dicta";
                pageSize = 688661L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            ServiceusageServicesListResponse res = sdk.services.serviceusageServicesList(req, new ServiceusageServicesListSecurity() {{
                option1 = new ServiceusageServicesListSecurityOption1("quae", "ipsum") {{
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
