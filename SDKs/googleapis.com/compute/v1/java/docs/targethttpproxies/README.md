# targetHttpProxies

### Available Operations

* [computeTargetHttpProxiesAggregatedList](#computetargethttpproxiesaggregatedlist) - Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
* [computeTargetHttpProxiesDelete](#computetargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesGet](#computetargethttpproxiesget) - Returns the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesInsert](#computetargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project using the data included in the request.
* [computeTargetHttpProxiesList](#computetargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project.
* [computeTargetHttpProxiesPatch](#computetargethttpproxiespatch) - Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpProxiesSetUrlMap](#computetargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.

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

            ComputeTargetHttpProxiesAggregatedListRequest req = new ComputeTargetHttpProxiesAggregatedListRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "repudiandae";
                filter = "quisquam";
                includeAllScopes = false;
                key = "non";
                maxResults = 989894L;
                oauthToken = "tempore";
                orderBy = "labore";
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "fugiat";
                returnPartialSuccess = false;
                uploadType = "nihil";
                uploadProtocol = "vel";
                userIp = "excepturi";
            }};            

            ComputeTargetHttpProxiesAggregatedListResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesAggregatedList(req, new ComputeTargetHttpProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetHttpProxiesAggregatedListSecurityOption1("nulla", "reprehenderit") {{
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

            ComputeTargetHttpProxiesDeleteRequest req = new ComputeTargetHttpProxiesDeleteRequest("tempore", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "ullam";
                key = "impedit";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "hic";
                uploadType = "assumenda";
                uploadProtocol = "a";
                userIp = "suscipit";
            }};            

            ComputeTargetHttpProxiesDeleteResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesDelete(req, new ComputeTargetHttpProxiesDeleteSecurity() {{
                option1 = new ComputeTargetHttpProxiesDeleteSecurityOption1("qui", "ab") {{
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

            ComputeTargetHttpProxiesGetRequest req = new ComputeTargetHttpProxiesGetRequest("libero", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "molestiae";
                key = "minima";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "consequuntur";
                uploadProtocol = "officia";
                userIp = "est";
            }};            

            ComputeTargetHttpProxiesGetResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesGet(req, new ComputeTargetHttpProxiesGetSecurity() {{
                option1 = new ComputeTargetHttpProxiesGetSecurityOption1("consectetur", "earum") {{
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

            ComputeTargetHttpProxiesInsertRequest req = new ComputeTargetHttpProxiesInsertRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpProxy = new TargetHttpProxy() {{
                    creationTimestamp = "maiores";
                    description = "officiis";
                    fingerprint = "ad";
                    id = "quia";
                    kind = "vero";
                    name = "Miss Clay Feeney";
                    proxyBind = false;
                    region = "explicabo";
                    selfLink = "culpa";
                    urlMap = "magni";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "fuga";
                key = "tempora";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "maiores";
                uploadType = "quisquam";
                uploadProtocol = "consequatur";
                userIp = "culpa";
            }};            

            ComputeTargetHttpProxiesInsertResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesInsert(req, new ComputeTargetHttpProxiesInsertSecurity() {{
                option1 = new ComputeTargetHttpProxiesInsertSecurityOption1("sapiente", "inventore") {{
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

            ComputeTargetHttpProxiesListRequest req = new ComputeTargetHttpProxiesListRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "vitae";
                filter = "occaecati";
                key = "libero";
                maxResults = 672860L;
                oauthToken = "hic";
                orderBy = "magnam";
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "sed";
                returnPartialSuccess = false;
                uploadType = "delectus";
                uploadProtocol = "rerum";
                userIp = "modi";
            }};            

            ComputeTargetHttpProxiesListResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesList(req, new ComputeTargetHttpProxiesListSecurity() {{
                option1 = new ComputeTargetHttpProxiesListSecurityOption1("magni", "ratione") {{
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

            ComputeTargetHttpProxiesPatchRequest req = new ComputeTargetHttpProxiesPatchRequest("consectetur", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpProxy1 = new TargetHttpProxy() {{
                    creationTimestamp = "impedit";
                    description = "nam";
                    fingerprint = "neque";
                    id = "aliquid";
                    kind = "odio";
                    name = "Alfonso Boehm";
                    proxyBind = false;
                    region = "aut";
                    selfLink = "nisi";
                    urlMap = "impedit";
                }};;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "culpa";
                key = "dolor";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "cumque";
                uploadType = "recusandae";
                uploadProtocol = "quas";
                userIp = "sed";
            }};            

            ComputeTargetHttpProxiesPatchResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesPatch(req, new ComputeTargetHttpProxiesPatchSecurity() {{
                option1 = new ComputeTargetHttpProxiesPatchSecurityOption1("sunt", "asperiores") {{
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

            ComputeTargetHttpProxiesSetUrlMapRequest req = new ComputeTargetHttpProxiesSetUrlMapRequest("dolorum", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "adipisci";
                }};;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "voluptatibus";
                key = "repellat";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "ratione";
                requestId = "hic";
                uploadType = "consequuntur";
                uploadProtocol = "recusandae";
                userIp = "explicabo";
            }};            

            ComputeTargetHttpProxiesSetUrlMapResponse res = sdk.targetHttpProxies.computeTargetHttpProxiesSetUrlMap(req, new ComputeTargetHttpProxiesSetUrlMapSecurity() {{
                option1 = new ComputeTargetHttpProxiesSetUrlMapSecurityOption1("laborum", "dicta") {{
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
