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

            ComputeRoutesDeleteRequest req = new ComputeRoutesDeleteRequest("voluptatum", "ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "quis";
                fields = "saepe";
                key = "tenetur";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "esse";
                uploadType = "labore";
                uploadProtocol = "commodi";
                userIp = "quasi";
            }};            

            ComputeRoutesDeleteResponse res = sdk.routes.computeRoutesDelete(req, new ComputeRoutesDeleteSecurity() {{
                option1 = new ComputeRoutesDeleteSecurityOption1("repellendus", "adipisci") {{
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

            ComputeRoutesGetRequest req = new ComputeRoutesGetRequest("voluptas", "inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "blanditiis";
                key = "fuga";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "soluta";
                uploadProtocol = "minima";
                userIp = "quia";
            }};            

            ComputeRoutesGetResponse res = sdk.routes.computeRoutesGet(req, new ComputeRoutesGetSecurity() {{
                option1 = new ComputeRoutesGetSecurityOption1("enim", "voluptas") {{
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

            ComputeRoutesInsertRequest req = new ComputeRoutesInsertRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                route = new Route() {{
                    asPaths = new org.openapis.openapi.models.shared.RouteAsPath[]{{
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(912559L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_SET;
                        }}),
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(97423L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_CONFED_SET;
                        }}),
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(854011L),
                                add(112816L),
                                add(434736L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_SEQUENCE;
                        }}),
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(106518L),
                                add(510554L),
                                add(494766L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_SEQUENCE;
                        }}),
                    }};
                    creationTimestamp = "assumenda";
                    description = "quo";
                    destRange = "aspernatur";
                    id = "nihil";
                    kind = "nesciunt";
                    name = "Micheal Pouros";
                    network = "saepe";
                    nextHopGateway = "temporibus";
                    nextHopIlb = "id";
                    nextHopInstance = "ad";
                    nextHopInterconnectAttachment = "distinctio";
                    nextHopIp = "consequuntur";
                    nextHopNetwork = "consequuntur";
                    nextHopPeering = "veniam";
                    nextHopVpnTunnel = "tenetur";
                    priority = 771927L;
                    routeStatus = RouteRouteStatusEnum.PENDING;
                    routeType = RouteRouteTypeEnum.SUBNET;
                    selfLink = "excepturi";
                    tags = new String[]{{
                        add("consequatur"),
                        add("animi"),
                        add("quisquam"),
                        add("velit"),
                    }};
                    warnings = new org.openapis.openapi.models.shared.RouteWarnings[]{{
                        add(new RouteWarnings() {{
                            code = RouteWarningsCodeEnum.CLEANUP_FAILED;
                            data = new org.openapis.openapi.models.shared.RouteWarningsData[]{{
                                add(new RouteWarningsData() {{
                                    key = "eaque";
                                    value = "quas";
                                }}),
                            }};
                            message = "optio";
                        }}),
                        add(new RouteWarnings() {{
                            code = RouteWarningsCodeEnum.MISSING_TYPE_DEPENDENCY;
                            data = new org.openapis.openapi.models.shared.RouteWarningsData[]{{
                                add(new RouteWarningsData() {{
                                    key = "natus";
                                    value = "id";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "ab";
                                    value = "eius";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "iste";
                                    value = "porro";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "officiis";
                                    value = "perferendis";
                                }}),
                            }};
                            message = "odio";
                        }}),
                        add(new RouteWarnings() {{
                            code = RouteWarningsCodeEnum.LARGE_DEPLOYMENT_WARNING;
                            data = new org.openapis.openapi.models.shared.RouteWarningsData[]{{
                                add(new RouteWarningsData() {{
                                    key = "expedita";
                                    value = "fuga";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "rerum";
                                    value = "earum";
                                }}),
                            }};
                            message = "vero";
                        }}),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "reiciendis";
                key = "deleniti";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "eius";
                uploadType = "blanditiis";
                uploadProtocol = "aliquam";
                userIp = "nostrum";
            }};            

            ComputeRoutesInsertResponse res = sdk.routes.computeRoutesInsert(req, new ComputeRoutesInsertSecurity() {{
                option1 = new ComputeRoutesInsertSecurityOption1("libero", "odit") {{
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

            ComputeRoutesListRequest req = new ComputeRoutesListRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "atque";
                filter = "beatae";
                key = "nemo";
                maxResults = 129672L;
                oauthToken = "beatae";
                orderBy = "maiores";
                pageToken = "unde";
                prettyPrint = false;
                quotaUser = "fugiat";
                returnPartialSuccess = false;
                uploadType = "possimus";
                uploadProtocol = "laborum";
                userIp = "veritatis";
            }};            

            ComputeRoutesListResponse res = sdk.routes.computeRoutesList(req, new ComputeRoutesListSecurity() {{
                option1 = new ComputeRoutesListSecurityOption1("assumenda", "ipsa") {{
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

            ComputeRoutesTestIamPermissionsRequest req = new ComputeRoutesTestIamPermissionsRequest("ab", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eum"),
                        add("pariatur"),
                        add("aperiam"),
                    }};
                }};;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "cupiditate";
                key = "odit";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "eum";
                uploadProtocol = "voluptatum";
                userIp = "facere";
            }};            

            ComputeRoutesTestIamPermissionsResponse res = sdk.routes.computeRoutesTestIamPermissions(req, new ComputeRoutesTestIamPermissionsSecurity() {{
                option1 = new ComputeRoutesTestIamPermissionsSecurityOption1("culpa", "neque") {{
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
