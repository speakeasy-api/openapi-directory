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

            ComputeRegionTargetHttpProxiesDeleteRequest req = new ComputeRegionTargetHttpProxiesDeleteRequest("cupiditate", "magnam", "quas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "vel";
                key = "expedita";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "numquam";
                uploadType = "voluptatum";
                uploadProtocol = "natus";
                userIp = "id";
            }};            

            ComputeRegionTargetHttpProxiesDeleteResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesDelete(req, new ComputeRegionTargetHttpProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesDeleteSecurityOption1("ea", "temporibus") {{
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

            ComputeRegionTargetHttpProxiesGetRequest req = new ComputeRegionTargetHttpProxiesGetRequest("minima", "quaerat", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "iste";
                key = "sunt";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "incidunt";
                uploadProtocol = "veritatis";
                userIp = "quae";
            }};            

            ComputeRegionTargetHttpProxiesGetResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesGet(req, new ComputeRegionTargetHttpProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesGetSecurityOption1("sapiente", "tempora") {{
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

            ComputeRegionTargetHttpProxiesInsertRequest req = new ComputeRegionTargetHttpProxiesInsertRequest("provident", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpProxy = new TargetHttpProxy() {{
                    creationTimestamp = "laudantium";
                    description = "dolorem";
                    fingerprint = "aspernatur";
                    httpFilters = new String[]{{
                        add("earum"),
                        add("quibusdam"),
                    }};
                    httpKeepAliveTimeoutSec = 18158;
                    id = "iusto";
                    kind = "aliquid";
                    name = "Bernice Feil";
                    proxyBind = false;
                    region = "veniam";
                    selfLink = "blanditiis";
                    selfLinkWithId = "unde";
                    urlMap = "harum";
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "est";
                key = "repellat";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "excepturi";
                uploadType = "ipsam";
                uploadProtocol = "eos";
                userIp = "natus";
            }};            

            ComputeRegionTargetHttpProxiesInsertResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesInsert(req, new ComputeRegionTargetHttpProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesInsertSecurityOption1("repellendus", "enim") {{
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

            ComputeRegionTargetHttpProxiesListRequest req = new ComputeRegionTargetHttpProxiesListRequest("tempora", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "qui";
                filter = "esse";
                key = "minus";
                maxResults = 265957L;
                oauthToken = "fuga";
                orderBy = "repudiandae";
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "non";
                returnPartialSuccess = false;
                uploadType = "asperiores";
                uploadProtocol = "tempore";
                userIp = "labore";
            }};            

            ComputeRegionTargetHttpProxiesListResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesList(req, new ComputeRegionTargetHttpProxiesListSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesListSecurityOption1("quasi", "fugiat") {{
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

            ComputeRegionTargetHttpProxiesSetUrlMapRequest req = new ComputeRegionTargetHttpProxiesSetUrlMapRequest("nihil", "vel", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "reprehenderit";
                }};;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "expedita";
                key = "accusantium";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "impedit";
                uploadType = "amet";
                uploadProtocol = "dolores";
                userIp = "hic";
            }};            

            ComputeRegionTargetHttpProxiesSetUrlMapResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesSetUrlMap(req, new ComputeRegionTargetHttpProxiesSetUrlMapSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption1("assumenda", "a") {{
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

            ComputeRegionTargetHttpProxiesTestIamPermissionsRequest req = new ComputeRegionTargetHttpProxiesTestIamPermissionsRequest("suscipit", "qui", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("odit"),
                    }};
                }};;
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

            ComputeRegionTargetHttpProxiesTestIamPermissionsResponse res = sdk.regionTargetHttpProxies.computeRegionTargetHttpProxiesTestIamPermissions(req, new ComputeRegionTargetHttpProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption1("consectetur", "earum") {{
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
