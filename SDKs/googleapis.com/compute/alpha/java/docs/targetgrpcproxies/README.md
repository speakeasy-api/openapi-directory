# targetGrpcProxies

### Available Operations

* [computeTargetGrpcProxiesDelete](#computetargetgrpcproxiesdelete) - Deletes the specified TargetGrpcProxy in the given scope
* [computeTargetGrpcProxiesGet](#computetargetgrpcproxiesget) - Returns the specified TargetGrpcProxy resource in the given scope.
* [computeTargetGrpcProxiesInsert](#computetargetgrpcproxiesinsert) - Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
* [computeTargetGrpcProxiesList](#computetargetgrpcproxieslist) - Lists the TargetGrpcProxies for a project in the given scope.
* [computeTargetGrpcProxiesPatch](#computetargetgrpcproxiespatch) - Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetGrpcProxiesTestIamPermissions](#computetargetgrpcproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetGrpcProxiesDelete

Deletes the specified TargetGrpcProxy in the given scope

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesDeleteRequest req = new ComputeTargetGrpcProxiesDeleteRequest("vitae", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "debitis";
                key = "aut";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "rerum";
                uploadType = "cumque";
                uploadProtocol = "quidem";
                userIp = "voluptates";
            }};            

            ComputeTargetGrpcProxiesDeleteResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesDelete(req, new ComputeTargetGrpcProxiesDeleteSecurity() {{
                option1 = new ComputeTargetGrpcProxiesDeleteSecurityOption1("labore", "aliquid") {{
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

## computeTargetGrpcProxiesGet

Returns the specified TargetGrpcProxy resource in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesGetRequest req = new ComputeTargetGrpcProxiesGetRequest("velit", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "eius";
                key = "autem";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "nisi";
                uploadProtocol = "cumque";
                userIp = "reprehenderit";
            }};            

            ComputeTargetGrpcProxiesGetResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesGet(req, new ComputeTargetGrpcProxiesGetSecurity() {{
                option1 = new ComputeTargetGrpcProxiesGetSecurityOption1("quae", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetGrpcProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetGrpcProxiesInsert

Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetGrpcProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesInsertRequest req = new ComputeTargetGrpcProxiesInsertRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                targetGrpcProxy = new TargetGrpcProxy() {{
                    creationTimestamp = "a";
                    description = "qui";
                    fingerprint = "blanditiis";
                    id = "laudantium";
                    kind = "placeat";
                    name = "Emmett Tremblay";
                    selfLink = "qui";
                    selfLinkWithId = "sapiente";
                    urlMap = "corporis";
                    validateForProxyless = false;
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "placeat";
                key = "nostrum";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "omnis";
                uploadType = "laudantium";
                uploadProtocol = "veritatis";
                userIp = "temporibus";
            }};            

            ComputeTargetGrpcProxiesInsertResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesInsert(req, new ComputeTargetGrpcProxiesInsertSecurity() {{
                option1 = new ComputeTargetGrpcProxiesInsertSecurityOption1("minima", "veniam") {{
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

## computeTargetGrpcProxiesList

Lists the TargetGrpcProxies for a project in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesListRequest req = new ComputeTargetGrpcProxiesListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "dignissimos";
                filter = "laborum";
                key = "ipsam";
                maxResults = 7132L;
                oauthToken = "labore";
                orderBy = "odit";
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "dolorum";
                returnPartialSuccess = false;
                uploadType = "possimus";
                uploadProtocol = "harum";
                userIp = "minima";
            }};            

            ComputeTargetGrpcProxiesListResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesList(req, new ComputeTargetGrpcProxiesListSecurity() {{
                option1 = new ComputeTargetGrpcProxiesListSecurityOption1("blanditiis", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetGrpcProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetGrpcProxiesPatch

Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetGrpcProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesPatchRequest req = new ComputeTargetGrpcProxiesPatchRequest("rem", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                targetGrpcProxy1 = new TargetGrpcProxy() {{
                    creationTimestamp = "voluptatibus";
                    description = "dicta";
                    fingerprint = "sapiente";
                    id = "illo";
                    kind = "pariatur";
                    name = "Hugh Nienow";
                    selfLink = "incidunt";
                    selfLinkWithId = "dicta";
                    urlMap = "doloribus";
                    validateForProxyless = false;
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "in";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "nam";
                uploadType = "repudiandae";
                uploadProtocol = "eligendi";
                userIp = "quam";
            }};            

            ComputeTargetGrpcProxiesPatchResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesPatch(req, new ComputeTargetGrpcProxiesPatchSecurity() {{
                option1 = new ComputeTargetGrpcProxiesPatchSecurityOption1("vero", "veniam") {{
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

## computeTargetGrpcProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesTestIamPermissionsRequest req = new ComputeTargetGrpcProxiesTestIamPermissionsRequest("sint", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("doloribus"),
                    }};
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "itaque";
                key = "repellendus";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "nobis";
                uploadProtocol = "enim";
                userIp = "velit";
            }};            

            ComputeTargetGrpcProxiesTestIamPermissionsResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesTestIamPermissions(req, new ComputeTargetGrpcProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption1("odio", "atque") {{
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
