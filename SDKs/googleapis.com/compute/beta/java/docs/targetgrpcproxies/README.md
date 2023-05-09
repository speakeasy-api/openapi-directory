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

            ComputeTargetGrpcProxiesDeleteRequest req = new ComputeTargetGrpcProxiesDeleteRequest("soluta", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "atque";
                key = "nobis";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "quam";
                uploadType = "cum";
                uploadProtocol = "quo";
                userIp = "modi";
            }};            

            ComputeTargetGrpcProxiesDeleteResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesDelete(req, new ComputeTargetGrpcProxiesDeleteSecurity() {{
                option1 = new ComputeTargetGrpcProxiesDeleteSecurityOption1("odio", "ducimus") {{
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

            ComputeTargetGrpcProxiesGetRequest req = new ComputeTargetGrpcProxiesGetRequest("vero", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "tempore";
                key = "tempora";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "optio";
                uploadProtocol = "aspernatur";
                userIp = "eaque";
            }};            

            ComputeTargetGrpcProxiesGetResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesGet(req, new ComputeTargetGrpcProxiesGetSecurity() {{
                option1 = new ComputeTargetGrpcProxiesGetSecurityOption1("deserunt", "excepturi") {{
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

            ComputeTargetGrpcProxiesInsertRequest req = new ComputeTargetGrpcProxiesInsertRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                targetGrpcProxy = new TargetGrpcProxy() {{
                    creationTimestamp = "nisi";
                    description = "quo";
                    fingerprint = "sapiente";
                    id = "voluptate";
                    kind = "reprehenderit";
                    name = "Rickey Upton";
                    selfLink = "necessitatibus";
                    selfLinkWithId = "fugiat";
                    urlMap = "ducimus";
                    validateForProxyless = false;
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "sunt";
                fields = "incidunt";
                key = "voluptate";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "ab";
                uploadType = "in";
                uploadProtocol = "at";
                userIp = "nostrum";
            }};            

            ComputeTargetGrpcProxiesInsertResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesInsert(req, new ComputeTargetGrpcProxiesInsertSecurity() {{
                option1 = new ComputeTargetGrpcProxiesInsertSecurityOption1("qui", "veniam") {{
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

            ComputeTargetGrpcProxiesListRequest req = new ComputeTargetGrpcProxiesListRequest("laudantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "autem";
                filter = "consequatur";
                key = "eius";
                maxResults = 344599L;
                oauthToken = "repellat";
                orderBy = "maiores";
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "accusantium";
                returnPartialSuccess = false;
                uploadType = "voluptate";
                uploadProtocol = "veniam";
                userIp = "ab";
            }};            

            ComputeTargetGrpcProxiesListResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesList(req, new ComputeTargetGrpcProxiesListSecurity() {{
                option1 = new ComputeTargetGrpcProxiesListSecurityOption1("doloremque", "quae") {{
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

            ComputeTargetGrpcProxiesPatchRequest req = new ComputeTargetGrpcProxiesPatchRequest("illo", "totam") {{
                dollarXgafv = XgafvEnum.TWO;
                targetGrpcProxy1 = new TargetGrpcProxy() {{
                    creationTimestamp = "earum";
                    description = "possimus";
                    fingerprint = "libero";
                    id = "cupiditate";
                    kind = "reiciendis";
                    name = "Ada Kohler";
                    selfLink = "ipsum";
                    selfLinkWithId = "corporis";
                    urlMap = "accusantium";
                    validateForProxyless = false;
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "nesciunt";
                key = "hic";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "accusantium";
                uploadType = "fugit";
                uploadProtocol = "doloremque";
                userIp = "modi";
            }};            

            ComputeTargetGrpcProxiesPatchResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesPatch(req, new ComputeTargetGrpcProxiesPatchSecurity() {{
                option1 = new ComputeTargetGrpcProxiesPatchSecurityOption1("accusamus", "eaque") {{
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

            ComputeTargetGrpcProxiesTestIamPermissionsRequest req = new ComputeTargetGrpcProxiesTestIamPermissionsRequest("vitae", "odit") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dolorum"),
                        add("quas"),
                        add("corporis"),
                        add("adipisci"),
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "consectetur";
                key = "similique";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "culpa";
                uploadProtocol = "aliquam";
                userIp = "magnam";
            }};            

            ComputeTargetGrpcProxiesTestIamPermissionsResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesTestIamPermissions(req, new ComputeTargetGrpcProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption1("eaque", "asperiores") {{
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
