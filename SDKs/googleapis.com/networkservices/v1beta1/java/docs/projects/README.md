# projects

### Available Operations

* [networkservicesProjectsLocationsEndpointPoliciesCreate](#networkservicesprojectslocationsendpointpoliciescreate) - Creates a new EndpointPolicy in a given project and location.
* [networkservicesProjectsLocationsEndpointPoliciesList](#networkservicesprojectslocationsendpointpolicieslist) - Lists EndpointPolicies in a given project and location.
* [networkservicesProjectsLocationsGatewaysCreate](#networkservicesprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [networkservicesProjectsLocationsGatewaysList](#networkservicesprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [networkservicesProjectsLocationsGrpcRoutesCreate](#networkservicesprojectslocationsgrpcroutescreate) - Creates a new GrpcRoute in a given project and location.
* [networkservicesProjectsLocationsGrpcRoutesList](#networkservicesprojectslocationsgrpcrouteslist) - Lists GrpcRoutes in a given project and location.
* [networkservicesProjectsLocationsHttpRoutesCreate](#networkservicesprojectslocationshttproutescreate) - Creates a new HttpRoute in a given project and location.
* [networkservicesProjectsLocationsHttpRoutesList](#networkservicesprojectslocationshttprouteslist) - Lists HttpRoute in a given project and location.
* [networkservicesProjectsLocationsList](#networkservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [networkservicesProjectsLocationsMeshesCreate](#networkservicesprojectslocationsmeshescreate) - Creates a new Mesh in a given project and location.
* [networkservicesProjectsLocationsMeshesList](#networkservicesprojectslocationsmesheslist) - Lists Meshes in a given project and location.
* [networkservicesProjectsLocationsOperationsCancel](#networkservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkservicesProjectsLocationsOperationsList](#networkservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkservicesProjectsLocationsServiceBindingsCreate](#networkservicesprojectslocationsservicebindingscreate) - Creates a new ServiceBinding in a given project and location.
* [networkservicesProjectsLocationsServiceBindingsGetIamPolicy](#networkservicesprojectslocationsservicebindingsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkservicesProjectsLocationsServiceBindingsList](#networkservicesprojectslocationsservicebindingslist) - Lists ServiceBinding in a given project and location.
* [networkservicesProjectsLocationsServiceBindingsSetIamPolicy](#networkservicesprojectslocationsservicebindingssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkservicesProjectsLocationsServiceBindingsTestIamPermissions](#networkservicesprojectslocationsservicebindingstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkservicesProjectsLocationsTcpRoutesCreate](#networkservicesprojectslocationstcproutescreate) - Creates a new TcpRoute in a given project and location.
* [networkservicesProjectsLocationsTcpRoutesList](#networkservicesprojectslocationstcprouteslist) - Lists TcpRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesCreate](#networkservicesprojectslocationstlsroutescreate) - Creates a new TlsRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesDelete](#networkservicesprojectslocationstlsroutesdelete) - Deletes a single TlsRoute.
* [networkservicesProjectsLocationsTlsRoutesGet](#networkservicesprojectslocationstlsroutesget) - Gets details of a single TlsRoute.
* [networkservicesProjectsLocationsTlsRoutesList](#networkservicesprojectslocationstlsrouteslist) - Lists TlsRoute in a given project and location.
* [networkservicesProjectsLocationsTlsRoutesPatch](#networkservicesprojectslocationstlsroutespatch) - Updates the parameters of a single TlsRoute.

## networkservicesProjectsLocationsEndpointPoliciesCreate

Creates a new EndpointPolicy in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointMatcher;
import org.openapis.openapi.models.shared.EndpointPolicyInput;
import org.openapis.openapi.models.shared.EndpointPolicyTypeEnum;
import org.openapis.openapi.models.shared.MetadataLabelMatcher;
import org.openapis.openapi.models.shared.MetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
import org.openapis.openapi.models.shared.MetadataLabels;
import org.openapis.openapi.models.shared.TrafficPortSelector;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest req = new NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                endpointPolicyInput = new EndpointPolicyInput() {{
                    authorizationPolicy = "quod";
                    clientTlsPolicy = "esse";
                    description = "totam";
                    endpointMatcher = new EndpointMatcher() {{
                        metadataLabelMatcher = new MetadataLabelMatcher() {{
                            metadataLabelMatchCriteria = MetadataLabelMatcherMetadataLabelMatchCriteriaEnum.MATCH_ALL;
                            metadataLabels = new org.openapis.openapi.models.shared.MetadataLabels[]{{
                                add(new MetadataLabels() {{
                                    labelName = "dicta";
                                    labelValue = "nam";
                                }}),
                                add(new MetadataLabels() {{
                                    labelName = "officia";
                                    labelValue = "occaecati";
                                }}),
                                add(new MetadataLabels() {{
                                    labelName = "fugit";
                                    labelValue = "deleniti";
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("optio", "totam");
                        put("beatae", "commodi");
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    name = "Cory Emmerich";
                    serverTlsPolicy = "perferendis";
                    trafficPortSelector = new TrafficPortSelector() {{
                        ports = new String[]{{
                            add("natus"),
                            add("sed"),
                        }};
                    }};;
                    type = EndpointPolicyTypeEnum.SIDECAR_PROXY;
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                endpointPolicyId = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse res = sdk.projects.networkservicesProjectsLocationsEndpointPoliciesCreate(req, new NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity("saepe", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsEndpointPoliciesList

Lists EndpointPolicies in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsEndpointPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsEndpointPoliciesListRequest req = new NetworkservicesProjectsLocationsEndpointPoliciesListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                pageSize = 358152L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            NetworkservicesProjectsLocationsEndpointPoliciesListResponse res = sdk.projects.networkservicesProjectsLocationsEndpointPoliciesList(req, new NetworkservicesProjectsLocationsEndpointPoliciesListSecurity("nemo", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEndpointPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsGatewaysCreate

Creates a new Gateway in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGatewaysCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGatewaysCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGatewaysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GatewayInput;
import org.openapis.openapi.models.shared.GatewayTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsGatewaysCreateRequest req = new NetworkservicesProjectsLocationsGatewaysCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                gatewayInput = new GatewayInput() {{
                    addresses = new String[]{{
                        add("culpa"),
                        add("doloribus"),
                    }};
                    certificateUrls = new String[]{{
                        add("architecto"),
                        add("mollitia"),
                        add("dolorem"),
                        add("culpa"),
                    }};
                    description = "consequuntur";
                    gatewaySecurityPolicy = "repellat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "numquam");
                        put("commodi", "quam");
                        put("molestiae", "velit");
                    }};
                    name = "Miss Eugene Hauck";
                    network = "enim";
                    ports = new Integer[]{{
                        add(778346),
                    }};
                    scope = "sequi";
                    serverTlsPolicy = "tenetur";
                    subnetwork = "ipsam";
                    type = GatewayTypeEnum.OPEN_MESH;
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                gatewayId = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            NetworkservicesProjectsLocationsGatewaysCreateResponse res = sdk.projects.networkservicesProjectsLocationsGatewaysCreate(req, new NetworkservicesProjectsLocationsGatewaysCreateSecurity("nihil", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsGatewaysList

Lists Gateways in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGatewaysListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGatewaysListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGatewaysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsGatewaysListRequest req = new NetworkservicesProjectsLocationsGatewaysListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                pageSize = 282807L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            NetworkservicesProjectsLocationsGatewaysListResponse res = sdk.projects.networkservicesProjectsLocationsGatewaysList(req, new NetworkservicesProjectsLocationsGatewaysListSecurity("iusto", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGatewaysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsGrpcRoutesCreate

Creates a new GrpcRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGrpcRoutesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGrpcRoutesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GrpcRouteDestination;
import org.openapis.openapi.models.shared.GrpcRouteFaultInjectionPolicy;
import org.openapis.openapi.models.shared.GrpcRouteFaultInjectionPolicyAbort;
import org.openapis.openapi.models.shared.GrpcRouteFaultInjectionPolicyDelay;
import org.openapis.openapi.models.shared.GrpcRouteHeaderMatch;
import org.openapis.openapi.models.shared.GrpcRouteHeaderMatchTypeEnum;
import org.openapis.openapi.models.shared.GrpcRouteInput;
import org.openapis.openapi.models.shared.GrpcRouteMethodMatch;
import org.openapis.openapi.models.shared.GrpcRouteMethodMatchTypeEnum;
import org.openapis.openapi.models.shared.GrpcRouteRetryPolicy;
import org.openapis.openapi.models.shared.GrpcRouteRouteAction;
import org.openapis.openapi.models.shared.GrpcRouteRouteMatch;
import org.openapis.openapi.models.shared.GrpcRouteRouteRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsGrpcRoutesCreateRequest req = new NetworkservicesProjectsLocationsGrpcRoutesCreateRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                grpcRouteInput = new GrpcRouteInput() {{
                    description = "accusamus";
                    gateways = new String[]{{
                        add("repudiandae"),
                        add("quae"),
                    }};
                    hostnames = new String[]{{
                        add("quidem"),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "pariatur");
                        put("modi", "praesentium");
                        put("rem", "voluptates");
                    }};
                    meshes = new String[]{{
                        add("repudiandae"),
                    }};
                    name = "Patrick Ward";
                    rules = new org.openapis.openapi.models.shared.GrpcRouteRouteRule[]{{
                        add(new GrpcRouteRouteRule() {{
                            action = new GrpcRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.GrpcRouteDestination[]{{
                                    add(new GrpcRouteDestination() {{
                                        serviceName = "quibusdam";
                                        weight = 131797;
                                    }}),
                                    add(new GrpcRouteDestination() {{
                                        serviceName = "deserunt";
                                        weight = 716327;
                                    }}),
                                    add(new GrpcRouteDestination() {{
                                        serviceName = "quibusdam";
                                        weight = 289406;
                                    }}),
                                }};
                                faultInjectionPolicy = new GrpcRouteFaultInjectionPolicy() {{
                                    abort = new GrpcRouteFaultInjectionPolicyAbort() {{
                                        httpStatus = 264730;
                                        percentage = 183191;
                                    }};
                                    delay = new GrpcRouteFaultInjectionPolicyDelay() {{
                                        fixedDelay = "aliquid";
                                        percentage = 586513;
                                    }};
                                }};
                                retryPolicy = new GrpcRouteRetryPolicy() {{
                                    numRetries = 552822L;
                                    retryConditions = new String[]{{
                                        add("magni"),
                                    }};
                                }};
                                timeout = "assumenda";
                            }};
                            matches = new org.openapis.openapi.models.shared.GrpcRouteRouteMatch[]{{
                                add(new GrpcRouteRouteMatch() {{
                                    headers = new org.openapis.openapi.models.shared.GrpcRouteHeaderMatch[]{{
                                        add(new GrpcRouteHeaderMatch() {{
                                            key = "fugit";
                                            type = GrpcRouteHeaderMatchTypeEnum.REGULAR_EXPRESSION;
                                            value = "excepturi";
                                        }}),
                                    }};
                                    method = new GrpcRouteMethodMatch() {{
                                        caseSensitive = false;
                                        grpcMethod = "tempora";
                                        grpcService = "facilis";
                                        type = GrpcRouteMethodMatchTypeEnum.REGULAR_EXPRESSION;
                                    }};
                                }}),
                                add(new GrpcRouteRouteMatch() {{
                                    headers = new org.openapis.openapi.models.shared.GrpcRouteHeaderMatch[]{{
                                        add(new GrpcRouteHeaderMatch() {{
                                            key = "delectus";
                                            type = GrpcRouteHeaderMatchTypeEnum.EXACT;
                                            value = "non";
                                        }}),
                                        add(new GrpcRouteHeaderMatch() {{
                                            key = "eligendi";
                                            type = GrpcRouteHeaderMatchTypeEnum.EXACT;
                                            value = "aliquid";
                                        }}),
                                    }};
                                    method = new GrpcRouteMethodMatch() {{
                                        caseSensitive = false;
                                        grpcMethod = "provident";
                                        grpcService = "necessitatibus";
                                        type = GrpcRouteMethodMatchTypeEnum.EXACT;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                grpcRouteId = "dolorum";
                key = "in";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "maiores";
                uploadProtocol = "rerum";
            }};            

            NetworkservicesProjectsLocationsGrpcRoutesCreateResponse res = sdk.projects.networkservicesProjectsLocationsGrpcRoutesCreate(req, new NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity("dicta", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsGrpcRoutesList

Lists GrpcRoutes in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGrpcRoutesListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGrpcRoutesListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsGrpcRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsGrpcRoutesListRequest req = new NetworkservicesProjectsLocationsGrpcRoutesListRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                key = "non";
                oauthToken = "occaecati";
                pageSize = 313218L;
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            NetworkservicesProjectsLocationsGrpcRoutesListResponse res = sdk.projects.networkservicesProjectsLocationsGrpcRoutesList(req, new NetworkservicesProjectsLocationsGrpcRoutesListSecurity("nam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGrpcRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsHttpRoutesCreate

Creates a new HttpRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsHttpRoutesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsHttpRoutesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsHttpRoutesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpRouteCorsPolicy;
import org.openapis.openapi.models.shared.HttpRouteDestination;
import org.openapis.openapi.models.shared.HttpRouteFaultInjectionPolicy;
import org.openapis.openapi.models.shared.HttpRouteFaultInjectionPolicyAbort;
import org.openapis.openapi.models.shared.HttpRouteFaultInjectionPolicyDelay;
import org.openapis.openapi.models.shared.HttpRouteHeaderMatch;
import org.openapis.openapi.models.shared.HttpRouteHeaderMatchIntegerRange;
import org.openapis.openapi.models.shared.HttpRouteHeaderModifier;
import org.openapis.openapi.models.shared.HttpRouteInput;
import org.openapis.openapi.models.shared.HttpRouteQueryParameterMatch;
import org.openapis.openapi.models.shared.HttpRouteRedirect;
import org.openapis.openapi.models.shared.HttpRouteRedirectResponseCodeEnum;
import org.openapis.openapi.models.shared.HttpRouteRequestMirrorPolicy;
import org.openapis.openapi.models.shared.HttpRouteRetryPolicy;
import org.openapis.openapi.models.shared.HttpRouteRouteAction;
import org.openapis.openapi.models.shared.HttpRouteRouteMatch;
import org.openapis.openapi.models.shared.HttpRouteRouteRule;
import org.openapis.openapi.models.shared.HttpRouteURLRewrite;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsHttpRoutesCreateRequest req = new NetworkservicesProjectsLocationsHttpRoutesCreateRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                httpRouteInput = new HttpRouteInput() {{
                    description = "sapiente";
                    gateways = new String[]{{
                        add("deserunt"),
                    }};
                    hostnames = new String[]{{
                        add("vel"),
                        add("natus"),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "perferendis");
                        put("nihil", "magnam");
                        put("distinctio", "id");
                    }};
                    meshes = new String[]{{
                        add("labore"),
                        add("suscipit"),
                    }};
                    name = "Robin Keebler";
                    rules = new org.openapis.openapi.models.shared.HttpRouteRouteRule[]{{
                        add(new HttpRouteRouteRule() {{
                            action = new HttpRouteRouteAction() {{
                                corsPolicy = new HttpRouteCorsPolicy() {{
                                    allowCredentials = false;
                                    allowHeaders = new String[]{{
                                        add("et"),
                                        add("excepturi"),
                                    }};
                                    allowMethods = new String[]{{
                                        add("provident"),
                                        add("quos"),
                                    }};
                                    allowOriginRegexes = new String[]{{
                                        add("accusantium"),
                                        add("mollitia"),
                                        add("reiciendis"),
                                    }};
                                    allowOrigins = new String[]{{
                                        add("ad"),
                                        add("eum"),
                                        add("dolor"),
                                    }};
                                    disabled = false;
                                    exposeHeaders = new String[]{{
                                        add("odit"),
                                        add("nemo"),
                                        add("quasi"),
                                        add("iure"),
                                    }};
                                    maxAge = "doloribus";
                                }};
                                destinations = new org.openapis.openapi.models.shared.HttpRouteDestination[]{{
                                    add(new HttpRouteDestination() {{
                                        serviceName = "eius";
                                        weight = 806194;
                                    }}),
                                    add(new HttpRouteDestination() {{
                                        serviceName = "deleniti";
                                        weight = 703889;
                                    }}),
                                    add(new HttpRouteDestination() {{
                                        serviceName = "in";
                                        weight = 100226;
                                    }}),
                                    add(new HttpRouteDestination() {{
                                        serviceName = "architecto";
                                        weight = 919483;
                                    }}),
                                }};
                                faultInjectionPolicy = new HttpRouteFaultInjectionPolicy() {{
                                    abort = new HttpRouteFaultInjectionPolicyAbort() {{
                                        httpStatus = 352312;
                                        percentage = 714242;
                                    }};
                                    delay = new HttpRouteFaultInjectionPolicyDelay() {{
                                        fixedDelay = "nihil";
                                        percentage = 998848;
                                    }};
                                }};
                                redirect = new HttpRouteRedirect() {{
                                    hostRedirect = "quibusdam";
                                    httpsRedirect = false;
                                    pathRedirect = "sed";
                                    portRedirect = 904648;
                                    prefixRewrite = "pariatur";
                                    responseCode = HttpRouteRedirectResponseCodeEnum.RESPONSE_CODE_UNSPECIFIED;
                                    stripQuery = false;
                                }};
                                requestHeaderModifier = new HttpRouteHeaderModifier() {{
                                    add = new java.util.HashMap<String, String>() {{
                                        put("praesentium", "natus");
                                    }};
                                    remove = new String[]{{
                                        add("sunt"),
                                    }};
                                    set = new java.util.HashMap<String, String>() {{
                                        put("illum", "pariatur");
                                        put("maxime", "ea");
                                        put("excepturi", "odit");
                                        put("ea", "accusantium");
                                    }};
                                }};
                                requestMirrorPolicy = new HttpRouteRequestMirrorPolicy() {{
                                    destination = new HttpRouteDestination() {{
                                        serviceName = "ab";
                                        weight = 982575;
                                    }};
                                }};
                                responseHeaderModifier = new HttpRouteHeaderModifier() {{
                                    add = new java.util.HashMap<String, String>() {{
                                        put("ipsam", "voluptate");
                                        put("autem", "nam");
                                        put("eaque", "pariatur");
                                    }};
                                    remove = new String[]{{
                                        add("voluptatibus"),
                                        add("perferendis"),
                                    }};
                                    set = new java.util.HashMap<String, String>() {{
                                        put("amet", "aut");
                                        put("cumque", "corporis");
                                        put("hic", "libero");
                                        put("nobis", "dolores");
                                    }};
                                }};
                                retryPolicy = new HttpRouteRetryPolicy() {{
                                    numRetries = 339404;
                                    perTryTimeout = "totam";
                                    retryConditions = new String[]{{
                                        add("eaque"),
                                        add("quis"),
                                    }};
                                }};
                                timeout = "nesciunt";
                                urlRewrite = new HttpRouteURLRewrite() {{
                                    hostRewrite = "eos";
                                    pathPrefixRewrite = "perferendis";
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.HttpRouteRouteMatch[]{{
                                add(new HttpRouteRouteMatch() {{
                                    fullPathMatch = "minus";
                                    headers = new org.openapis.openapi.models.shared.HttpRouteHeaderMatch[]{{
                                        add(new HttpRouteHeaderMatch() {{
                                            exactMatch = "dolor";
                                            header = "vero";
                                            invertMatch = false;
                                            prefixMatch = "nostrum";
                                            presentMatch = false;
                                            rangeMatch = new HttpRouteHeaderMatchIntegerRange() {{
                                                end = 944120;
                                                start = 928082;
                                            }};
                                            regexMatch = "omnis";
                                            suffixMatch = "facilis";
                                        }}),
                                        add(new HttpRouteHeaderMatch() {{
                                            exactMatch = "perspiciatis";
                                            header = "voluptatem";
                                            invertMatch = false;
                                            prefixMatch = "porro";
                                            presentMatch = false;
                                            rangeMatch = new HttpRouteHeaderMatchIntegerRange() {{
                                                end = 164694;
                                                start = 500026;
                                            }};
                                            regexMatch = "error";
                                            suffixMatch = "eaque";
                                        }}),
                                    }};
                                    ignoreCase = false;
                                    prefixMatch = "occaecati";
                                    queryParameters = new org.openapis.openapi.models.shared.HttpRouteQueryParameterMatch[]{{
                                        add(new HttpRouteQueryParameterMatch() {{
                                            exactMatch = "adipisci";
                                            presentMatch = false;
                                            queryParameter = "asperiores";
                                            regexMatch = "earum";
                                        }}),
                                        add(new HttpRouteQueryParameterMatch() {{
                                            exactMatch = "modi";
                                            presentMatch = false;
                                            queryParameter = "iste";
                                            regexMatch = "dolorum";
                                        }}),
                                        add(new HttpRouteQueryParameterMatch() {{
                                            exactMatch = "deleniti";
                                            presentMatch = false;
                                            queryParameter = "pariatur";
                                            regexMatch = "provident";
                                        }}),
                                    }};
                                    regexMatch = "nobis";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "quos";
                httpRouteId = "aliquid";
                key = "dolorem";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
            }};            

            NetworkservicesProjectsLocationsHttpRoutesCreateResponse res = sdk.projects.networkservicesProjectsLocationsHttpRoutesCreate(req, new NetworkservicesProjectsLocationsHttpRoutesCreateSecurity("hic", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsHttpRoutesList

Lists HttpRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsHttpRoutesListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsHttpRoutesListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsHttpRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsHttpRoutesListRequest req = new NetworkservicesProjectsLocationsHttpRoutesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                pageSize = 58029L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            NetworkservicesProjectsLocationsHttpRoutesListResponse res = sdk.projects.networkservicesProjectsLocationsHttpRoutesList(req, new NetworkservicesProjectsLocationsHttpRoutesListSecurity("accusamus", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listHttpRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsListRequest req = new NetworkservicesProjectsLocationsListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "sit";
                filter = "fugiat";
                key = "ab";
                oauthToken = "soluta";
                pageSize = 679393L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            NetworkservicesProjectsLocationsListResponse res = sdk.projects.networkservicesProjectsLocationsList(req, new NetworkservicesProjectsLocationsListSecurity("omnis", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsMeshesCreate

Creates a new Mesh in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsMeshesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsMeshesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsMeshesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MeshInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsMeshesCreateRequest req = new NetworkservicesProjectsLocationsMeshesCreateRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                meshInput = new MeshInput() {{
                    description = "nihil";
                    interceptionPort = 216897;
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "saepe");
                        put("eius", "aspernatur");
                    }};
                    name = "Wendy Rosenbaum";
                }};;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "provident";
                key = "minima";
                meshId = "repellendus";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "alias";
                uploadProtocol = "at";
            }};            

            NetworkservicesProjectsLocationsMeshesCreateResponse res = sdk.projects.networkservicesProjectsLocationsMeshesCreate(req, new NetworkservicesProjectsLocationsMeshesCreateSecurity("quaerat", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsMeshesList

Lists Meshes in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsMeshesListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsMeshesListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsMeshesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsMeshesListRequest req = new NetworkservicesProjectsLocationsMeshesListRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                pageSize = 483409L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "tenetur";
                uploadProtocol = "amet";
            }};            

            NetworkservicesProjectsLocationsMeshesListResponse res = sdk.projects.networkservicesProjectsLocationsMeshesList(req, new NetworkservicesProjectsLocationsMeshesListSecurity("tempore", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMeshesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsOperationsCancelRequest req = new NetworkservicesProjectsLocationsOperationsCancelRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "totam");
                }};
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "expedita";
                fields = "neque";
                key = "sed";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "voluptas";
                uploadProtocol = "deserunt";
            }};            

            NetworkservicesProjectsLocationsOperationsCancelResponse res = sdk.projects.networkservicesProjectsLocationsOperationsCancel(req, new NetworkservicesProjectsLocationsOperationsCancelSecurity("quam", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsOperationsListRequest req = new NetworkservicesProjectsLocationsOperationsListRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "soluta";
                filter = "dicta";
                key = "laborum";
                oauthToken = "totam";
                pageSize = 276894L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "distinctio";
                uploadProtocol = "facilis";
            }};            

            NetworkservicesProjectsLocationsOperationsListResponse res = sdk.projects.networkservicesProjectsLocationsOperationsList(req, new NetworkservicesProjectsLocationsOperationsListSecurity("aliquid", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsServiceBindingsCreate

Creates a new ServiceBinding in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ServiceBindingInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsServiceBindingsCreateRequest req = new NetworkservicesProjectsLocationsServiceBindingsCreateRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceBindingInput = new ServiceBindingInput() {{
                    description = "qui";
                    labels = new java.util.HashMap<String, String>() {{
                        put("fugit", "magni");
                    }};
                    name = "Ashley Hermiston";
                    service = "voluptatem";
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "et";
                key = "saepe";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "veritatis";
                serviceBindingId = "nobis";
                uploadType = "quos";
                uploadProtocol = "tempore";
            }};            

            NetworkservicesProjectsLocationsServiceBindingsCreateResponse res = sdk.projects.networkservicesProjectsLocationsServiceBindingsCreate(req, new NetworkservicesProjectsLocationsServiceBindingsCreateSecurity("cupiditate", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsServiceBindingsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest req = new NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "dolorum";
                key = "architecto";
                oauthToken = "quae";
                optionsRequestedPolicyVersion = 16429L;
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "itaque";
                uploadProtocol = "consequatur";
            }};            

            NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyResponse res = sdk.projects.networkservicesProjectsLocationsServiceBindingsGetIamPolicy(req, new NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity("est", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsServiceBindingsList

Lists ServiceBinding in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsServiceBindingsListRequest req = new NetworkservicesProjectsLocationsServiceBindingsListRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "qui";
                key = "quae";
                oauthToken = "laudantium";
                pageSize = 485628L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "quisquam";
                uploadProtocol = "vero";
            }};            

            NetworkservicesProjectsLocationsServiceBindingsListResponse res = sdk.projects.networkservicesProjectsLocationsServiceBindingsList(req, new NetworkservicesProjectsLocationsServiceBindingsListSecurity("omnis", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listServiceBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsServiceBindingsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest req = new NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tenetur"),
                                            add("dignissimos"),
                                            add("hic"),
                                            add("distinctio"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "odio";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vero"),
                                            add("ducimus"),
                                            add("dolore"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("natus"),
                                            add("impedit"),
                                            add("aut"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nulla"),
                                            add("fugit"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "maiores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "iusto";
                                    expression = "eligendi";
                                    location = "ducimus";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("tempora"),
                                    add("ipsam"),
                                    add("ea"),
                                }};
                                role = "aspernatur";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "vel";
                                    expression = "possimus";
                                    location = "magnam";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("laudantium"),
                                    add("dicta"),
                                }};
                                role = "dolor";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "maiores";
                                    expression = "quasi";
                                    location = "ex";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("voluptatibus"),
                                    add("nostrum"),
                                    add("sapiente"),
                                }};
                                role = "quisquam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "saepe";
                                    expression = "ea";
                                    location = "impedit";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("aliquid"),
                                    add("inventore"),
                                }};
                                role = "magnam";
                            }}),
                        }};
                        etag = "ea";
                        version = 775220;
                    }};;
                    updateMask = "consectetur";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "eaque";
                key = "a";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "aut";
                uploadProtocol = "deleniti";
            }};            

            NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse res = sdk.projects.networkservicesProjectsLocationsServiceBindingsSetIamPolicy(req, new NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity("impedit", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsServiceBindingsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest req = new NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("non"),
                    }};
                }};;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "placeat";
                key = "velit";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nobis";
                uploadProtocol = "quas";
            }};            

            NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsResponse res = sdk.projects.networkservicesProjectsLocationsServiceBindingsTestIamPermissions(req, new NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity("assumenda", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsTcpRoutesCreate

Creates a new TcpRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTcpRoutesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTcpRoutesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTcpRoutesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TcpRouteInput;
import org.openapis.openapi.models.shared.TcpRouteRouteAction;
import org.openapis.openapi.models.shared.TcpRouteRouteDestination;
import org.openapis.openapi.models.shared.TcpRouteRouteMatch;
import org.openapis.openapi.models.shared.TcpRouteRouteRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTcpRoutesCreateRequest req = new NetworkservicesProjectsLocationsTcpRoutesCreateRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                tcpRouteInput = new TcpRouteInput() {{
                    description = "quasi";
                    gateways = new String[]{{
                        add("numquam"),
                        add("explicabo"),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "molestiae");
                        put("magnam", "odio");
                        put("eius", "esse");
                    }};
                    meshes = new String[]{{
                        add("rem"),
                        add("fuga"),
                    }};
                    name = "Yvette Stehr";
                    rules = new org.openapis.openapi.models.shared.TcpRouteRouteRule[]{{
                        add(new TcpRouteRouteRule() {{
                            action = new TcpRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TcpRouteRouteDestination[]{{
                                    add(new TcpRouteRouteDestination() {{
                                        serviceName = "eos";
                                        weight = 509342;
                                    }}),
                                    add(new TcpRouteRouteDestination() {{
                                        serviceName = "quisquam";
                                        weight = 86377;
                                    }}),
                                    add(new TcpRouteRouteDestination() {{
                                        serviceName = "ipsa";
                                        weight = 660040;
                                    }}),
                                    add(new TcpRouteRouteDestination() {{
                                        serviceName = "quidem";
                                        weight = 206594;
                                    }}),
                                }};
                                originalDestination = false;
                            }};
                            matches = new org.openapis.openapi.models.shared.TcpRouteRouteMatch[]{{
                                add(new TcpRouteRouteMatch() {{
                                    address = "762 Garfield Center";
                                    port = "cupiditate";
                                }}),
                                add(new TcpRouteRouteMatch() {{
                                    address = "28311 Koelpin Via";
                                    port = "aperiam";
                                }}),
                                add(new TcpRouteRouteMatch() {{
                                    address = "740 Josiah Trail";
                                    port = "aliquam";
                                }}),
                                add(new TcpRouteRouteMatch() {{
                                    address = "5491 Krajcik Burg";
                                    port = "porro";
                                }}),
                            }};
                        }}),
                        add(new TcpRouteRouteRule() {{
                            action = new TcpRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TcpRouteRouteDestination[]{{
                                    add(new TcpRouteRouteDestination() {{
                                        serviceName = "quas";
                                        weight = 510017;
                                    }}),
                                    add(new TcpRouteRouteDestination() {{
                                        serviceName = "consequuntur";
                                        weight = 536178;
                                    }}),
                                }};
                                originalDestination = false;
                            }};
                            matches = new org.openapis.openapi.models.shared.TcpRouteRouteMatch[]{{
                                add(new TcpRouteRouteMatch() {{
                                    address = "625 Eric Hollow";
                                    port = "fugit";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "explicabo";
                key = "saepe";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "atque";
                tcpRouteId = "et";
                uploadType = "esse";
                uploadProtocol = "eveniet";
            }};            

            NetworkservicesProjectsLocationsTcpRoutesCreateResponse res = sdk.projects.networkservicesProjectsLocationsTcpRoutesCreate(req, new NetworkservicesProjectsLocationsTcpRoutesCreateSecurity("accusamus", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsTcpRoutesList

Lists TcpRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTcpRoutesListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTcpRoutesListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTcpRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTcpRoutesListRequest req = new NetworkservicesProjectsLocationsTcpRoutesListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "quasi";
                key = "saepe";
                oauthToken = "vel";
                pageSize = 690025L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "occaecati";
                uploadProtocol = "minima";
            }};            

            NetworkservicesProjectsLocationsTcpRoutesListResponse res = sdk.projects.networkservicesProjectsLocationsTcpRoutesList(req, new NetworkservicesProjectsLocationsTcpRoutesListSecurity("distinctio", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTcpRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsTlsRoutesCreate

Creates a new TlsRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesCreateRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesCreateResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TlsRouteInput;
import org.openapis.openapi.models.shared.TlsRouteRouteAction;
import org.openapis.openapi.models.shared.TlsRouteRouteDestination;
import org.openapis.openapi.models.shared.TlsRouteRouteMatch;
import org.openapis.openapi.models.shared.TlsRouteRouteRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTlsRoutesCreateRequest req = new NetworkservicesProjectsLocationsTlsRoutesCreateRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                tlsRouteInput = new TlsRouteInput() {{
                    description = "tempore";
                    gateways = new String[]{{
                        add("cumque"),
                    }};
                    meshes = new String[]{{
                        add("consequatur"),
                    }};
                    name = "Calvin Williamson";
                    rules = new org.openapis.openapi.models.shared.TlsRouteRouteRule[]{{
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "a";
                                        weight = 857723;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "quas";
                                        weight = 457223;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "quasi";
                                        weight = 951875;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("pariatur"),
                                        add("possimus"),
                                        add("quia"),
                                    }};
                                    sniHost = new String[]{{
                                        add("asperiores"),
                                        add("facere"),
                                        add("veritatis"),
                                        add("consequuntur"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("similique"),
                                    }};
                                    sniHost = new String[]{{
                                        add("aliquid"),
                                        add("tenetur"),
                                        add("quae"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("vel"),
                                        add("in"),
                                        add("eius"),
                                        add("libero"),
                                    }};
                                    sniHost = new String[]{{
                                        add("soluta"),
                                        add("accusantium"),
                                        add("aliquam"),
                                        add("sapiente"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "ullam";
                                        weight = 443879;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("aut"),
                                        add("voluptatum"),
                                    }};
                                    sniHost = new String[]{{
                                        add("quibusdam"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("deleniti"),
                                        add("itaque"),
                                    }};
                                    sniHost = new String[]{{
                                        add("architecto"),
                                        add("omnis"),
                                        add("tenetur"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "at";
                                        weight = 92027;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("minima"),
                                    }};
                                    sniHost = new String[]{{
                                        add("consectetur"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("iste"),
                                    }};
                                    sniHost = new String[]{{
                                        add("accusantium"),
                                        add("rem"),
                                        add("aut"),
                                        add("laudantium"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "corrupti";
                key = "non";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "dolor";
                tlsRouteId = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "impedit";
            }};            

            NetworkservicesProjectsLocationsTlsRoutesCreateResponse res = sdk.projects.networkservicesProjectsLocationsTlsRoutesCreate(req, new NetworkservicesProjectsLocationsTlsRoutesCreateSecurity("explicabo", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsTlsRoutesDelete

Deletes a single TlsRoute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesDeleteRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesDeleteResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTlsRoutesDeleteRequest req = new NetworkservicesProjectsLocationsTlsRoutesDeleteRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "velit";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "aperiam";
                uploadProtocol = "ea";
            }};            

            NetworkservicesProjectsLocationsTlsRoutesDeleteResponse res = sdk.projects.networkservicesProjectsLocationsTlsRoutesDelete(req, new NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity("quaerat", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## networkservicesProjectsLocationsTlsRoutesGet

Gets details of a single TlsRoute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesGetRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesGetResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTlsRoutesGetRequest req = new NetworkservicesProjectsLocationsTlsRoutesGetRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "asperiores";
                key = "nemo";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "porro";
                uploadProtocol = "quod";
            }};            

            NetworkservicesProjectsLocationsTlsRoutesGetResponse res = sdk.projects.networkservicesProjectsLocationsTlsRoutesGet(req, new NetworkservicesProjectsLocationsTlsRoutesGetSecurity("labore", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tlsRoute != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsTlsRoutesList

Lists TlsRoute in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesListRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesListResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTlsRoutesListRequest req = new NetworkservicesProjectsLocationsTlsRoutesListRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "culpa";
                key = "est";
                oauthToken = "recusandae";
                pageSize = 517309L;
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "ducimus";
                uploadProtocol = "quos";
            }};            

            NetworkservicesProjectsLocationsTlsRoutesListResponse res = sdk.projects.networkservicesProjectsLocationsTlsRoutesList(req, new NetworkservicesProjectsLocationsTlsRoutesListSecurity("vel", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTlsRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkservicesProjectsLocationsTlsRoutesPatch

Updates the parameters of a single TlsRoute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesPatchRequest;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesPatchResponse;
import org.openapis.openapi.models.operations.NetworkservicesProjectsLocationsTlsRoutesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TlsRouteInput;
import org.openapis.openapi.models.shared.TlsRouteRouteAction;
import org.openapis.openapi.models.shared.TlsRouteRouteDestination;
import org.openapis.openapi.models.shared.TlsRouteRouteMatch;
import org.openapis.openapi.models.shared.TlsRouteRouteRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkservicesProjectsLocationsTlsRoutesPatchRequest req = new NetworkservicesProjectsLocationsTlsRoutesPatchRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                tlsRouteInput = new TlsRouteInput() {{
                    description = "cum";
                    gateways = new String[]{{
                        add("in"),
                        add("corporis"),
                    }};
                    meshes = new String[]{{
                        add("assumenda"),
                        add("nemo"),
                        add("recusandae"),
                        add("aliquid"),
                    }};
                    name = "Karla Feest";
                    rules = new org.openapis.openapi.models.shared.TlsRouteRouteRule[]{{
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "numquam";
                                        weight = 985492;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "suscipit";
                                        weight = 968972;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "quidem";
                                        weight = 904949;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "necessitatibus";
                                        weight = 296556;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("adipisci"),
                                        add("non"),
                                        add("amet"),
                                        add("beatae"),
                                    }};
                                    sniHost = new String[]{{
                                        add("a"),
                                        add("debitis"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "corporis";
                                        weight = 689768;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("voluptates"),
                                    }};
                                    sniHost = new String[]{{
                                        add("vitae"),
                                        add("accusamus"),
                                        add("similique"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("aspernatur"),
                                        add("voluptas"),
                                    }};
                                    sniHost = new String[]{{
                                        add("voluptas"),
                                        add("minima"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "dolorum";
                                        weight = 237807;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "minus";
                                        weight = 171853;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "blanditiis";
                                        weight = 449292;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("officiis"),
                                        add("temporibus"),
                                    }};
                                    sniHost = new String[]{{
                                        add("adipisci"),
                                        add("cum"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("quas"),
                                        add("hic"),
                                        add("nesciunt"),
                                    }};
                                    sniHost = new String[]{{
                                        add("corrupti"),
                                        add("pariatur"),
                                        add("totam"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new TlsRouteRouteRule() {{
                            action = new TlsRouteRouteAction() {{
                                destinations = new org.openapis.openapi.models.shared.TlsRouteRouteDestination[]{{
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "exercitationem";
                                        weight = 750765;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "sit";
                                        weight = 699575;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "sed";
                                        weight = 967966;
                                    }}),
                                    add(new TlsRouteRouteDestination() {{
                                        serviceName = "explicabo";
                                        weight = 994401;
                                    }}),
                                }};
                            }};
                            matches = new org.openapis.openapi.models.shared.TlsRouteRouteMatch[]{{
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("expedita"),
                                        add("ab"),
                                    }};
                                    sniHost = new String[]{{
                                        add("dolore"),
                                        add("laborum"),
                                        add("sed"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("commodi"),
                                        add("quidem"),
                                    }};
                                    sniHost = new String[]{{
                                        add("voluptas"),
                                    }};
                                }}),
                                add(new TlsRouteRouteMatch() {{
                                    alpn = new String[]{{
                                        add("architecto"),
                                        add("suscipit"),
                                        add("sapiente"),
                                    }};
                                    sniHost = new String[]{{
                                        add("illo"),
                                        add("reiciendis"),
                                        add("perferendis"),
                                        add("corrupti"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "provident";
                key = "eius";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "ipsum";
                updateMask = "ea";
                uploadType = "occaecati";
                uploadProtocol = "quos";
            }};            

            NetworkservicesProjectsLocationsTlsRoutesPatchResponse res = sdk.projects.networkservicesProjectsLocationsTlsRoutesPatch(req, new NetworkservicesProjectsLocationsTlsRoutesPatchSecurity("voluptatibus", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
