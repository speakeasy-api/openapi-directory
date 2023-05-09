# regionNotificationEndpoints

### Available Operations

* [computeRegionNotificationEndpointsAggregatedList](#computeregionnotificationendpointsaggregatedlist) - Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.
* [computeRegionNotificationEndpointsDelete](#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.
* [computeRegionNotificationEndpointsTestIamPermissions](#computeregionnotificationendpointstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionNotificationEndpointsAggregatedList

Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNotificationEndpointsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNotificationEndpointsAggregatedListRequest req = new ComputeRegionNotificationEndpointsAggregatedListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                fields = "ut";
                filter = "reprehenderit";
                includeAllScopes = false;
                key = "veniam";
                maxResults = 430250L;
                oauthToken = "excepturi";
                orderBy = "molestias";
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "dolor";
                returnPartialSuccess = false;
                uploadType = "amet";
                uploadProtocol = "facilis";
                userIp = "dolor";
            }};            

            ComputeRegionNotificationEndpointsAggregatedListResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsAggregatedList(req, new ComputeRegionNotificationEndpointsAggregatedListSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsAggregatedListSecurityOption1("quibusdam", "recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notificationEndpointAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            ComputeRegionNotificationEndpointsDeleteRequest req = new ComputeRegionNotificationEndpointsDeleteRequest("quidem", "eius", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "delectus";
                key = "provident";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "eos";
                uploadType = "ad";
                uploadProtocol = "ad";
                userIp = "repellat";
            }};            

            ComputeRegionNotificationEndpointsDeleteResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsDelete(req, new ComputeRegionNotificationEndpointsDeleteSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsDeleteSecurityOption1("quasi", "quia") {{
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

            ComputeRegionNotificationEndpointsGetRequest req = new ComputeRegionNotificationEndpointsGetRequest("aspernatur", "eaque", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "autem";
                key = "neque";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "corporis";
                uploadProtocol = "aliquid";
                userIp = "repellendus";
            }};            

            ComputeRegionNotificationEndpointsGetResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsGet(req, new ComputeRegionNotificationEndpointsGetSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsGetSecurityOption1("deserunt", "non") {{
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

            ComputeRegionNotificationEndpointsInsertRequest req = new ComputeRegionNotificationEndpointsInsertRequest("explicabo", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                notificationEndpoint = new NotificationEndpoint() {{
                    creationTimestamp = "est";
                    description = "quibusdam";
                    grpcSettings = new NotificationEndpointGrpcSettings() {{
                        authority = "ipsam";
                        endpoint = "sunt";
                        payloadName = "neque";
                        resendInterval = new Duration() {{
                            nanos = 56163;
                            seconds = "quod";
                        }};;
                        retryDurationSec = 466075L;
                    }};;
                    id = "ullam";
                    kind = "odio";
                    name = "Jody Ruecker";
                    region = "quia";
                    selfLink = "cumque";
                }};;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "perferendis";
                key = "quod";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "officia";
                requestId = "neque";
                uploadType = "animi";
                uploadProtocol = "mollitia";
                userIp = "iusto";
            }};            

            ComputeRegionNotificationEndpointsInsertResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsInsert(req, new ComputeRegionNotificationEndpointsInsertSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsInsertSecurityOption1("ad", "nemo") {{
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

            ComputeRegionNotificationEndpointsListRequest req = new ComputeRegionNotificationEndpointsListRequest("voluptatum", "repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "reprehenderit";
                filter = "ipsam";
                key = "consequatur";
                maxResults = 76570L;
                oauthToken = "soluta";
                orderBy = "similique";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "veritatis";
                returnPartialSuccess = false;
                uploadType = "porro";
                uploadProtocol = "pariatur";
                userIp = "suscipit";
            }};            

            ComputeRegionNotificationEndpointsListResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsList(req, new ComputeRegionNotificationEndpointsListSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsListSecurityOption1("magni", "fugiat") {{
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

            ComputeRegionNotificationEndpointsTestIamPermissionsRequest req = new ComputeRegionNotificationEndpointsTestIamPermissionsRequest("quae", "reiciendis", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("hic"),
                        add("dolorum"),
                        add("voluptate"),
                    }};
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "aut";
                key = "eveniet";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "quaerat";
                uploadProtocol = "delectus";
                userIp = "expedita";
            }};            

            ComputeRegionNotificationEndpointsTestIamPermissionsResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsTestIamPermissions(req, new ComputeRegionNotificationEndpointsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsTestIamPermissionsSecurityOption1("fuga", "quia") {{
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
