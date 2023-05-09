# regionNotificationEndpoints

### Available Operations

* [computeRegionNotificationEndpointsDelete](#computeregionnotificationendpointsdelete) - Deletes the specified NotificationEndpoint in the given region
* [computeRegionNotificationEndpointsGet](#computeregionnotificationendpointsget) - Returns the specified NotificationEndpoint resource in the given region.
* [computeRegionNotificationEndpointsInsert](#computeregionnotificationendpointsinsert) - Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
* [computeRegionNotificationEndpointsList](#computeregionnotificationendpointslist) - Lists the NotificationEndpoints for a project in the given region.

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

            ComputeRegionNotificationEndpointsDeleteRequest req = new ComputeRegionNotificationEndpointsDeleteRequest("perspiciatis", "ut", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "magnam";
                key = "at";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "doloremque";
                uploadType = "nihil";
                uploadProtocol = "repellendus";
                userIp = "tempora";
            }};            

            ComputeRegionNotificationEndpointsDeleteResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsDelete(req, new ComputeRegionNotificationEndpointsDeleteSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsDeleteSecurityOption1("excepturi", "blanditiis") {{
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

            ComputeRegionNotificationEndpointsGetRequest req = new ComputeRegionNotificationEndpointsGetRequest("dicta", "veritatis", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "perspiciatis";
                key = "pariatur";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolorum";
                uploadProtocol = "dignissimos";
                userIp = "dignissimos";
            }};            

            ComputeRegionNotificationEndpointsGetResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsGet(req, new ComputeRegionNotificationEndpointsGetSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsGetSecurityOption1("vero", "necessitatibus") {{
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

            ComputeRegionNotificationEndpointsInsertRequest req = new ComputeRegionNotificationEndpointsInsertRequest("quam", "sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                notificationEndpoint = new NotificationEndpoint() {{
                    creationTimestamp = "consequatur";
                    description = "nam";
                    grpcSettings = new NotificationEndpointGrpcSettings() {{
                        authority = "nihil";
                        endpoint = "eius";
                        payloadName = "eius";
                        resendInterval = new Duration() {{
                            nanos = 323304;
                            seconds = "vel";
                        }};;
                        retryDurationSec = 929785L;
                    }};;
                    id = "maiores";
                    kind = "error";
                    name = "Benny Hickle";
                    region = "provident";
                    selfLink = "veniam";
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "tenetur";
                fields = "ipsa";
                key = "expedita";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "cumque";
                uploadType = "ullam";
                uploadProtocol = "voluptatibus";
                userIp = "impedit";
            }};            

            ComputeRegionNotificationEndpointsInsertResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsInsert(req, new ComputeRegionNotificationEndpointsInsertSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsInsertSecurityOption1("impedit", "accusantium") {{
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

            ComputeRegionNotificationEndpointsListRequest req = new ComputeRegionNotificationEndpointsListRequest("voluptates", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "ipsa";
                filter = "iure";
                key = "ipsa";
                maxResults = 29070L;
                oauthToken = "a";
                orderBy = "ab";
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quos";
                returnPartialSuccess = false;
                uploadType = "amet";
                uploadProtocol = "amet";
                userIp = "modi";
            }};            

            ComputeRegionNotificationEndpointsListResponse res = sdk.regionNotificationEndpoints.computeRegionNotificationEndpointsList(req, new ComputeRegionNotificationEndpointsListSecurity() {{
                option1 = new ComputeRegionNotificationEndpointsListSecurityOption1("eos", "quaerat") {{
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
