# targetTcpProxies

### Available Operations

* [computeTargetTcpProxiesAggregatedList](#computetargettcpproxiesaggregatedlist) - Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
* [computeTargetTcpProxiesDelete](#computetargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesGet](#computetargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesInsert](#computetargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project using the data included in the request.
* [computeTargetTcpProxiesList](#computetargettcpproxieslist) - Retrieves the list of TargetTcpProxy resources available to the specified project.
* [computeTargetTcpProxiesSetBackendService](#computetargettcpproxiessetbackendservice) - Changes the BackendService for TargetTcpProxy.
* [computeTargetTcpProxiesSetProxyHeader](#computetargettcpproxiessetproxyheader) - Changes the ProxyHeaderType for TargetTcpProxy.
* [computeTargetTcpProxiesTestIamPermissions](#computetargettcpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetTcpProxiesAggregatedList

Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesAggregatedListRequest req = new ComputeTargetTcpProxiesAggregatedListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "repudiandae";
                filter = "eaque";
                includeAllScopes = false;
                key = "alias";
                maxResults = 82057L;
                oauthToken = "iste";
                orderBy = "quia";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "deserunt";
                returnPartialSuccess = false;
                uploadType = "culpa";
                uploadProtocol = "doloremque";
                userIp = "alias";
            }};            

            ComputeTargetTcpProxiesAggregatedListResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesAggregatedList(req, new ComputeTargetTcpProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetTcpProxiesAggregatedListSecurityOption1("officia", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetTcpProxyAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesDeleteRequest req = new ComputeTargetTcpProxiesDeleteRequest("tempora", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "expedita";
                key = "eius";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "dolores";
                uploadType = "cum";
                uploadProtocol = "esse";
                userIp = "est";
            }};            

            ComputeTargetTcpProxiesDeleteResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesDelete(req, new ComputeTargetTcpProxiesDeleteSecurity() {{
                option1 = new ComputeTargetTcpProxiesDeleteSecurityOption1("officia", "dolores") {{
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

## computeTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesGetRequest req = new ComputeTargetTcpProxiesGetRequest("quos", "hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "iusto";
                key = "unde";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "corrupti";
                uploadProtocol = "sed";
                userIp = "ex";
            }};            

            ComputeTargetTcpProxiesGetResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesGet(req, new ComputeTargetTcpProxiesGetSecurity() {{
                option1 = new ComputeTargetTcpProxiesGetSecurityOption1("labore", "officiis") {{
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

## computeTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetTcpProxy;
import org.openapis.openapi.models.shared.TargetTcpProxyProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesInsertRequest req = new ComputeTargetTcpProxiesInsertRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                targetTcpProxy = new TargetTcpProxy() {{
                    creationTimestamp = "officia";
                    description = "explicabo";
                    id = "placeat";
                    kind = "enim";
                    name = "Billy Streich";
                    proxyBind = false;
                    proxyHeader = TargetTcpProxyProxyHeaderEnum.PROXY_V1;
                    region = "consequuntur";
                    selfLink = "iste";
                    service = "itaque";
                }};;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "numquam";
                key = "sunt";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "laudantium";
                uploadType = "consectetur";
                uploadProtocol = "mollitia";
                userIp = "unde";
            }};            

            ComputeTargetTcpProxiesInsertResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesInsert(req, new ComputeTargetTcpProxiesInsertSecurity() {{
                option1 = new ComputeTargetTcpProxiesInsertSecurityOption1("iure", "officia") {{
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

## computeTargetTcpProxiesList

Retrieves the list of TargetTcpProxy resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesListRequest req = new ComputeTargetTcpProxiesListRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "nesciunt";
                filter = "voluptates";
                key = "aliquid";
                maxResults = 306548L;
                oauthToken = "eos";
                orderBy = "quae";
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "quis";
                returnPartialSuccess = false;
                uploadType = "ullam";
                uploadProtocol = "ex";
                userIp = "minima";
            }};            

            ComputeTargetTcpProxiesListResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesList(req, new ComputeTargetTcpProxiesListSecurity() {{
                option1 = new ComputeTargetTcpProxiesListSecurityOption1("reprehenderit", "vero") {{
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

## computeTargetTcpProxiesSetBackendService

Changes the BackendService for TargetTcpProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetBackendServiceRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetBackendServiceResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetBackendServiceSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetBackendServiceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetBackendServiceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetTcpProxiesSetBackendServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesSetBackendServiceRequest req = new ComputeTargetTcpProxiesSetBackendServiceRequest("dignissimos", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxiesSetBackendServiceRequest = new TargetTcpProxiesSetBackendServiceRequest() {{
                    service = "sit";
                }};;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "dicta";
                key = "pariatur";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "beatae";
                uploadType = "tenetur";
                uploadProtocol = "repellat";
                userIp = "voluptatum";
            }};            

            ComputeTargetTcpProxiesSetBackendServiceResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesSetBackendService(req, new ComputeTargetTcpProxiesSetBackendServiceSecurity() {{
                option1 = new ComputeTargetTcpProxiesSetBackendServiceSecurityOption1("sapiente", "dicta") {{
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

## computeTargetTcpProxiesSetProxyHeader

Changes the ProxyHeaderType for TargetTcpProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetProxyHeaderRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetProxyHeaderResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetProxyHeaderSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesSetProxyHeaderSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetTcpProxiesSetProxyHeaderRequest;
import org.openapis.openapi.models.shared.TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesSetProxyHeaderRequest req = new ComputeTargetTcpProxiesSetProxyHeaderRequest("veniam", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxiesSetProxyHeaderRequest = new TargetTcpProxiesSetProxyHeaderRequest() {{
                    proxyHeader = TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum.PROXY_V1;
                }};;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "laborum";
                key = "eos";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "suscipit";
                uploadType = "occaecati";
                uploadProtocol = "occaecati";
                userIp = "necessitatibus";
            }};            

            ComputeTargetTcpProxiesSetProxyHeaderResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesSetProxyHeader(req, new ComputeTargetTcpProxiesSetProxyHeaderSecurity() {{
                option1 = new ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1("atque", "tenetur") {{
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

## computeTargetTcpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetTcpProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetTcpProxiesTestIamPermissionsRequest req = new ComputeTargetTcpProxiesTestIamPermissionsRequest("cumque", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("officia"),
                        add("culpa"),
                        add("laboriosam"),
                    }};
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "sint";
                key = "nihil";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "ex";
                uploadProtocol = "id";
                userIp = "voluptatem";
            }};            

            ComputeTargetTcpProxiesTestIamPermissionsResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesTestIamPermissions(req, new ComputeTargetTcpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetTcpProxiesTestIamPermissionsSecurityOption1("voluptatum", "esse") {{
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
