# routes

### Available Operations

* [computeRoutesDelete](#computeroutesdelete) - Deletes the specified Route resource.
* [computeRoutesGet](#computeroutesget) - Returns the specified Route resource.
* [computeRoutesInsert](#computeroutesinsert) - Creates a Route resource in the specified project using the data included in the request.
* [computeRoutesList](#computerouteslist) - Retrieves the list of Route resources available to the specified project.
* [computeRoutesTestIamPermissions](#computeroutestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRoutesDelete

Deletes the specified Route resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRoutesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRoutesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRoutesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutesDeleteRequest req = new ComputeRoutesDeleteRequest("consectetur", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "mollitia";
                key = "ullam";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "necessitatibus";
                uploadType = "repellat";
                uploadProtocol = "modi";
                userIp = "accusamus";
            }};            

            ComputeRoutesDeleteResponse res = sdk.routes.computeRoutesDelete(req, new ComputeRoutesDeleteSecurity() {{
                option1 = new ComputeRoutesDeleteSecurityOption1("atque", "sunt") {{
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

## computeRoutesGet

Returns the specified Route resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutesGetRequest;
import org.openapis.openapi.models.operations.ComputeRoutesGetResponse;
import org.openapis.openapi.models.operations.ComputeRoutesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRoutesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutesGetRequest req = new ComputeRoutesGetRequest("tempora", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "vitae";
                key = "odio";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "fugiat";
                uploadProtocol = "sed";
                userIp = "rem";
            }};            

            ComputeRoutesGetResponse res = sdk.routes.computeRoutesGet(req, new ComputeRoutesGetSecurity() {{
                option1 = new ComputeRoutesGetSecurityOption1("officia", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.route != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutesInsert

Creates a Route resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRoutesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRoutesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRoutesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Route;
import org.openapis.openapi.models.shared.RouteAsPath;
import org.openapis.openapi.models.shared.RouteAsPathPathSegmentTypeEnum;
import org.openapis.openapi.models.shared.RouteIlbRouteBehaviorOnUnhealthyEnum;
import org.openapis.openapi.models.shared.RouteRouteStatusEnum;
import org.openapis.openapi.models.shared.RouteRouteTypeEnum;
import org.openapis.openapi.models.shared.RouteWarnings;
import org.openapis.openapi.models.shared.RouteWarningsCodeEnum;
import org.openapis.openapi.models.shared.RouteWarningsData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutesInsertRequest req = new ComputeRoutesInsertRequest("molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                route = new Route() {{
                    allowConflictingSubnetworks = false;
                    asPaths = new org.openapis.openapi.models.shared.RouteAsPath[]{{
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(475725L),
                                add(827109L),
                                add(254423L),
                                add(232806L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_SEQUENCE;
                        }}),
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(64343L),
                                add(931877L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_CONFED_SET;
                        }}),
                    }};
                    creationTimestamp = "perferendis";
                    description = "sapiente";
                    destRange = "aperiam";
                    id = "amet";
                    ilbRouteBehaviorOnUnhealthy = RouteIlbRouteBehaviorOnUnhealthyEnum.WITHDRAW_ROUTE_IF_ILB_UNHEALTHY;
                    kind = "ratione";
                    name = "Kim Mayer";
                    network = "vel";
                    nextHopGateway = "corporis";
                    nextHopHub = "voluptate";
                    nextHopIlb = "nulla";
                    nextHopInstance = "fugiat";
                    nextHopInterconnectAttachment = "magni";
                    nextHopIp = "pariatur";
                    nextHopNetwork = "velit";
                    nextHopPeering = "tempore";
                    nextHopVpnTunnel = "illum";
                    priority = 952835L;
                    routeStatus = RouteRouteStatusEnum.PENDING;
                    routeType = RouteRouteTypeEnum.TRANSIT;
                    selfLink = "ratione";
                    selfLinkWithId = "porro";
                    tags = new String[]{{
                        add("labore"),
                    }};
                    warnings = new org.openapis.openapi.models.shared.RouteWarnings[]{{
                        add(new RouteWarnings() {{
                            code = RouteWarningsCodeEnum.UNREACHABLE;
                            data = new org.openapis.openapi.models.shared.RouteWarningsData[]{{
                                add(new RouteWarningsData() {{
                                    key = "tenetur";
                                    value = "ullam";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "cumque";
                                    value = "tempora";
                                }}),
                            }};
                            message = "sint";
                        }}),
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "doloremque";
                key = "nihil";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "occaecati";
                requestId = "enim";
                uploadType = "deleniti";
                uploadProtocol = "voluptas";
                userIp = "in";
            }};            

            ComputeRoutesInsertResponse res = sdk.routes.computeRoutesInsert(req, new ComputeRoutesInsertSecurity() {{
                option1 = new ComputeRoutesInsertSecurityOption1("possimus", "doloribus") {{
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

## computeRoutesList

Retrieves the list of Route resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutesListRequest;
import org.openapis.openapi.models.operations.ComputeRoutesListResponse;
import org.openapis.openapi.models.operations.ComputeRoutesListSecurity;
import org.openapis.openapi.models.operations.ComputeRoutesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutesListRequest req = new ComputeRoutesListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "voluptas";
                filter = "porro";
                key = "assumenda";
                maxResults = 790970L;
                oauthToken = "a";
                orderBy = "quas";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "magnam";
                returnPartialSuccess = false;
                uploadType = "vero";
                uploadProtocol = "molestiae";
                userIp = "reprehenderit";
            }};            

            ComputeRoutesListResponse res = sdk.routes.computeRoutesList(req, new ComputeRoutesListSecurity() {{
                option1 = new ComputeRoutesListSecurityOption1("numquam", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.routeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRoutesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRoutesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRoutesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutesTestIamPermissionsRequest req = new ComputeRoutesTestIamPermissionsRequest("soluta", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("sapiente"),
                    }};
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "sapiente";
                key = "assumenda";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "ipsam";
                uploadProtocol = "dolores";
                userIp = "aspernatur";
            }};            

            ComputeRoutesTestIamPermissionsResponse res = sdk.routes.computeRoutesTestIamPermissions(req, new ComputeRoutesTestIamPermissionsSecurity() {{
                option1 = new ComputeRoutesTestIamPermissionsSecurityOption1("ut", "incidunt") {{
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
