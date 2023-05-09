# interconnectRemoteLocations

### Available Operations

* [computeInterconnectRemoteLocationsGet](#computeinterconnectremotelocationsget) - Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.
* [computeInterconnectRemoteLocationsList](#computeinterconnectremotelocationslist) - Retrieves the list of interconnect remote locations available to the specified project.
* [computeInterconnectRemoteLocationsTestIamPermissions](#computeinterconnectremotelocationstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectRemoteLocationsGet

Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsGetRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsGetResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectRemoteLocationsGetRequest req = new ComputeInterconnectRemoteLocationsGetRequest("quod", "at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "non";
                key = "porro";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "sunt";
                uploadProtocol = "beatae";
                userIp = "ratione";
            }};            

            ComputeInterconnectRemoteLocationsGetResponse res = sdk.interconnectRemoteLocations.computeInterconnectRemoteLocationsGet(req, new ComputeInterconnectRemoteLocationsGetSecurity() {{
                option1 = new ComputeInterconnectRemoteLocationsGetSecurityOption1("blanditiis", "illo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectRemoteLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectRemoteLocationsList

Retrieves the list of interconnect remote locations available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsListRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsListResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsListSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectRemoteLocationsListRequest req = new ComputeInterconnectRemoteLocationsListRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "corporis";
                filter = "quidem";
                key = "iste";
                maxResults = 227941L;
                oauthToken = "quisquam";
                orderBy = "eveniet";
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "autem";
                returnPartialSuccess = false;
                uploadType = "quas";
                uploadProtocol = "odio";
                userIp = "harum";
            }};            

            ComputeInterconnectRemoteLocationsListResponse res = sdk.interconnectRemoteLocations.computeInterconnectRemoteLocationsList(req, new ComputeInterconnectRemoteLocationsListSecurity() {{
                option1 = new ComputeInterconnectRemoteLocationsListSecurityOption1("quidem", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectRemoteLocationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectRemoteLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectRemoteLocationsTestIamPermissionsRequest req = new ComputeInterconnectRemoteLocationsTestIamPermissionsRequest("corporis", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("tempora"),
                        add("harum"),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "dicta";
                key = "porro";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "expedita";
                uploadProtocol = "error";
                userIp = "sunt";
            }};            

            ComputeInterconnectRemoteLocationsTestIamPermissionsResponse res = sdk.interconnectRemoteLocations.computeInterconnectRemoteLocationsTestIamPermissions(req, new ComputeInterconnectRemoteLocationsTestIamPermissionsSecurity() {{
                option1 = new ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption1("placeat", "dignissimos") {{
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
