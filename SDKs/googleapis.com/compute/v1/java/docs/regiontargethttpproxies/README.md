# regionTargetHttpProxies

### Available Operations

* [computeRegionTargetHttpProxiesDelete](#computeregiontargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeRegionTargetHttpProxiesGet](#computeregiontargethttpproxiesget) - Returns the specified TargetHttpProxy resource in the specified region.
* [computeRegionTargetHttpProxiesInsert](#computeregiontargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpProxiesList](#computeregiontargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpProxiesSetUrlMap](#computeregiontargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.

## computeRegionTargetHttpProxiesDelete

Deletes the specified TargetHttpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpProxiesDeleteRequest req = new ComputeRegionTargetHttpProxiesDeleteRequest("sapiente", "a", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "nesciunt";
                key = "magnam";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "autem";
                uploadType = "ex";
                uploadProtocol = "cum";
                userIp = "dolores";
            }};            

            ComputeRegionTargetHttpProxiesDeleteResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesDelete(req, new ComputeRegionTargetHttpProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesDeleteSecurityOption1("dolor", "ab") {{
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

## computeRegionTargetHttpProxiesGet

Returns the specified TargetHttpProxy resource in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpProxiesGetRequest req = new ComputeRegionTargetHttpProxiesGetRequest("excepturi", "deserunt", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "quia";
                key = "enim";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "cupiditate";
                uploadProtocol = "explicabo";
                userIp = "inventore";
            }};            

            ComputeRegionTargetHttpProxiesGetResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesGet(req, new ComputeRegionTargetHttpProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesGetSecurityOption1("quos", "debitis") {{
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

## computeRegionTargetHttpProxiesInsert

Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpProxiesInsertRequest req = new ComputeRegionTargetHttpProxiesInsertRequest("commodi", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpProxy = new TargetHttpProxy() {{
                    creationTimestamp = "deleniti";
                    description = "dolorem";
                    fingerprint = "assumenda";
                    id = "sunt";
                    kind = "dignissimos";
                    name = "Ann Bashirian";
                    proxyBind = false;
                    region = "rem";
                    selfLink = "possimus";
                    urlMap = "tempore";
                }};;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ratione";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "culpa";
                uploadType = "numquam";
                uploadProtocol = "veritatis";
                userIp = "labore";
            }};            

            ComputeRegionTargetHttpProxiesInsertResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesInsert(req, new ComputeRegionTargetHttpProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesInsertSecurityOption1("quis", "qui") {{
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

## computeRegionTargetHttpProxiesList

Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpProxiesListRequest req = new ComputeRegionTargetHttpProxiesListRequest("aperiam", "rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "commodi";
                filter = "commodi";
                key = "blanditiis";
                maxResults = 818158L;
                oauthToken = "possimus";
                orderBy = "incidunt";
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "suscipit";
                returnPartialSuccess = false;
                uploadType = "ducimus";
                uploadProtocol = "aperiam";
                userIp = "quaerat";
            }};            

            ComputeRegionTargetHttpProxiesListResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesList(req, new ComputeRegionTargetHttpProxiesListSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesListSecurityOption1("quae", "aspernatur") {{
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

## computeRegionTargetHttpProxiesSetUrlMap

Changes the URL map for TargetHttpProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesSetUrlMapRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesSetUrlMapResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesSetUrlMapSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlMapReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpProxiesSetUrlMapRequest req = new ComputeRegionTargetHttpProxiesSetUrlMapRequest("debitis", "accusamus", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "quas";
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "sapiente";
                key = "soluta";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "possimus";
                requestId = "beatae";
                uploadType = "dignissimos";
                uploadProtocol = "officiis";
                userIp = "eum";
            }};            

            ComputeRegionTargetHttpProxiesSetUrlMapResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesSetUrlMap(req, new ComputeRegionTargetHttpProxiesSetUrlMapSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption1("incidunt", "eligendi") {{
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
