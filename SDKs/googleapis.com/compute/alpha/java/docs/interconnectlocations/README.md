# interconnectLocations

### Available Operations

* [computeInterconnectLocationsGet](#computeinterconnectlocationsget) - Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
* [computeInterconnectLocationsList](#computeinterconnectlocationslist) - Retrieves the list of interconnect locations available to the specified project.
* [computeInterconnectLocationsTestIamPermissions](#computeinterconnectlocationstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectLocationsGet

Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectLocationsGetRequest req = new ComputeInterconnectLocationsGetRequest("explicabo", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "consequuntur";
                key = "minima";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "consectetur";
                uploadProtocol = "consectetur";
                userIp = "laudantium";
            }};            

            ComputeInterconnectLocationsGetResponse res = sdk.interconnectLocations.computeInterconnectLocationsGet(req, new ComputeInterconnectLocationsGetSecurity() {{
                option1 = new ComputeInterconnectLocationsGetSecurityOption1("tempore", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectLocationsList

Retrieves the list of interconnect locations available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectLocationsListRequest req = new ComputeInterconnectLocationsListRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "repellat";
                filter = "fugiat";
                key = "neque";
                maxResults = 703545L;
                oauthToken = "iure";
                orderBy = "amet";
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "quisquam";
                returnPartialSuccess = false;
                uploadType = "accusantium";
                uploadProtocol = "dignissimos";
                userIp = "adipisci";
            }};            

            ComputeInterconnectLocationsListResponse res = sdk.interconnectLocations.computeInterconnectLocationsList(req, new ComputeInterconnectLocationsListSecurity() {{
                option1 = new ComputeInterconnectLocationsListSecurityOption1("aperiam", "corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectLocationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectLocationsTestIamPermissionsRequest req = new ComputeInterconnectLocationsTestIamPermissionsRequest("corrupti", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("officia"),
                        add("rerum"),
                    }};
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "eos";
                key = "animi";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "doloribus";
                uploadProtocol = "rerum";
                userIp = "eaque";
            }};            

            ComputeInterconnectLocationsTestIamPermissionsResponse res = sdk.interconnectLocations.computeInterconnectLocationsTestIamPermissions(req, new ComputeInterconnectLocationsTestIamPermissionsSecurity() {{
                option1 = new ComputeInterconnectLocationsTestIamPermissionsSecurityOption1("reprehenderit", "ut") {{
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
