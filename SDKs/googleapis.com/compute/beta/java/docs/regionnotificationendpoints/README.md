# regionNotificationEndpoints

### Available Operations

* [computeRegionNotificationEndpointsDelete](#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.
* [computeRegionNotificationEndpointsTestIamPermissions](#computeregionnotificationendpointstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionNotificationEndpointsDelete

Deletes the specified NotificationEndpoint in the given region

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNotificationEndpointsDeleteRequest req = new ComputeRegionNotificationEndpointsDeleteRequest("accusamus", "porro", "placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "quod";
                key = "non";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "illo";
                uploadType = "facilis";
                uploadProtocol = "error";
                userIp = "excepturi";
            }};            

            ComputeRegionNotificationEndpointsDeleteResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsDelete(req, new ComputeRegionNotificationEndpointsDeleteSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsDeleteSecurityOption1("odit", "quo") {{
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

## computeRegionNotificationEndpointsGet

Returns the specified NotificationEndpoint resource in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNotificationEndpointsGetRequest req = new ComputeRegionNotificationEndpointsGetRequest("ipsum", "corrupti", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "a";
                key = "nisi";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "cupiditate";
                uploadProtocol = "possimus";
                userIp = "illo";
            }};            

            ComputeRegionNotificationEndpointsGetResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsGet(req, new ComputeRegionNotificationEndpointsGetSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsGetSecurityOption1("saepe", "exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notificationEndpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNotificationEndpointsInsert

Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.NotificationEndpoint;
import org.openapis.openapi.models.shared.NotificationEndpointGrpcSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNotificationEndpointsInsertRequest req = new ComputeRegionNotificationEndpointsInsertRequest("magnam", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                notificationEndpoint = new NotificationEndpoint() {{
                    creationTimestamp = "repudiandae";
                    description = "nisi";
                    grpcSettings = new NotificationEndpointGrpcSettings() {{
                        authority = "corrupti";
                        endpoint = "reprehenderit";
                        payloadName = "expedita";
                        resendInterval = new Duration() {{
                            nanos = 961541;
                            seconds = "iure";
                        }};;
                        retryDurationSec = 256821L;
                    }};;
                    id = "esse";
                    kind = "aspernatur";
                    name = "Dr. Nancy Balistreri";
                    region = "nihil";
                    selfLink = "quaerat";
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "ducimus";
                key = "in";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "sed";
                uploadType = "doloremque";
                uploadProtocol = "fuga";
                userIp = "expedita";
            }};            

            ComputeRegionNotificationEndpointsInsertResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsInsert(req, new ComputeRegionNotificationEndpointsInsertSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsInsertSecurityOption1("praesentium", "ipsa") {{
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

## computeRegionNotificationEndpointsList

Lists the NotificationEndpoints for a project in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNotificationEndpointsListRequest req = new ComputeRegionNotificationEndpointsListRequest("dolores", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "dolor";
                filter = "adipisci";
                key = "et";
                maxResults = 779110L;
                oauthToken = "facere";
                orderBy = "delectus";
                pageToken = "laudantium";
                prettyPrint = false;
                quotaUser = "tempora";
                returnPartialSuccess = false;
                uploadType = "modi";
                uploadProtocol = "eveniet";
                userIp = "sequi";
            }};            

            ComputeRegionNotificationEndpointsListResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsList(req, new ComputeRegionNotificationEndpointsListSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsListSecurityOption1("tempora", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notificationEndpointList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNotificationEndpointsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNotificationEndpointsTestIamPermissionsRequest req = new ComputeRegionNotificationEndpointsTestIamPermissionsRequest("quas", "enim", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magni"),
                        add("totam"),
                        add("reprehenderit"),
                        add("illo"),
                    }};
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "laudantium";
                key = "similique";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "molestias";
                uploadProtocol = "ad";
                userIp = "error";
            }};            

            ComputeRegionNotificationEndpointsTestIamPermissionsResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsTestIamPermissions(req, new ComputeRegionNotificationEndpointsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption1("adipisci", "animi") {{
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
