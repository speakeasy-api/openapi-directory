# regionTargetTcpProxies

### Available Operations

* [computeRegionTargetTcpProxiesDelete](#computeregiontargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesGet](#computeregiontargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesInsert](#computeregiontargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetTcpProxiesList](#computeregiontargettcpproxieslist) - Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
* [computeRegionTargetTcpProxiesTestIamPermissions](#computeregiontargettcpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesDeleteRequest req = new ComputeRegionTargetTcpProxiesDeleteRequest("accusantium", "quasi", "commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "quasi";
                key = "illo";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "expedita";
                uploadType = "sint";
                uploadProtocol = "laborum";
                userIp = "fugiat";
            }};            

            ComputeRegionTargetTcpProxiesDeleteResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesDelete(req, new ComputeRegionTargetTcpProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesDeleteSecurityOption1("molestiae", "vel") {{
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

## computeRegionTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesGetRequest req = new ComputeRegionTargetTcpProxiesGetRequest("id", "explicabo", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "possimus";
                key = "sequi";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "ratione";
                uploadProtocol = "atque";
                userIp = "voluptatem";
            }};            

            ComputeRegionTargetTcpProxiesGetResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesGet(req, new ComputeRegionTargetTcpProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesGetSecurityOption1("quos", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetTcpProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetTcpProxy;
import org.openapis.openapi.models.shared.TargetTcpProxyProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesInsertRequest req = new ComputeRegionTargetTcpProxiesInsertRequest("rem", "libero") {{
                dollarXgafv = XgafvEnum.TWO;
                targetTcpProxy = new TargetTcpProxy() {{
                    creationTimestamp = "doloribus";
                    description = "tempora";
                    id = "nam";
                    kind = "qui";
                    name = "Tom Dietrich";
                    proxyBind = false;
                    proxyHeader = TargetTcpProxyProxyHeaderEnum.NONE;
                    region = "doloremque";
                    selfLink = "optio";
                    service = "voluptatum";
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "unde";
                key = "explicabo";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "vel";
                uploadType = "doloremque";
                uploadProtocol = "ipsum";
                userIp = "reiciendis";
            }};            

            ComputeRegionTargetTcpProxiesInsertResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesInsert(req, new ComputeRegionTargetTcpProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesInsertSecurityOption1("voluptatum", "quo") {{
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

## computeRegionTargetTcpProxiesList

Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesListRequest req = new ComputeRegionTargetTcpProxiesListRequest("eligendi", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "et";
                filter = "exercitationem";
                key = "voluptas";
                maxResults = 550853L;
                oauthToken = "at";
                orderBy = "aliquam";
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "neque";
                returnPartialSuccess = false;
                uploadType = "et";
                uploadProtocol = "maxime";
                userIp = "aliquam";
            }};            

            ComputeRegionTargetTcpProxiesListResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesList(req, new ComputeRegionTargetTcpProxiesListSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesListSecurityOption1("reprehenderit", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetTcpProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionTargetTcpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesTestIamPermissionsRequest req = new ComputeRegionTargetTcpProxiesTestIamPermissionsRequest("odio", "ea", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dicta"),
                    }};
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "beatae";
                key = "reiciendis";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "ullam";
                uploadProtocol = "quaerat";
                userIp = "quas";
            }};            

            ComputeRegionTargetTcpProxiesTestIamPermissionsResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesTestIamPermissions(req, new ComputeRegionTargetTcpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption1("repellat", "blanditiis") {{
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
