# targetHttpProxies

### Available Operations

* [computeTargetHttpProxiesAggregatedList](#computetargethttpproxiesaggregatedlist) - Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
* [computeTargetHttpProxiesDelete](#computetargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesGet](#computetargethttpproxiesget) - Returns the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesInsert](#computetargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project using the data included in the request.
* [computeTargetHttpProxiesList](#computetargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project.
* [computeTargetHttpProxiesPatch](#computetargethttpproxiespatch) - Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpProxiesSetUrlMap](#computetargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.
* [computeTargetHttpProxiesTestIamPermissions](#computetargethttpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetHttpProxiesAggregatedList

Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesAggregatedListRequest req = new ComputeTargetHttpProxiesAggregatedListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "laborum";
                filter = "earum";
                includeAllScopes = false;
                key = "aliquid";
                maxResults = 906088L;
                oauthToken = "fuga";
                orderBy = "quasi";
                pageToken = "doloremque";
                prettyPrint = false;
                quotaUser = "consectetur";
                returnPartialSuccess = false;
                uploadType = "eum";
                uploadProtocol = "similique";
                userIp = "sint";
            }};            

            ComputeTargetHttpProxiesAggregatedListResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesAggregatedList(req, new ComputeTargetHttpProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetHttpProxiesAggregatedListSecurityOption1("nostrum", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpProxyAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetHttpProxiesDelete

Deletes the specified TargetHttpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesDeleteRequest req = new ComputeTargetHttpProxiesDeleteRequest("enim", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "architecto";
                key = "velit";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "mollitia";
                uploadType = "eos";
                uploadProtocol = "hic";
                userIp = "debitis";
            }};            

            ComputeTargetHttpProxiesDeleteResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesDelete(req, new ComputeTargetHttpProxiesDeleteSecurity() {{
                option1 = new ComputeTargetHttpProxiesDeleteSecurityOption1("distinctio", "id") {{
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

## computeTargetHttpProxiesGet

Returns the specified TargetHttpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesGetRequest req = new ComputeTargetHttpProxiesGetRequest("minus", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "expedita";
                fields = "suscipit";
                key = "nulla";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "quia";
                uploadProtocol = "provident";
                userIp = "ad";
            }};            

            ComputeTargetHttpProxiesGetResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesGet(req, new ComputeTargetHttpProxiesGetSecurity() {{
                option1 = new ComputeTargetHttpProxiesGetSecurityOption1("sed", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetHttpProxiesInsert

Creates a TargetHttpProxy resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesInsertRequest req = new ComputeTargetHttpProxiesInsertRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpProxy = new TargetHttpProxy() {{
                    creationTimestamp = "recusandae";
                    description = "corporis";
                    fingerprint = "suscipit";
                    httpFilters = new String[]{{
                        add("delectus"),
                        add("quibusdam"),
                        add("placeat"),
                    }};
                    id = "facilis";
                    kind = "recusandae";
                    name = "Alyssa Schmeler";
                    proxyBind = false;
                    region = "ab";
                    selfLink = "omnis";
                    urlMap = "expedita";
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "omnis";
                key = "laborum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "assumenda";
                requestId = "perspiciatis";
                uploadType = "error";
                uploadProtocol = "eius";
                userIp = "occaecati";
            }};            

            ComputeTargetHttpProxiesInsertResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesInsert(req, new ComputeTargetHttpProxiesInsertSecurity() {{
                option1 = new ComputeTargetHttpProxiesInsertSecurityOption1("nulla", "nam") {{
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

## computeTargetHttpProxiesList

Retrieves the list of TargetHttpProxy resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesListRequest req = new ComputeTargetHttpProxiesListRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "quis";
                filter = "repellendus";
                key = "dicta";
                maxResults = 362722L;
                oauthToken = "optio";
                orderBy = "aperiam";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "impedit";
                returnPartialSuccess = false;
                uploadType = "voluptates";
                uploadProtocol = "sed";
                userIp = "porro";
            }};            

            ComputeTargetHttpProxiesListResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesList(req, new ComputeTargetHttpProxiesListSecurity() {{
                option1 = new ComputeTargetHttpProxiesListSecurityOption1("molestias", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetHttpProxiesPatch

Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesPatchRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesPatchResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesPatchRequest req = new ComputeTargetHttpProxiesPatchRequest("ducimus", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpProxy1 = new TargetHttpProxy() {{
                    creationTimestamp = "explicabo";
                    description = "veniam";
                    fingerprint = "esse";
                    httpFilters = new String[]{{
                        add("odit"),
                    }};
                    id = "alias";
                    kind = "est";
                    name = "Tammy Greenfelder III";
                    proxyBind = false;
                    region = "placeat";
                    selfLink = "corporis";
                    urlMap = "perspiciatis";
                }};;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "animi";
                key = "ratione";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "repellendus";
                uploadType = "quae";
                uploadProtocol = "corrupti";
                userIp = "excepturi";
            }};            

            ComputeTargetHttpProxiesPatchResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesPatch(req, new ComputeTargetHttpProxiesPatchSecurity() {{
                option1 = new ComputeTargetHttpProxiesPatchSecurityOption1("quibusdam", "nisi") {{
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

## computeTargetHttpProxiesSetUrlMap

Changes the URL map for TargetHttpProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesSetUrlMapRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesSetUrlMapResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesSetUrlMapSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesSetUrlMapSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesSetUrlMapSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlMapReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesSetUrlMapRequest req = new ComputeTargetHttpProxiesSetUrlMapRequest("itaque", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "rerum";
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "magnam";
                key = "excepturi";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "quibusdam";
                uploadType = "a";
                uploadProtocol = "quia";
                userIp = "voluptas";
            }};            

            ComputeTargetHttpProxiesSetUrlMapResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesSetUrlMap(req, new ComputeTargetHttpProxiesSetUrlMapSecurity() {{
                option1 = new ComputeTargetHttpProxiesSetUrlMapSecurityOption1("vitae", "asperiores") {{
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

## computeTargetHttpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpProxiesTestIamPermissionsRequest req = new ComputeTargetHttpProxiesTestIamPermissionsRequest("vel", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("rerum"),
                        add("dignissimos"),
                    }};
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "pariatur";
                key = "labore";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "consequuntur";
                uploadProtocol = "ipsum";
                userIp = "totam";
            }};            

            ComputeTargetHttpProxiesTestIamPermissionsResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesTestIamPermissions(req, new ComputeTargetHttpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetHttpProxiesTestIamPermissionsSecurityOption1("ipsum", "eius") {{
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
