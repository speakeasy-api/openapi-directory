# regionTargetHttpsProxies

### Available Operations

* [computeRegionTargetHttpsProxiesDelete](#computeregiontargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeRegionTargetHttpsProxiesGet](#computeregiontargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource in the specified region.
* [computeRegionTargetHttpsProxiesInsert](#computeregiontargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpsProxiesList](#computeregiontargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpsProxiesPatch](#computeregiontargethttpsproxiespatch) - Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionTargetHttpsProxiesSetSslCertificates](#computeregiontargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesSetUrlMap](#computeregiontargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesTestIamPermissions](#computeregiontargethttpsproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeRegionTargetHttpsProxiesDeleteRequest req = new ComputeRegionTargetHttpsProxiesDeleteRequest("modi", "est", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "perspiciatis";
                key = "recusandae";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "iste";
                uploadType = "saepe";
                uploadProtocol = "explicabo";
                userIp = "culpa";
            }};            

            ComputeRegionTargetHttpsProxiesDeleteResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesDelete(req, new ComputeRegionTargetHttpsProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesDeleteSecurityOption1("magni", "quasi") {{
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

            ComputeRegionTargetHttpsProxiesGetRequest req = new ComputeRegionTargetHttpsProxiesGetRequest("nulla", "optio", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quisquam";
                key = "consequatur";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "inventore";
                uploadProtocol = "ad";
                userIp = "doloremque";
            }};            

            ComputeRegionTargetHttpsProxiesGetResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesGet(req, new ComputeRegionTargetHttpsProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesGetSecurityOption1("earum", "mollitia") {{
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

            ComputeRegionTargetHttpsProxiesInsertRequest req = new ComputeRegionTargetHttpsProxiesInsertRequest("nam", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy = new TargetHttpsProxy() {{
                    authentication = "libero";
                    authorization = "laborum";
                    authorizationPolicy = "hic";
                    certificateMap = "magnam";
                    creationTimestamp = "voluptatibus";
                    description = "sed";
                    fingerprint = "delectus";
                    httpFilters = new String[]{{
                        add("modi"),
                        add("magni"),
                        add("ratione"),
                    }};
                    httpKeepAliveTimeoutSec = 231493;
                    id = "doloremque";
                    kind = "necessitatibus";
                    name = "Alton Durgan";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.NONE;
                    region = "id";
                    selfLink = "veritatis";
                    selfLinkWithId = "nemo";
                    serverTlsPolicy = "doloribus";
                    sslCertificates = new String[]{{
                        add("nisi"),
                    }};
                    sslPolicy = "impedit";
                    urlMap = "illo";
                }};;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "dolor";
                key = "ex";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "recusandae";
                uploadType = "quas";
                uploadProtocol = "sed";
                userIp = "sunt";
            }};            

            ComputeRegionTargetHttpsProxiesInsertResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesInsert(req, new ComputeRegionTargetHttpsProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesInsertSecurityOption1("asperiores", "dolorum") {{
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

            ComputeRegionTargetHttpsProxiesListRequest req = new ComputeRegionTargetHttpsProxiesListRequest("unde", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "voluptatibus";
                filter = "repellat";
                key = "praesentium";
                maxResults = 191231L;
                oauthToken = "hic";
                orderBy = "consequuntur";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "explicabo";
                returnPartialSuccess = false;
                uploadType = "laborum";
                uploadProtocol = "dicta";
                userIp = "animi";
            }};            

            ComputeRegionTargetHttpsProxiesListResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesList(req, new ComputeRegionTargetHttpsProxiesListSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesListSecurityOption1("autem", "quis") {{
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

            ComputeRegionTargetHttpsProxiesPatchRequest req = new ComputeRegionTargetHttpsProxiesPatchRequest("officiis", "aperiam", "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxy1 = new TargetHttpsProxy() {{
                    authentication = "consequuntur";
                    authorization = "possimus";
                    authorizationPolicy = "vitae";
                    certificateMap = "in";
                    creationTimestamp = "porro";
                    description = "impedit";
                    fingerprint = "error";
                    httpFilters = new String[]{{
                        add("tempore"),
                        add("ut"),
                        add("reiciendis"),
                    }};
                    httpKeepAliveTimeoutSec = 845267;
                    id = "impedit";
                    kind = "minima";
                    name = "Nichole Upton PhD";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.ENABLE;
                    region = "suscipit";
                    selfLink = "deserunt";
                    selfLinkWithId = "aperiam";
                    serverTlsPolicy = "quis";
                    sslCertificates = new String[]{{
                        add("rem"),
                        add("facilis"),
                    }};
                    sslPolicy = "tenetur";
                    urlMap = "aspernatur";
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "quo";
                key = "consectetur";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "magnam";
                requestId = "libero";
                uploadType = "maiores";
                uploadProtocol = "laborum";
                userIp = "culpa";
            }};            

            ComputeRegionTargetHttpsProxiesPatchResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesPatch(req, new ComputeRegionTargetHttpsProxiesPatchSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesPatchSecurityOption1("deleniti", "cumque") {{
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

            ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest req = new ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest("aliquam", "nemo", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                regionTargetHttpsProxiesSetSslCertificatesRequest = new RegionTargetHttpsProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("blanditiis"),
                        add("aliquid"),
                    }};
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "explicabo";
                key = "expedita";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "corrupti";
                requestId = "sapiente";
                uploadType = "delectus";
                uploadProtocol = "exercitationem";
                userIp = "itaque";
            }};            

            ComputeRegionTargetHttpsProxiesSetSslCertificatesResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesSetSslCertificates(req, new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption1("autem", "accusamus") {{
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

            ComputeRegionTargetHttpsProxiesSetUrlMapRequest req = new ComputeRegionTargetHttpsProxiesSetUrlMapRequest("maxime", "veniam", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "in";
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "nostrum";
                key = "sapiente";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "molestias";
                requestId = "voluptatibus";
                uploadType = "possimus";
                uploadProtocol = "quis";
                userIp = "eligendi";
            }};            

            ComputeRegionTargetHttpsProxiesSetUrlMapResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesSetUrlMap(req, new ComputeRegionTargetHttpsProxiesSetUrlMapSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption1("omnis", "itaque") {{
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

## computeRegionTargetHttpsProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest req = new ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest("occaecati", "suscipit", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("error"),
                        add("voluptatum"),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "non";
                key = "necessitatibus";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "quidem";
                uploadProtocol = "tenetur";
                userIp = "cum";
            }};            

            ComputeRegionTargetHttpsProxiesTestIamPermissionsResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesTestIamPermissions(req, new ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption1("quidem", "nemo") {{
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
