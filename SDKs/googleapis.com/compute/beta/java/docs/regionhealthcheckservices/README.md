# regionHealthCheckServices

### Available Operations

* [computeRegionHealthCheckServicesDelete](#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthCheckServicesTestIamPermissions](#computeregionhealthcheckservicestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionHealthCheckServicesDelete

Deletes the specified regional HealthCheckService.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesDeleteRequest req = new ComputeRegionHealthCheckServicesDeleteRequest("sit", "dolore", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "harum";
                key = "minus";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "deleniti";
                uploadType = "harum";
                uploadProtocol = "eaque";
                userIp = "sit";
            }};            

            ComputeRegionHealthCheckServicesDeleteResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesDelete(req, new ComputeRegionHealthCheckServicesDeleteSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesDeleteSecurityOption1("iure", "repudiandae") {{
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

## computeRegionHealthCheckServicesGet

Returns the specified regional HealthCheckService resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesGetRequest req = new ComputeRegionHealthCheckServicesGetRequest("ab", "corrupti", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "autem";
                key = "tempore";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "accusantium";
                uploadProtocol = "sapiente";
                userIp = "molestiae";
            }};            

            ComputeRegionHealthCheckServicesGetResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesGet(req, new ComputeRegionHealthCheckServicesGetSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesGetSecurityOption1("incidunt", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.healthCheckService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionHealthCheckServicesInsert

Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HealthCheckService;
import org.openapis.openapi.models.shared.HealthCheckServiceHealthStatusAggregationPolicyEnum;
import org.openapis.openapi.models.shared.HealthCheckServiceHealthStatusAggregationStrategyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesInsertRequest req = new ComputeRegionHealthCheckServicesInsertRequest("ea", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheckService = new HealthCheckService() {{
                    creationTimestamp = "odio";
                    description = "magni";
                    fingerprint = "explicabo";
                    healthChecks = new String[]{{
                        add("consequuntur"),
                        add("nulla"),
                        add("saepe"),
                    }};
                    healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum.NO_AGGREGATION;
                    healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum.AND;
                    id = "expedita";
                    kind = "deleniti";
                    name = "Darrell Robel";
                    networkEndpointGroups = new String[]{{
                        add("dolores"),
                    }};
                    notificationEndpoints = new String[]{{
                        add("cum"),
                    }};
                    region = "magnam";
                    selfLink = "asperiores";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "doloribus";
                key = "quia";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "pariatur";
                requestId = "tempora";
                uploadType = "iusto";
                uploadProtocol = "incidunt";
                userIp = "consequuntur";
            }};            

            ComputeRegionHealthCheckServicesInsertResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesInsert(req, new ComputeRegionHealthCheckServicesInsertSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesInsertSecurityOption1("unde", "voluptates") {{
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

## computeRegionHealthCheckServicesList

Lists all the HealthCheckService resources that have been configured for the specified project in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesListRequest req = new ComputeRegionHealthCheckServicesListRequest("repellendus", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "ipsam";
                filter = "cum";
                key = "consequuntur";
                maxResults = 994687L;
                oauthToken = "debitis";
                orderBy = "inventore";
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "natus";
                returnPartialSuccess = false;
                uploadType = "odit";
                uploadProtocol = "eius";
                userIp = "veniam";
            }};            

            ComputeRegionHealthCheckServicesListResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesList(req, new ComputeRegionHealthCheckServicesListSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesListSecurityOption1("sed", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.healthCheckServicesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionHealthCheckServicesPatch

Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HealthCheckService;
import org.openapis.openapi.models.shared.HealthCheckServiceHealthStatusAggregationPolicyEnum;
import org.openapis.openapi.models.shared.HealthCheckServiceHealthStatusAggregationStrategyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesPatchRequest req = new ComputeRegionHealthCheckServicesPatchRequest("labore", "esse", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheckService1 = new HealthCheckService() {{
                    creationTimestamp = "similique";
                    description = "odio";
                    fingerprint = "enim";
                    healthChecks = new String[]{{
                        add("beatae"),
                        add("repellendus"),
                        add("sunt"),
                        add("voluptatum"),
                    }};
                    healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum.NO_AGGREGATION;
                    healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum.AND;
                    id = "molestiae";
                    kind = "repellendus";
                    name = "Georgia Boyer";
                    networkEndpointGroups = new String[]{{
                        add("modi"),
                        add("sed"),
                        add("at"),
                        add("ullam"),
                    }};
                    notificationEndpoints = new String[]{{
                        add("aliquam"),
                        add("commodi"),
                        add("a"),
                    }};
                    region = "repudiandae";
                    selfLink = "molestias";
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "nemo";
                key = "provident";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "hic";
                requestId = "eveniet";
                uploadType = "et";
                uploadProtocol = "itaque";
                userIp = "quo";
            }};            

            ComputeRegionHealthCheckServicesPatchResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesPatch(req, new ComputeRegionHealthCheckServicesPatchSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesPatchSecurityOption1("corporis", "doloremque") {{
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

## computeRegionHealthCheckServicesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesTestIamPermissionsRequest req = new ComputeRegionHealthCheckServicesTestIamPermissionsRequest("quaerat", "beatae", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("libero"),
                        add("ab"),
                        add("perspiciatis"),
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "nisi";
                key = "ipsa";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "illo";
                uploadProtocol = "quibusdam";
                userIp = "nam";
            }};            

            ComputeRegionHealthCheckServicesTestIamPermissionsResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesTestIamPermissions(req, new ComputeRegionHealthCheckServicesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption1("cumque", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
