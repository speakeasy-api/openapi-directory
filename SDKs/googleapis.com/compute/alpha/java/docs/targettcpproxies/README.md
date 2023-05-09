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

            ComputeTargetTcpProxiesAggregatedListRequest req = new ComputeTargetTcpProxiesAggregatedListRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "animi";
                filter = "culpa";
                includeAllScopes = false;
                key = "totam";
                maxResults = 540352L;
                oauthToken = "veniam";
                orderBy = "beatae";
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "nulla";
                returnPartialSuccess = false;
                uploadType = "dolorem";
                uploadProtocol = "amet";
                userIp = "vel";
            }};            

            ComputeTargetTcpProxiesAggregatedListResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesAggregatedList(req, new ComputeTargetTcpProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetTcpProxiesAggregatedListSecurityOption1("iusto", "non") {{
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

            ComputeTargetTcpProxiesDeleteRequest req = new ComputeTargetTcpProxiesDeleteRequest("id", "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "rerum";
                key = "quod";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "quis";
                uploadType = "ipsam";
                uploadProtocol = "nobis";
                userIp = "illo";
            }};            

            ComputeTargetTcpProxiesDeleteResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesDelete(req, new ComputeTargetTcpProxiesDeleteSecurity() {{
                option1 = new ComputeTargetTcpProxiesDeleteSecurityOption1("impedit", "mollitia") {{
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

            ComputeTargetTcpProxiesGetRequest req = new ComputeTargetTcpProxiesGetRequest("quibusdam", "accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "deserunt";
                key = "odio";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "voluptate";
                uploadProtocol = "libero";
                userIp = "totam";
            }};            

            ComputeTargetTcpProxiesGetResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesGet(req, new ComputeTargetTcpProxiesGetSecurity() {{
                option1 = new ComputeTargetTcpProxiesGetSecurityOption1("fugiat", "cumque") {{
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

            ComputeTargetTcpProxiesInsertRequest req = new ComputeTargetTcpProxiesInsertRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                targetTcpProxy = new TargetTcpProxy() {{
                    creationTimestamp = "tenetur";
                    description = "totam";
                    id = "corrupti";
                    kind = "consequatur";
                    name = "Elijah Batz";
                    proxyBind = false;
                    proxyHeader = TargetTcpProxyProxyHeaderEnum.NONE;
                    region = "atque";
                    selfLink = "recusandae";
                    service = "doloremque";
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "excepturi";
                key = "corporis";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "officia";
                requestId = "vitae";
                uploadType = "nobis";
                uploadProtocol = "quod";
                userIp = "deleniti";
            }};            

            ComputeTargetTcpProxiesInsertResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesInsert(req, new ComputeTargetTcpProxiesInsertSecurity() {{
                option1 = new ComputeTargetTcpProxiesInsertSecurityOption1("error", "asperiores") {{
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

            ComputeTargetTcpProxiesListRequest req = new ComputeTargetTcpProxiesListRequest("soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "molestias";
                filter = "ut";
                key = "nostrum";
                maxResults = 925872L;
                oauthToken = "magni";
                orderBy = "reprehenderit";
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "neque";
                uploadProtocol = "possimus";
                userIp = "nobis";
            }};            

            ComputeTargetTcpProxiesListResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesList(req, new ComputeTargetTcpProxiesListSecurity() {{
                option1 = new ComputeTargetTcpProxiesListSecurityOption1("quos", "modi") {{
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

            ComputeTargetTcpProxiesSetBackendServiceRequest req = new ComputeTargetTcpProxiesSetBackendServiceRequest("labore", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxiesSetBackendServiceRequest = new TargetTcpProxiesSetBackendServiceRequest() {{
                    service = "sed";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "quasi";
                key = "earum";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "tempore";
                requestId = "veniam";
                uploadType = "provident";
                uploadProtocol = "tempore";
                userIp = "praesentium";
            }};            

            ComputeTargetTcpProxiesSetBackendServiceResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesSetBackendService(req, new ComputeTargetTcpProxiesSetBackendServiceSecurity() {{
                option1 = new ComputeTargetTcpProxiesSetBackendServiceSecurityOption1("velit", "repellat") {{
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

            ComputeTargetTcpProxiesSetProxyHeaderRequest req = new ComputeTargetTcpProxiesSetProxyHeaderRequest("quae", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxiesSetProxyHeaderRequest = new TargetTcpProxiesSetProxyHeaderRequest() {{
                    proxyHeader = TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum.NONE;
                }};;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "dolore";
                fields = "molestiae";
                key = "vitae";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "fugiat";
                requestId = "dignissimos";
                uploadType = "exercitationem";
                uploadProtocol = "cupiditate";
                userIp = "quis";
            }};            

            ComputeTargetTcpProxiesSetProxyHeaderResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesSetProxyHeader(req, new ComputeTargetTcpProxiesSetProxyHeaderSecurity() {{
                option1 = new ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1("rerum", "molestias") {{
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

            ComputeTargetTcpProxiesTestIamPermissionsRequest req = new ComputeTargetTcpProxiesTestIamPermissionsRequest("quasi", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("modi"),
                        add("corrupti"),
                        add("ut"),
                        add("ut"),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "tenetur";
                key = "debitis";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "inventore";
                uploadProtocol = "ut";
                userIp = "illo";
            }};            

            ComputeTargetTcpProxiesTestIamPermissionsResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesTestIamPermissions(req, new ComputeTargetTcpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetTcpProxiesTestIamPermissionsSecurityOption1("debitis", "incidunt") {{
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
