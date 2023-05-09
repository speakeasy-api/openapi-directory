# regionTargetHttpProxies

### Available Operations

* [computeRegionTargetHttpProxiesDelete](#computeregiontargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeRegionTargetHttpProxiesGet](#computeregiontargethttpproxiesget) - Returns the specified TargetHttpProxy resource in the specified region.
* [computeRegionTargetHttpProxiesInsert](#computeregiontargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpProxiesList](#computeregiontargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpProxiesSetUrlMap](#computeregiontargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.
* [computeRegionTargetHttpProxiesTestIamPermissions](#computeregiontargethttpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeRegionTargetHttpProxiesDeleteRequest req = new ComputeRegionTargetHttpProxiesDeleteRequest("fugit", "provident", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "id";
                key = "eveniet";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "animi";
                uploadType = "perspiciatis";
                uploadProtocol = "et";
                userIp = "placeat";
            }};            

            ComputeRegionTargetHttpProxiesDeleteResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesDelete(req, new ComputeRegionTargetHttpProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesDeleteSecurityOption1("expedita", "amet") {{
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

            ComputeRegionTargetHttpProxiesGetRequest req = new ComputeRegionTargetHttpProxiesGetRequest("commodi", "nihil", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "tenetur";
                fields = "asperiores";
                key = "laudantium";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "labore";
                uploadProtocol = "iusto";
                userIp = "voluptatum";
            }};            

            ComputeRegionTargetHttpProxiesGetResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesGet(req, new ComputeRegionTargetHttpProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesGetSecurityOption1("natus", "ad") {{
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

            ComputeRegionTargetHttpProxiesInsertRequest req = new ComputeRegionTargetHttpProxiesInsertRequest("neque", "labore") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpProxy = new TargetHttpProxy() {{
                    creationTimestamp = "officia";
                    description = "eaque";
                    fingerprint = "recusandae";
                    httpFilters = new String[]{{
                        add("non"),
                        add("pariatur"),
                        add("voluptas"),
                    }};
                    id = "vel";
                    kind = "qui";
                    name = "Justin Strosin";
                    proxyBind = false;
                    region = "voluptates";
                    selfLink = "omnis";
                    urlMap = "molestiae";
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "a";
                key = "tempore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "laudantium";
                uploadType = "eum";
                uploadProtocol = "harum";
                userIp = "similique";
            }};            

            ComputeRegionTargetHttpProxiesInsertResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesInsert(req, new ComputeRegionTargetHttpProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesInsertSecurityOption1("culpa", "suscipit") {{
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

            ComputeRegionTargetHttpProxiesListRequest req = new ComputeRegionTargetHttpProxiesListRequest("ipsam", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "animi";
                filter = "incidunt";
                key = "vel";
                maxResults = 383712L;
                oauthToken = "doloremque";
                orderBy = "voluptatem";
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "dicta";
                returnPartialSuccess = false;
                uploadType = "dolore";
                uploadProtocol = "dignissimos";
                userIp = "explicabo";
            }};            

            ComputeRegionTargetHttpProxiesListResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesList(req, new ComputeRegionTargetHttpProxiesListSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesListSecurityOption1("deleniti", "odit") {{
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

            ComputeRegionTargetHttpProxiesSetUrlMapRequest req = new ComputeRegionTargetHttpProxiesSetUrlMapRequest("sunt", "necessitatibus", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "soluta";
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "velit";
                key = "ad";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "magnam";
                requestId = "quibusdam";
                uploadType = "at";
                uploadProtocol = "deserunt";
                userIp = "molestiae";
            }};            

            ComputeRegionTargetHttpProxiesSetUrlMapResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesSetUrlMap(req, new ComputeRegionTargetHttpProxiesSetUrlMapSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption1("dolores", "beatae") {{
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

## computeRegionTargetHttpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetHttpProxiesTestIamPermissionsRequest req = new ComputeRegionTargetHttpProxiesTestIamPermissionsRequest("ullam", "aut", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("id"),
                        add("delectus"),
                        add("porro"),
                        add("quia"),
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "eius";
                key = "est";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "ipsa";
                uploadProtocol = "dignissimos";
                userIp = "a";
            }};            

            ComputeRegionTargetHttpProxiesTestIamPermissionsResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesTestIamPermissions(req, new ComputeRegionTargetHttpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption1("et", "quia") {{
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
