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

            ComputeRegionTargetHttpsProxiesDeleteRequest req = new ComputeRegionTargetHttpsProxiesDeleteRequest("autem", "facilis", "molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "occaecati";
                key = "animi";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "repellat";
                uploadType = "reprehenderit";
                uploadProtocol = "fugit";
                userIp = "quia";
            }};            

            ComputeRegionTargetHttpsProxiesDeleteResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesDelete(req, new ComputeRegionTargetHttpsProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesDeleteSecurityOption1("expedita", "quisquam") {{
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

            ComputeRegionTargetHttpsProxiesGetRequest req = new ComputeRegionTargetHttpsProxiesGetRequest("veniam", "hic", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "deleniti";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "tempora";
                uploadProtocol = "possimus";
                userIp = "assumenda";
            }};            

            ComputeRegionTargetHttpsProxiesGetResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesGet(req, new ComputeRegionTargetHttpsProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesGetSecurityOption1("possimus", "ipsum") {{
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

            ComputeRegionTargetHttpsProxiesInsertRequest req = new ComputeRegionTargetHttpsProxiesInsertRequest("placeat", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxy = new TargetHttpsProxy() {{
                    authentication = "nisi";
                    authorization = "dignissimos";
                    authorizationPolicy = "adipisci";
                    certificateMap = "velit";
                    creationTimestamp = "quisquam";
                    description = "exercitationem";
                    fingerprint = "excepturi";
                    httpFilters = new String[]{{
                        add("reiciendis"),
                    }};
                    id = "consequuntur";
                    kind = "exercitationem";
                    name = "Vicky Spencer";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.ENABLE;
                    region = "enim";
                    selfLink = "dolorum";
                    serverTlsPolicy = "ipsa";
                    sslCertificates = new String[]{{
                        add("omnis"),
                        add("iusto"),
                    }};
                    sslPolicy = "praesentium";
                    urlMap = "occaecati";
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "ipsa";
                key = "distinctio";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "hic";
                uploadType = "a";
                uploadProtocol = "perspiciatis";
                userIp = "quis";
            }};            

            ComputeRegionTargetHttpsProxiesInsertResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesInsert(req, new ComputeRegionTargetHttpsProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesInsertSecurityOption1("alias", "cum") {{
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

            ComputeRegionTargetHttpsProxiesListRequest req = new ComputeRegionTargetHttpsProxiesListRequest("dicta", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "distinctio";
                filter = "inventore";
                key = "libero";
                maxResults = 982844L;
                oauthToken = "nam";
                orderBy = "eum";
                pageToken = "sit";
                prettyPrint = false;
                quotaUser = "architecto";
                returnPartialSuccess = false;
                uploadType = "modi";
                uploadProtocol = "blanditiis";
                userIp = "magnam";
            }};            

            ComputeRegionTargetHttpsProxiesListResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesList(req, new ComputeRegionTargetHttpsProxiesListSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesListSecurityOption1("iusto", "beatae") {{
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

            ComputeRegionTargetHttpsProxiesPatchRequest req = new ComputeRegionTargetHttpsProxiesPatchRequest("laboriosam", "in", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy1 = new TargetHttpsProxy() {{
                    authentication = "voluptatibus";
                    authorization = "et";
                    authorizationPolicy = "earum";
                    certificateMap = "nesciunt";
                    creationTimestamp = "sequi";
                    description = "voluptate";
                    fingerprint = "iste";
                    httpFilters = new String[]{{
                        add("architecto"),
                        add("dolorum"),
                    }};
                    id = "quae";
                    kind = "nesciunt";
                    name = "Gilbert Hilll V";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.DISABLE;
                    region = "nihil";
                    selfLink = "libero";
                    serverTlsPolicy = "excepturi";
                    sslCertificates = new String[]{{
                        add("voluptatum"),
                    }};
                    sslPolicy = "distinctio";
                    urlMap = "molestias";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "voluptatibus";
                key = "atque";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "odio";
                requestId = "minima";
                uploadType = "harum";
                uploadProtocol = "reiciendis";
                userIp = "iure";
            }};            

            ComputeRegionTargetHttpsProxiesPatchResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesPatch(req, new ComputeRegionTargetHttpsProxiesPatchSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesPatchSecurityOption1("quas", "amet") {{
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

            ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest req = new ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest("esse", "minus", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionTargetHttpsProxiesSetSslCertificatesRequest = new RegionTargetHttpsProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("nostrum"),
                    }};
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "occaecati";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "eaque";
                uploadType = "itaque";
                uploadProtocol = "corporis";
                userIp = "repellat";
            }};            

            ComputeRegionTargetHttpsProxiesSetSslCertificatesResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesSetSslCertificates(req, new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption1("inventore", "ipsam") {{
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

            ComputeRegionTargetHttpsProxiesSetUrlMapRequest req = new ComputeRegionTargetHttpsProxiesSetUrlMapRequest("veniam", "cupiditate", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "voluptas";
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "adipisci";
                key = "in";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "quibusdam";
                requestId = "laudantium";
                uploadType = "vitae";
                uploadProtocol = "mollitia";
                userIp = "vitae";
            }};            

            ComputeRegionTargetHttpsProxiesSetUrlMapResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesSetUrlMap(req, new ComputeRegionTargetHttpsProxiesSetUrlMapSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption1("veniam", "incidunt") {{
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

            ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest req = new ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest("soluta", "optio", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nostrum"),
                        add("eius"),
                    }};
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "rem";
                key = "ratione";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "ad";
                uploadProtocol = "odio";
                userIp = "enim";
            }};            

            ComputeRegionTargetHttpsProxiesTestIamPermissionsResponse res = sdk.regionTargetHttpsProxies.computeRegionTargetHttpsProxiesTestIamPermissions(req, new ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption1("voluptatum", "mollitia") {{
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
