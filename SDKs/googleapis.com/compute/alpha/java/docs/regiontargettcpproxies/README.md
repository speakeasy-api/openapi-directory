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

            ComputeRegionTargetTcpProxiesDeleteRequest req = new ComputeRegionTargetTcpProxiesDeleteRequest("quam", "facere", "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "excepturi";
                key = "quia";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "repellat";
                requestId = "reiciendis";
                uploadType = "voluptatum";
                uploadProtocol = "beatae";
                userIp = "occaecati";
            }};            

            ComputeRegionTargetTcpProxiesDeleteResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesDelete(req, new ComputeRegionTargetTcpProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesDeleteSecurityOption1("rerum", "voluptatum") {{
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

            ComputeRegionTargetTcpProxiesGetRequest req = new ComputeRegionTargetTcpProxiesGetRequest("deserunt", "harum", "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "blanditiis";
                key = "commodi";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "fugit";
                uploadProtocol = "blanditiis";
                userIp = "repudiandae";
            }};            

            ComputeRegionTargetTcpProxiesGetResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesGet(req, new ComputeRegionTargetTcpProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesGetSecurityOption1("vel", "cum") {{
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

            ComputeRegionTargetTcpProxiesInsertRequest req = new ComputeRegionTargetTcpProxiesInsertRequest("perferendis", "rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                targetTcpProxy = new TargetTcpProxy() {{
                    creationTimestamp = "perferendis";
                    description = "saepe";
                    id = "sapiente";
                    kind = "minima";
                    name = "Phillip Vandervort";
                    proxyBind = false;
                    proxyHeader = TargetTcpProxyProxyHeaderEnum.NONE;
                    region = "hic";
                    selfLink = "quam";
                    service = "dolore";
                }};;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "quasi";
                key = "aspernatur";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "aliquam";
                requestId = "tempore";
                uploadType = "delectus";
                uploadProtocol = "temporibus";
                userIp = "perspiciatis";
            }};            

            ComputeRegionTargetTcpProxiesInsertResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesInsert(req, new ComputeRegionTargetTcpProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesInsertSecurityOption1("aliquam", "repudiandae") {{
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

            ComputeRegionTargetTcpProxiesListRequest req = new ComputeRegionTargetTcpProxiesListRequest("provident", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "odio";
                filter = "facilis";
                key = "neque";
                maxResults = 407747L;
                oauthToken = "voluptatibus";
                orderBy = "odio";
                pageToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "corporis";
                returnPartialSuccess = false;
                uploadType = "blanditiis";
                uploadProtocol = "quo";
                userIp = "nisi";
            }};            

            ComputeRegionTargetTcpProxiesListResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesList(req, new ComputeRegionTargetTcpProxiesListSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesListSecurityOption1("illum", "quaerat") {{
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

            ComputeRegionTargetTcpProxiesTestIamPermissionsRequest req = new ComputeRegionTargetTcpProxiesTestIamPermissionsRequest("accusamus", "esse", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("aut"),
                        add("ipsam"),
                    }};
                }};;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "maiores";
                key = "voluptatum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "nisi";
                uploadProtocol = "consectetur";
                userIp = "corrupti";
            }};            

            ComputeRegionTargetTcpProxiesTestIamPermissionsResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesTestIamPermissions(req, new ComputeRegionTargetTcpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption1("at", "dolorem") {{
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
