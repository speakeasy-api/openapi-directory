# regionHealthCheckServices

### Available Operations

* [computeRegionHealthCheckServicesDelete](#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

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

            ComputeRegionHealthCheckServicesDeleteRequest req = new ComputeRegionHealthCheckServicesDeleteRequest("officia", "maxime", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "illo";
                key = "earum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "asperiores";
                uploadType = "est";
                uploadProtocol = "nulla";
                userIp = "autem";
            }};            

            ComputeRegionHealthCheckServicesDeleteResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesDelete(req, new ComputeRegionHealthCheckServicesDeleteSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesDeleteSecurityOption1("nostrum", "vel") {{
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

            ComputeRegionHealthCheckServicesGetRequest req = new ComputeRegionHealthCheckServicesGetRequest("repellendus", "molestias", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "placeat";
                key = "qui";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "cumque";
                uploadProtocol = "ipsa";
                userIp = "in";
            }};            

            ComputeRegionHealthCheckServicesGetResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesGet(req, new ComputeRegionHealthCheckServicesGetSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesGetSecurityOption1("maxime", "expedita") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesInsertRequest req = new ComputeRegionHealthCheckServicesInsertRequest("sint", "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheckService = new HealthCheckService() {{
                    creationTimestamp = "voluptas";
                    description = "quos";
                    fingerprint = "quas";
                    healthChecks = new String[]{{
                        add("dolorum"),
                        add("accusantium"),
                        add("rerum"),
                    }};
                    healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum.AND;
                    id = "numquam";
                    kind = "placeat";
                    name = "Jamie Heller";
                    networkEndpointGroups = new String[]{{
                        add("aperiam"),
                        add("molestias"),
                        add("repellat"),
                    }};
                    notificationEndpoints = new String[]{{
                        add("quia"),
                    }};
                    region = "ab";
                    selfLink = "vel";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "sequi";
                key = "amet";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "autem";
                requestId = "fugiat";
                uploadType = "officia";
                uploadProtocol = "accusantium";
                userIp = "ducimus";
            }};            

            ComputeRegionHealthCheckServicesInsertResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesInsert(req, new ComputeRegionHealthCheckServicesInsertSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesInsertSecurityOption1("aperiam", "sit") {{
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

            ComputeRegionHealthCheckServicesListRequest req = new ComputeRegionHealthCheckServicesListRequest("itaque", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "sequi";
                filter = "occaecati";
                key = "culpa";
                maxResults = 835299L;
                oauthToken = "sequi";
                orderBy = "repellendus";
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "illum";
                uploadProtocol = "autem";
                userIp = "ab";
            }};            

            ComputeRegionHealthCheckServicesListResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesList(req, new ComputeRegionHealthCheckServicesListSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesListSecurityOption1("possimus", "optio") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthCheckServicesPatchRequest req = new ComputeRegionHealthCheckServicesPatchRequest("tempore", "dignissimos", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheckService1 = new HealthCheckService() {{
                    creationTimestamp = "explicabo";
                    description = "assumenda";
                    fingerprint = "iure";
                    healthChecks = new String[]{{
                        add("expedita"),
                        add("beatae"),
                    }};
                    healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum.NO_AGGREGATION;
                    id = "officia";
                    kind = "illo";
                    name = "Rudolph Cartwright II";
                    networkEndpointGroups = new String[]{{
                        add("aliquam"),
                        add("velit"),
                        add("voluptatem"),
                    }};
                    notificationEndpoints = new String[]{{
                        add("nisi"),
                    }};
                    region = "ad";
                    selfLink = "aliquam";
                }};;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "facilis";
                key = "ipsam";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "iusto";
                uploadType = "explicabo";
                uploadProtocol = "minus";
                userIp = "asperiores";
            }};            

            ComputeRegionHealthCheckServicesPatchResponse res = sdk.regionHealthCheckServices.computeRegionHealthCheckServicesPatch(req, new ComputeRegionHealthCheckServicesPatchSecurity() {{
                option1 = new ComputeRegionHealthCheckServicesPatchSecurityOption1("non", "at") {{
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
