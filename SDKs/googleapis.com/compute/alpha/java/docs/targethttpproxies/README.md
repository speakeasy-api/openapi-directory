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

            ComputeTargetHttpProxiesAggregatedListRequest req = new ComputeTargetHttpProxiesAggregatedListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "quod";
                filter = "error";
                includeAllScopes = false;
                key = "sunt";
                maxResults = 964074L;
                oauthToken = "facere";
                orderBy = "ducimus";
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "quod";
                returnPartialSuccess = false;
                uploadType = "consequatur";
                uploadProtocol = "ea";
                userIp = "eum";
            }};            

            ComputeTargetHttpProxiesAggregatedListResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesAggregatedList(req, new ComputeTargetHttpProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetHttpProxiesAggregatedListSecurityOption1("aperiam", "praesentium") {{
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

            ComputeTargetHttpProxiesDeleteRequest req = new ComputeTargetHttpProxiesDeleteRequest("dolor", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "facere";
                key = "deserunt";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "suscipit";
                uploadType = "unde";
                uploadProtocol = "debitis";
                userIp = "necessitatibus";
            }};            

            ComputeTargetHttpProxiesDeleteResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesDelete(req, new ComputeTargetHttpProxiesDeleteSecurity() {{
                option1 = new ComputeTargetHttpProxiesDeleteSecurityOption1("ullam", "nihil") {{
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

            ComputeTargetHttpProxiesGetRequest req = new ComputeTargetHttpProxiesGetRequest("eos", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "quidem";
                key = "nesciunt";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "quis";
                uploadProtocol = "beatae";
                userIp = "magni";
            }};            

            ComputeTargetHttpProxiesGetResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesGet(req, new ComputeTargetHttpProxiesGetSecurity() {{
                option1 = new ComputeTargetHttpProxiesGetSecurityOption1("corporis", "nesciunt") {{
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

            ComputeTargetHttpProxiesInsertRequest req = new ComputeTargetHttpProxiesInsertRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpProxy = new TargetHttpProxy() {{
                    creationTimestamp = "cum";
                    description = "explicabo";
                    fingerprint = "impedit";
                    httpFilters = new String[]{{
                        add("explicabo"),
                    }};
                    httpKeepAliveTimeoutSec = 803288;
                    id = "cupiditate";
                    kind = "corporis";
                    name = "Sylvia Thompson";
                    proxyBind = false;
                    region = "tempora";
                    selfLink = "saepe";
                    selfLinkWithId = "nemo";
                    urlMap = "nesciunt";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "dolorum";
                key = "ab";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "corporis";
                requestId = "eligendi";
                uploadType = "perferendis";
                uploadProtocol = "delectus";
                userIp = "quidem";
            }};            

            ComputeTargetHttpProxiesInsertResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesInsert(req, new ComputeTargetHttpProxiesInsertSecurity() {{
                option1 = new ComputeTargetHttpProxiesInsertSecurityOption1("excepturi", "numquam") {{
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

            ComputeTargetHttpProxiesListRequest req = new ComputeTargetHttpProxiesListRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "eos";
                filter = "explicabo";
                key = "voluptatum";
                maxResults = 996287L;
                oauthToken = "sapiente";
                orderBy = "ullam";
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "consequuntur";
                returnPartialSuccess = false;
                uploadType = "doloribus";
                uploadProtocol = "laudantium";
                userIp = "facilis";
            }};            

            ComputeTargetHttpProxiesListResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesList(req, new ComputeTargetHttpProxiesListSecurity() {{
                option1 = new ComputeTargetHttpProxiesListSecurityOption1("adipisci", "ut") {{
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

            ComputeTargetHttpProxiesPatchRequest req = new ComputeTargetHttpProxiesPatchRequest("sed", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpProxy1 = new TargetHttpProxy() {{
                    creationTimestamp = "cumque";
                    description = "aut";
                    fingerprint = "aut";
                    httpFilters = new String[]{{
                        add("ea"),
                        add("dolorum"),
                        add("magnam"),
                    }};
                    httpKeepAliveTimeoutSec = 572403;
                    id = "dolorum";
                    kind = "impedit";
                    name = "Melissa Fritsch";
                    proxyBind = false;
                    region = "quibusdam";
                    selfLink = "porro";
                    selfLinkWithId = "ex";
                    urlMap = "quod";
                }};;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "sit";
                key = "qui";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "nihil";
                uploadType = "quo";
                uploadProtocol = "quia";
                userIp = "neque";
            }};            

            ComputeTargetHttpProxiesPatchResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesPatch(req, new ComputeTargetHttpProxiesPatchSecurity() {{
                option1 = new ComputeTargetHttpProxiesPatchSecurityOption1("exercitationem", "vero") {{
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

            ComputeTargetHttpProxiesSetUrlMapRequest req = new ComputeTargetHttpProxiesSetUrlMapRequest("veritatis", "quis") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "facere";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "accusantium";
                key = "soluta";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "debitis";
                uploadType = "itaque";
                uploadProtocol = "voluptatum";
                userIp = "odit";
            }};            

            ComputeTargetHttpProxiesSetUrlMapResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesSetUrlMap(req, new ComputeTargetHttpProxiesSetUrlMapSecurity() {{
                option1 = new ComputeTargetHttpProxiesSetUrlMapSecurityOption1("quas", "doloribus") {{
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

            ComputeTargetHttpProxiesTestIamPermissionsRequest req = new ComputeTargetHttpProxiesTestIamPermissionsRequest("magnam", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("molestias"),
                        add("adipisci"),
                        add("reiciendis"),
                        add("magni"),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "fugiat";
                key = "iusto";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "ullam";
                uploadProtocol = "similique";
                userIp = "quis";
            }};            

            ComputeTargetHttpProxiesTestIamPermissionsResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesTestIamPermissions(req, new ComputeTargetHttpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetHttpProxiesTestIamPermissionsSecurityOption1("amet", "adipisci") {{
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
