# targetTcpProxies

### Available Operations

* [computeTargetTcpProxiesAggregatedList](#computetargettcpproxiesaggregatedlist) - Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
* [computeTargetTcpProxiesDelete](#computetargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesGet](#computetargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesInsert](#computetargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project using the data included in the request.
* [computeTargetTcpProxiesList](#computetargettcpproxieslist) - Retrieves the list of TargetTcpProxy resources available to the specified project.
* [computeTargetTcpProxiesSetBackendService](#computetargettcpproxiessetbackendservice) - Changes the BackendService for TargetTcpProxy.
* [computeTargetTcpProxiesSetProxyHeader](#computetargettcpproxiessetproxyheader) - Changes the ProxyHeaderType for TargetTcpProxy.

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

            ComputeTargetTcpProxiesAggregatedListRequest req = new ComputeTargetTcpProxiesAggregatedListRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "ab";
                filter = "non";
                includeAllScopes = false;
                key = "ab";
                maxResults = 587616L;
                oauthToken = "harum";
                orderBy = "ipsam";
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "natus";
                returnPartialSuccess = false;
                uploadType = "labore";
                uploadProtocol = "vel";
                userIp = "praesentium";
            }};            

            ComputeTargetTcpProxiesAggregatedListResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesAggregatedList(req, new ComputeTargetTcpProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetTcpProxiesAggregatedListSecurityOption1("ea", "nulla") {{
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

            ComputeTargetTcpProxiesDeleteRequest req = new ComputeTargetTcpProxiesDeleteRequest("aut", "atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "esse";
                key = "laudantium";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "vero";
                requestId = "minus";
                uploadType = "ea";
                uploadProtocol = "autem";
                userIp = "eveniet";
            }};            

            ComputeTargetTcpProxiesDeleteResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesDelete(req, new ComputeTargetTcpProxiesDeleteSecurity() {{
                option1 = new ComputeTargetTcpProxiesDeleteSecurityOption1("cum", "sint") {{
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

            ComputeTargetTcpProxiesGetRequest req = new ComputeTargetTcpProxiesGetRequest("repellendus", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "eius";
                key = "non";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "excepturi";
                uploadProtocol = "repellat";
                userIp = "voluptas";
            }};            

            ComputeTargetTcpProxiesGetResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesGet(req, new ComputeTargetTcpProxiesGetSecurity() {{
                option1 = new ComputeTargetTcpProxiesGetSecurityOption1("nesciunt", "inventore") {{
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

            ComputeTargetTcpProxiesInsertRequest req = new ComputeTargetTcpProxiesInsertRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxy = new TargetTcpProxy() {{
                    creationTimestamp = "eum";
                    description = "temporibus";
                    id = "hic";
                    kind = "eos";
                    name = "Brad Ondricka";
                    proxyBind = false;
                    proxyHeader = TargetTcpProxyProxyHeaderEnum.PROXY_V1;
                    region = "dignissimos";
                    selfLink = "voluptate";
                    service = "commodi";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "eveniet";
                key = "molestias";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "voluptates";
                uploadType = "repudiandae";
                uploadProtocol = "iure";
                userIp = "quisquam";
            }};            

            ComputeTargetTcpProxiesInsertResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesInsert(req, new ComputeTargetTcpProxiesInsertSecurity() {{
                option1 = new ComputeTargetTcpProxiesInsertSecurityOption1("voluptatibus", "nam") {{
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

            ComputeTargetTcpProxiesListRequest req = new ComputeTargetTcpProxiesListRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                fields = "eum";
                filter = "distinctio";
                key = "perferendis";
                maxResults = 612522L;
                oauthToken = "facilis";
                orderBy = "cumque";
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "illo";
                returnPartialSuccess = false;
                uploadType = "eos";
                uploadProtocol = "sint";
                userIp = "earum";
            }};            

            ComputeTargetTcpProxiesListResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesList(req, new ComputeTargetTcpProxiesListSecurity() {{
                option1 = new ComputeTargetTcpProxiesListSecurityOption1("sed", "ipsum") {{
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

            ComputeTargetTcpProxiesSetBackendServiceRequest req = new ComputeTargetTcpProxiesSetBackendServiceRequest("iure", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxiesSetBackendServiceRequest = new TargetTcpProxiesSetBackendServiceRequest() {{
                    service = "iste";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "error";
                key = "soluta";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "fugiat";
                uploadType = "aliquid";
                uploadProtocol = "rerum";
                userIp = "ea";
            }};            

            ComputeTargetTcpProxiesSetBackendServiceResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesSetBackendService(req, new ComputeTargetTcpProxiesSetBackendServiceSecurity() {{
                option1 = new ComputeTargetTcpProxiesSetBackendServiceSecurityOption1("saepe", "dolor") {{
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

            ComputeTargetTcpProxiesSetProxyHeaderRequest req = new ComputeTargetTcpProxiesSetProxyHeaderRequest("dignissimos", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxiesSetProxyHeaderRequest = new TargetTcpProxiesSetProxyHeaderRequest() {{
                    proxyHeader = TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum.NONE;
                }};;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "laudantium";
                key = "ut";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "rerum";
                requestId = "dolorem";
                uploadType = "maxime";
                uploadProtocol = "iusto";
                userIp = "vel";
            }};            

            ComputeTargetTcpProxiesSetProxyHeaderResponse res = sdk.targetTcpProxies.computeTargetTcpProxiesSetProxyHeader(req, new ComputeTargetTcpProxiesSetProxyHeaderSecurity() {{
                option1 = new ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1("blanditiis", "ullam") {{
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
