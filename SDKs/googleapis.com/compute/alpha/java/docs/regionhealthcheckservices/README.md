# regionHealthCheckServices

### Available Operations

* [computeRegionHealthCheckServicesAggregatedList](#computeregionhealthcheckservicesaggregatedlist) - Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.
* [computeRegionHealthCheckServicesDelete](#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthCheckServicesTestIamPermissions](#computeregionhealthcheckservicestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionHealthCheckServicesAggregatedList

Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthCheckServicesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesAggregatedListRequest req = new ComputeRegionHealthCheckServicesAggregatedListRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "harum";
                filter = "eveniet";
                includeAllScopes = false;
                key = "nam";
                maxResults = 175062L;
                oauthToken = "eos";
                orderBy = "eius";
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "tempora";
                returnPartialSuccess = false;
                uploadType = "id";
                uploadProtocol = "asperiores";
                userIp = "numquam";
            }};            

            ComputeRegionHealthCheckServicesAggregatedListResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesAggregatedList(req, new ComputeRegionHealthCheckServicesAggregatedListSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesAggregatedListSecurityOption1("aperiam", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.healthCheckServiceAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            ComputeRegionHealthCheckServicesDeleteRequest req = new ComputeRegionHealthCheckServicesDeleteRequest("quas", "laudantium", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "architecto";
                key = "veniam";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quia";
                requestId = "tempore";
                uploadType = "nihil";
                uploadProtocol = "voluptatum";
                userIp = "doloremque";
            }};            

            ComputeRegionHealthCheckServicesDeleteResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesDelete(req, new ComputeRegionHealthCheckServicesDeleteSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesDeleteSecurityOption1("alias", "officiis") {{
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

            ComputeRegionHealthCheckServicesGetRequest req = new ComputeRegionHealthCheckServicesGetRequest("ipsa", "tempore", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "voluptates";
                key = "vero";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quidem";
                uploadProtocol = "modi";
                userIp = "porro";
            }};            

            ComputeRegionHealthCheckServicesGetResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesGet(req, new ComputeRegionHealthCheckServicesGetSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesGetSecurityOption1("voluptas", "asperiores") {{
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

            ComputeRegionHealthCheckServicesInsertRequest req = new ComputeRegionHealthCheckServicesInsertRequest("fuga", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheckService = new HealthCheckService() {{
                    creationTimestamp = "quibusdam";
                    description = "adipisci";
                    fingerprint = "exercitationem";
                    healthChecks = new String[]{{
                        add("officiis"),
                        add("dolores"),
                        add("quidem"),
                    }};
                    healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum.AND;
                    healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum.AND;
                    id = "adipisci";
                    kind = "aliquam";
                    name = "Inez Thiel";
                    networkEndpointGroups = new String[]{{
                        add("consequatur"),
                    }};
                    notificationEndpoints = new String[]{{
                        add("perferendis"),
                        add("est"),
                        add("harum"),
                    }};
                    region = "sed";
                    selfLink = "exercitationem";
                    selfLinkWithId = "saepe";
                }};;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "porro";
                key = "dignissimos";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "veritatis";
                requestId = "aliquid";
                uploadType = "quae";
                uploadProtocol = "nesciunt";
                userIp = "dolorum";
            }};            

            ComputeRegionHealthCheckServicesInsertResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesInsert(req, new ComputeRegionHealthCheckServicesInsertSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesInsertSecurityOption1("dolor", "voluptas") {{
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

            ComputeRegionHealthCheckServicesListRequest req = new ComputeRegionHealthCheckServicesListRequest("suscipit", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "rerum";
                filter = "qui";
                key = "id";
                maxResults = 553499L;
                oauthToken = "accusamus";
                orderBy = "quibusdam";
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "nam";
                returnPartialSuccess = false;
                uploadType = "totam";
                uploadProtocol = "in";
                userIp = "voluptate";
            }};            

            ComputeRegionHealthCheckServicesListResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesList(req, new ComputeRegionHealthCheckServicesListSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesListSecurityOption1("accusantium", "quibusdam") {{
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

            ComputeRegionHealthCheckServicesPatchRequest req = new ComputeRegionHealthCheckServicesPatchRequest("numquam", "quo", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheckService1 = new HealthCheckService() {{
                    creationTimestamp = "perspiciatis";
                    description = "placeat";
                    fingerprint = "natus";
                    healthChecks = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("repudiandae"),
                        add("aut"),
                    }};
                    healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum.NO_AGGREGATION;
                    healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum.NO_AGGREGATION;
                    id = "maxime";
                    kind = "veniam";
                    name = "Rochelle Kling";
                    networkEndpointGroups = new String[]{{
                        add("aspernatur"),
                        add("praesentium"),
                        add("amet"),
                    }};
                    notificationEndpoints = new String[]{{
                        add("rem"),
                        add("neque"),
                        add("maxime"),
                        add("voluptas"),
                    }};
                    region = "nulla";
                    selfLink = "nihil";
                    selfLinkWithId = "soluta";
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "assumenda";
                fields = "in";
                key = "quod";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "repudiandae";
                requestId = "voluptatem";
                uploadType = "dolorem";
                uploadProtocol = "repellat";
                userIp = "culpa";
            }};            

            ComputeRegionHealthCheckServicesPatchResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesPatch(req, new ComputeRegionHealthCheckServicesPatchSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesPatchSecurityOption1("dolor", "rem") {{
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

            ComputeRegionHealthCheckServicesTestIamPermissionsRequest req = new ComputeRegionHealthCheckServicesTestIamPermissionsRequest("suscipit", "quos", "molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("unde"),
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "ex";
                key = "sequi";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "exercitationem";
                uploadProtocol = "odio";
                userIp = "ipsum";
            }};            

            ComputeRegionHealthCheckServicesTestIamPermissionsResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesTestIamPermissions(req, new ComputeRegionHealthCheckServicesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption1("eveniet", "cum") {{
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
