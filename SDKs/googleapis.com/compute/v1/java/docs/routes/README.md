# routes

### Available Operations

* [computeRoutesDelete](#computeroutesdelete) - Deletes the specified Route resource.
* [computeRoutesGet](#computeroutesget) - Returns the specified Route resource.
* [computeRoutesInsert](#computeroutesinsert) - Creates a Route resource in the specified project using the data included in the request.
* [computeRoutesList](#computerouteslist) - Retrieves the list of Route resources available to the specified project.

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

            ComputeRoutesDeleteRequest req = new ComputeRoutesDeleteRequest("aperiam", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "deserunt";
                key = "odio";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "nostrum";
                uploadType = "exercitationem";
                uploadProtocol = "exercitationem";
                userIp = "quo";
            }};            

            ComputeRoutesDeleteResponse res = sdk.routes.computeRoutesDelete(req, new ComputeRoutesDeleteSecurity() {{
                option1 = new ComputeRoutesDeleteSecurityOption1("fugit", "nihil") {{
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

            ComputeRoutesGetRequest req = new ComputeRoutesGetRequest("quae", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "repudiandae";
                key = "quod";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "facere";
                uploadProtocol = "et";
                userIp = "maiores";
            }};            

            ComputeRoutesGetResponse res = sdk.routes.computeRoutesGet(req, new ComputeRoutesGetSecurity() {{
                option1 = new ComputeRoutesGetSecurityOption1("omnis", "placeat") {{
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

            ComputeRoutesInsertRequest req = new ComputeRoutesInsertRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                route = new Route() {{
                    asPaths = new org.openapis.openapi.models.shared.RouteAsPath[]{{
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(648851L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_CONFED_SEQUENCE;
                        }}),
                        add(new RouteAsPath() {{
                            asLists = new Long[]{{
                                add(677125L),
                                add(195181L),
                                add(454214L),
                                add(375006L),
                            }};
                            pathSegmentType = RouteAsPathPathSegmentTypeEnum.AS_CONFED_SET;
                        }}),
                    }};
                    creationTimestamp = "inventore";
                    description = "blanditiis";
                    destRange = "temporibus";
                    id = "doloribus";
                    kind = "placeat";
                    name = "Clifton Wiegand DVM";
                    network = "officiis";
                    nextHopGateway = "quasi";
                    nextHopIlb = "nemo";
                    nextHopInstance = "molestiae";
                    nextHopIp = "impedit";
                    nextHopNetwork = "eius";
                    nextHopPeering = "nostrum";
                    nextHopVpnTunnel = "cupiditate";
                    priority = 597869L;
                    routeStatus = RouteRouteStatusEnum.DROPPED;
                    routeType = RouteRouteTypeEnum.BGP;
                    selfLink = "ex";
                    tags = new String[]{{
                        add("provident"),
                    }};
                    warnings = new org.openapis.openapi.models.shared.RouteWarnings[]{{
                        add(new RouteWarnings() {{
                            code = RouteWarningsCodeEnum.RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING;
                            data = new org.openapis.openapi.models.shared.RouteWarningsData[]{{
                                add(new RouteWarningsData() {{
                                    key = "repudiandae";
                                    value = "iste";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "quisquam";
                                    value = "dicta";
                                }}),
                                add(new RouteWarningsData() {{
                                    key = "minima";
                                    value = "provident";
                                }}),
                            }};
                            message = "magnam";
                        }}),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "unde";
                key = "cum";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "molestias";
                uploadType = "aliquam";
                uploadProtocol = "quidem";
                userIp = "iusto";
            }};            

            ComputeRoutesInsertResponse res = sdk.routes.computeRoutesInsert(req, new ComputeRoutesInsertSecurity() {{
                option1 = new ComputeRoutesInsertSecurityOption1("eveniet", "ex") {{
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

            ComputeRoutesListRequest req = new ComputeRoutesListRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "et";
                filter = "non";
                key = "impedit";
                maxResults = 99193L;
                oauthToken = "quidem";
                orderBy = "repellat";
                pageToken = "eius";
                prettyPrint = false;
                quotaUser = "veniam";
                returnPartialSuccess = false;
                uploadType = "dolorem";
                uploadProtocol = "qui";
                userIp = "nobis";
            }};            

            ComputeRoutesListResponse res = sdk.routes.computeRoutesList(req, new ComputeRoutesListSecurity() {{
                option1 = new ComputeRoutesListSecurityOption1("eos", "voluptates") {{
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
