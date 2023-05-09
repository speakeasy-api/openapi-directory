# regionTargetHttpsProxies

### Available Operations

* [computeRegionTargetHttpsProxiesDelete](#computeregiontargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeRegionTargetHttpsProxiesGet](#computeregiontargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource in the specified region.
* [computeRegionTargetHttpsProxiesInsert](#computeregiontargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpsProxiesList](#computeregiontargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpsProxiesPatch](#computeregiontargethttpsproxiespatch) - Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionTargetHttpsProxiesSetSslCertificates](#computeregiontargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesSetUrlMap](#computeregiontargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.

## computeRegionTargetHttpsProxiesDelete

Deletes the specified TargetHttpsProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesDeleteRequest req = new ComputeRegionTargetHttpsProxiesDeleteRequest("laboriosam", "corporis", "placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "mollitia";
                key = "tempore";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "quisquam";
                requestId = "maiores";
                uploadType = "dolor";
                uploadProtocol = "dolorum";
                userIp = "dolorum";
            }};            

            ComputeRegionTargetHttpsProxiesDeleteResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesDelete(req, new ComputeRegionTargetHttpsProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesDeleteSecurityOption1("aspernatur", "delectus") {{
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

## computeRegionTargetHttpsProxiesGet

Returns the specified TargetHttpsProxy resource in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesGetRequest req = new ComputeRegionTargetHttpsProxiesGetRequest("exercitationem", "eveniet", "deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "nihil";
                key = "provident";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "incidunt";
                uploadProtocol = "voluptas";
                userIp = "et";
            }};            

            ComputeRegionTargetHttpsProxiesGetResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesGet(req, new ComputeRegionTargetHttpsProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesGetSecurityOption1("quis", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpsProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionTargetHttpsProxiesInsert

Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxy;
import org.openapis.openapi.models.shared.TargetHttpsProxyQuicOverrideEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesInsertRequest req = new ComputeRegionTargetHttpsProxiesInsertRequest("accusamus", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxy = new TargetHttpsProxy() {{
                    authorizationPolicy = "veritatis";
                    certificateMap = "eius";
                    creationTimestamp = "voluptatum";
                    description = "aperiam";
                    fingerprint = "laboriosam";
                    id = "quam";
                    kind = "vero";
                    name = "Annette Wolf";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.NONE;
                    region = "saepe";
                    selfLink = "ab";
                    serverTlsPolicy = "nesciunt";
                    sslCertificates = new String[]{{
                        add("sint"),
                        add("at"),
                        add("cum"),
                        add("debitis"),
                    }};
                    sslPolicy = "minus";
                    urlMap = "placeat";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "repellat";
                fields = "quasi";
                key = "distinctio";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "iste";
                requestId = "dolores";
                uploadType = "vero";
                uploadProtocol = "mollitia";
                userIp = "distinctio";
            }};            

            ComputeRegionTargetHttpsProxiesInsertResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesInsert(req, new ComputeRegionTargetHttpsProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesInsertSecurityOption1("incidunt", "explicabo") {{
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

## computeRegionTargetHttpsProxiesList

Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesListRequest req = new ComputeRegionTargetHttpsProxiesListRequest("sapiente", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "dicta";
                filter = "labore";
                key = "quod";
                maxResults = 746579L;
                oauthToken = "ducimus";
                orderBy = "cupiditate";
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "nostrum";
                returnPartialSuccess = false;
                uploadType = "voluptatibus";
                uploadProtocol = "quod";
                userIp = "similique";
            }};            

            ComputeRegionTargetHttpsProxiesListResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesList(req, new ComputeRegionTargetHttpsProxiesListSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesListSecurityOption1("quasi", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpsProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionTargetHttpsProxiesPatch

Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxy;
import org.openapis.openapi.models.shared.TargetHttpsProxyQuicOverrideEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesPatchRequest req = new ComputeRegionTargetHttpsProxiesPatchRequest("magnam", "reiciendis", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy1 = new TargetHttpsProxy() {{
                    authorizationPolicy = "corporis";
                    certificateMap = "aut";
                    creationTimestamp = "minima";
                    description = "beatae";
                    fingerprint = "deleniti";
                    id = "aut";
                    kind = "eveniet";
                    name = "Ms. Lucia Harris";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.NONE;
                    region = "sapiente";
                    selfLink = "harum";
                    serverTlsPolicy = "exercitationem";
                    sslCertificates = new String[]{{
                        add("perferendis"),
                        add("blanditiis"),
                    }};
                    sslPolicy = "ullam";
                    urlMap = "beatae";
                }};;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "culpa";
                key = "velit";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "dicta";
                requestId = "iste";
                uploadType = "accusantium";
                uploadProtocol = "repudiandae";
                userIp = "temporibus";
            }};            

            ComputeRegionTargetHttpsProxiesPatchResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesPatch(req, new ComputeRegionTargetHttpsProxiesPatchSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesPatchSecurityOption1("quaerat", "perspiciatis") {{
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

## computeRegionTargetHttpsProxiesSetSslCertificates

Replaces SslCertificates for TargetHttpsProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionTargetHttpsProxiesSetSslCertificatesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest req = new ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest("a", "vero", "dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                regionTargetHttpsProxiesSetSslCertificatesRequest = new RegionTargetHttpsProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("dolorum"),
                        add("cupiditate"),
                        add("sint"),
                    }};
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "iusto";
                key = "accusantium";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "praesentium";
                uploadType = "nihil";
                uploadProtocol = "molestiae";
                userIp = "odit";
            }};            

            ComputeRegionTargetHttpsProxiesSetSslCertificatesResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesSetSslCertificates(req, new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption1("fuga", "laborum") {{
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

## computeRegionTargetHttpsProxiesSetUrlMap

Changes the URL map for TargetHttpsProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetUrlMapRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetUrlMapResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetUrlMapSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlMapReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesSetUrlMapRequest req = new ComputeRegionTargetHttpsProxiesSetUrlMapRequest("hic", "aliquid", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "excepturi";
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "quas";
                key = "neque";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "minima";
                uploadType = "itaque";
                uploadProtocol = "itaque";
                userIp = "aliquid";
            }};            

            ComputeRegionTargetHttpsProxiesSetUrlMapResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesSetUrlMap(req, new ComputeRegionTargetHttpsProxiesSetUrlMapSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption1("cumque", "qui") {{
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
