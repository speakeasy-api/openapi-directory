# projects

### Available Operations

* [networkconnectivityProjectsLocationsGlobalHubsCreate](#networkconnectivityprojectslocationsglobalhubscreate) - Creates a new Network Connectivity Center hub in the specified project.
* [networkconnectivityProjectsLocationsGlobalHubsList](#networkconnectivityprojectslocationsglobalhubslist) - Lists the Network Connectivity Center hubs associated with a given project.
* [networkconnectivityProjectsLocationsInternalRangesCreate](#networkconnectivityprojectslocationsinternalrangescreate) - Creates a new internal range in a given project and location.
* [networkconnectivityProjectsLocationsInternalRangesList](#networkconnectivityprojectslocationsinternalrangeslist) - Lists internal ranges in a given project and location.
* [networkconnectivityProjectsLocationsList](#networkconnectivityprojectslocationslist) - Lists information about the supported locations for this service.
* [networkconnectivityProjectsLocationsOperationsCancel](#networkconnectivityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkconnectivityProjectsLocationsOperationsList](#networkconnectivityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkconnectivityProjectsLocationsSpokesCreate](#networkconnectivityprojectslocationsspokescreate) - Creates a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesDelete](#networkconnectivityprojectslocationsspokesdelete) - Deletes a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesGet](#networkconnectivityprojectslocationsspokesget) - Gets details about a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesGetIamPolicy](#networkconnectivityprojectslocationsspokesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkconnectivityProjectsLocationsSpokesList](#networkconnectivityprojectslocationsspokeslist) - Lists the Network Connectivity Center spokes in a specified project and location.
* [networkconnectivityProjectsLocationsSpokesPatch](#networkconnectivityprojectslocationsspokespatch) - Updates the parameters of a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesSetIamPolicy](#networkconnectivityprojectslocationsspokessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkconnectivityProjectsLocationsSpokesTestIamPermissions](#networkconnectivityprojectslocationsspokestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## networkconnectivityProjectsLocationsGlobalHubsCreate

Creates a new Network Connectivity Center hub in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HubInput;
import org.openapis.openapi.models.shared.RoutingVPCInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                hubInput = new HubInput() {{
                    description = "quod";
                    labels = new java.util.HashMap<String, String>() {{
                        put("esse", "totam");
                        put("porro", "dolorum");
                        put("dicta", "nam");
                        put("officia", "occaecati");
                    }};
                    name = "Cassandra Welch";
                    routingVpcs = new org.openapis.openapi.models.shared.RoutingVPCInput[]{{
                        add(new RoutingVPCInput() {{
                            uri = "http://kosher-dipstick.biz";
                        }}),
                    }};
                }};;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                hubId = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req, new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsGlobalHubsList

Lists the Network Connectivity Center hubs associated with a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsListRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsListResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsListRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                filter = "iste";
                key = "iure";
                oauthToken = "saepe";
                orderBy = "quidem";
                pageSize = 99280L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "est";
                uploadProtocol = "mollitia";
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsListResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsList(req, new NetworkconnectivityProjectsLocationsGlobalHubsListSecurity("laborum", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listHubsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsInternalRangesCreate

Creates a new internal range in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsInternalRangesCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsInternalRangesCreateResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InternalRangeInput;
import org.openapis.openapi.models.shared.InternalRangeOverlapsEnum;
import org.openapis.openapi.models.shared.InternalRangePeeringEnum;
import org.openapis.openapi.models.shared.InternalRangeUsageEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsInternalRangesCreateRequest req = new NetworkconnectivityProjectsLocationsInternalRangesCreateRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                internalRangeInput = new InternalRangeInput() {{
                    createTime = "explicabo";
                    description = "nobis";
                    ipCidrRange = "enim";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nemo", "minima");
                        put("excepturi", "accusantium");
                        put("iure", "culpa");
                    }};
                    name = "Darrin Brakus";
                    network = "culpa";
                    overlaps = new org.openapis.openapi.models.shared.InternalRangeOverlapsEnum[]{{
                        add(InternalRangeOverlapsEnum.OVERLAP_ROUTE_RANGE),
                    }};
                    peering = InternalRangePeeringEnum.FOR_PEER;
                    prefixLength = 581850;
                    targetCidrRange = new String[]{{
                        add("commodi"),
                        add("quam"),
                    }};
                    updateTime = "molestiae";
                    usage = InternalRangeUsageEnum.USAGE_UNSPECIFIED;
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                internalRangeId = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            NetworkconnectivityProjectsLocationsInternalRangesCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsInternalRangesCreate(req, new NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity("ipsam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsInternalRangesList

Lists internal ranges in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsInternalRangesListRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsInternalRangesListResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsInternalRangesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsInternalRangesListRequest req = new NetworkconnectivityProjectsLocationsInternalRangesListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                filter = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                orderBy = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            NetworkconnectivityProjectsLocationsInternalRangesListResponse res = sdk.projects.networkconnectivityProjectsLocationsInternalRangesList(req, new NetworkconnectivityProjectsLocationsInternalRangesListSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInternalRangesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsListRequest req = new NetworkconnectivityProjectsLocationsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                filter = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                pageSize = 118727L;
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
            }};            

            NetworkconnectivityProjectsLocationsListResponse res = sdk.projects.networkconnectivityProjectsLocationsList(req, new NetworkconnectivityProjectsLocationsListSecurity("repudiandae", "quae") {{
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

## networkconnectivityProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsOperationsCancelRequest req = new NetworkconnectivityProjectsLocationsOperationsCancelRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("excepturi", "pariatur");
                    put("modi", "praesentium");
                    put("rem", "voluptates");
                }};
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            NetworkconnectivityProjectsLocationsOperationsCancelResponse res = sdk.projects.networkconnectivityProjectsLocationsOperationsCancel(req, new NetworkconnectivityProjectsLocationsOperationsCancelSecurity("quibusdam", "explicabo") {{
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

## networkconnectivityProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsOperationsListRequest req = new NetworkconnectivityProjectsLocationsOperationsListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                filter = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                pageSize = 20107L;
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            NetworkconnectivityProjectsLocationsOperationsListResponse res = sdk.projects.networkconnectivityProjectsLocationsOperationsList(req, new NetworkconnectivityProjectsLocationsOperationsListSecurity("fugit", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsSpokesCreate

Creates a Network Connectivity Center spoke.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesCreateResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LinkedInterconnectAttachmentsInput;
import org.openapis.openapi.models.shared.LinkedRouterApplianceInstancesInput;
import org.openapis.openapi.models.shared.LinkedVpnTunnelsInput;
import org.openapis.openapi.models.shared.RouterApplianceInstance;
import org.openapis.openapi.models.shared.SpokeInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesCreateRequest req = new NetworkconnectivityProjectsLocationsSpokesCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                spokeInput = new SpokeInput() {{
                    description = "facilis";
                    hub = "tempore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "eum");
                        put("non", "eligendi");
                    }};
                    linkedInterconnectAttachments = new LinkedInterconnectAttachmentsInput() {{
                        siteToSiteDataTransfer = false;
                        uris = new String[]{{
                            add("aliquid"),
                            add("provident"),
                            add("necessitatibus"),
                        }};
                    }};;
                    linkedRouterApplianceInstances = new LinkedRouterApplianceInstancesInput() {{
                        instances = new org.openapis.openapi.models.shared.RouterApplianceInstance[]{{
                            add(new RouterApplianceInstance() {{
                                ipAddress = "officia";
                                virtualMachine = "dolor";
                            }}),
                            add(new RouterApplianceInstance() {{
                                ipAddress = "debitis";
                                virtualMachine = "a";
                            }}),
                            add(new RouterApplianceInstance() {{
                                ipAddress = "dolorum";
                                virtualMachine = "in";
                            }}),
                        }};
                        siteToSiteDataTransfer = false;
                    }};;
                    linkedVpnTunnels = new LinkedVpnTunnelsInput() {{
                        siteToSiteDataTransfer = false;
                        uris = new String[]{{
                            add("illum"),
                            add("maiores"),
                        }};
                    }};;
                    name = "Keith Gulgowski";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                key = "non";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "accusamus";
                spokeId = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            NetworkconnectivityProjectsLocationsSpokesCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesCreate(req, new NetworkconnectivityProjectsLocationsSpokesCreateSecurity("nam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsSpokesDelete

Deletes a Network Connectivity Center spoke.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesDeleteRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesDeleteResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesDeleteRequest req = new NetworkconnectivityProjectsLocationsSpokesDeleteRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "nisi";
                key = "vel";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                requestId = "molestiae";
                uploadType = "perferendis";
                uploadProtocol = "nihil";
            }};            

            NetworkconnectivityProjectsLocationsSpokesDeleteResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesDelete(req, new NetworkconnectivityProjectsLocationsSpokesDeleteSecurity("magnam", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsSpokesGet

Gets details about a Network Connectivity Center spoke.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesGetRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesGetResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesGetRequest req = new NetworkconnectivityProjectsLocationsSpokesGetRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nobis";
                key = "eum";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "architecto";
                uploadProtocol = "magnam";
            }};            

            NetworkconnectivityProjectsLocationsSpokesGetResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesGet(req, new NetworkconnectivityProjectsLocationsSpokesGetSecurity("et", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spoke != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsSpokesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest req = new NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                optionsRequestedPolicyVersion = 320997L;
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            NetworkconnectivityProjectsLocationsSpokesGetIamPolicyResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesGetIamPolicy(req, new NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity("odit", "nemo") {{
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

## networkconnectivityProjectsLocationsSpokesList

Lists the Network Connectivity Center spokes in a specified project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesListRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesListResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesListRequest req = new NetworkconnectivityProjectsLocationsSpokesListRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                filter = "deleniti";
                key = "facilis";
                oauthToken = "in";
                orderBy = "architecto";
                pageSize = 99569L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            NetworkconnectivityProjectsLocationsSpokesListResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesList(req, new NetworkconnectivityProjectsLocationsSpokesListSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSpokesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsSpokesPatch

Updates the parameters of a Network Connectivity Center spoke.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesPatchRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesPatchResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LinkedInterconnectAttachmentsInput;
import org.openapis.openapi.models.shared.LinkedRouterApplianceInstancesInput;
import org.openapis.openapi.models.shared.LinkedVpnTunnelsInput;
import org.openapis.openapi.models.shared.RouterApplianceInstance;
import org.openapis.openapi.models.shared.SpokeInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesPatchRequest req = new NetworkconnectivityProjectsLocationsSpokesPatchRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                spokeInput = new SpokeInput() {{
                    description = "pariatur";
                    hub = "accusantium";
                    labels = new java.util.HashMap<String, String>() {{
                        put("praesentium", "natus");
                    }};
                    linkedInterconnectAttachments = new LinkedInterconnectAttachmentsInput() {{
                        siteToSiteDataTransfer = false;
                        uris = new String[]{{
                            add("sunt"),
                        }};
                    }};;
                    linkedRouterApplianceInstances = new LinkedRouterApplianceInstancesInput() {{
                        instances = new org.openapis.openapi.models.shared.RouterApplianceInstance[]{{
                            add(new RouterApplianceInstance() {{
                                ipAddress = "illum";
                                virtualMachine = "pariatur";
                            }}),
                            add(new RouterApplianceInstance() {{
                                ipAddress = "maxime";
                                virtualMachine = "ea";
                            }}),
                            add(new RouterApplianceInstance() {{
                                ipAddress = "excepturi";
                                virtualMachine = "odit";
                            }}),
                            add(new RouterApplianceInstance() {{
                                ipAddress = "ea";
                                virtualMachine = "accusantium";
                            }}),
                        }};
                        siteToSiteDataTransfer = false;
                    }};;
                    linkedVpnTunnels = new LinkedVpnTunnelsInput() {{
                        siteToSiteDataTransfer = false;
                        uris = new String[]{{
                            add("maiores"),
                        }};
                    }};;
                    name = "Clyde Kling";
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "aut";
                updateMask = "cumque";
                uploadType = "corporis";
                uploadProtocol = "hic";
            }};            

            NetworkconnectivityProjectsLocationsSpokesPatchResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesPatch(req, new NetworkconnectivityProjectsLocationsSpokesPatchSecurity("libero", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkconnectivityProjectsLocationsSpokesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity;
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

            NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest req = new NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("perferendis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "minus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                            add("omnis"),
                                            add("facilis"),
                                            add("perspiciatis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "porro";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                            add("eaque"),
                                            add("occaecati"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "adipisci";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "earum";
                                    expression = "modi";
                                    location = "iste";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("pariatur"),
                                    add("provident"),
                                    add("nobis"),
                                }};
                                role = "libero";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "delectus";
                                    expression = "quaerat";
                                    location = "quos";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("dolorem"),
                                }};
                                role = "dolor";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "qui";
                                    expression = "ipsum";
                                    location = "hic";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("voluptate"),
                                    add("dignissimos"),
                                    add("reiciendis"),
                                }};
                                role = "amet";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "numquam";
                                    location = "veritatis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("iure"),
                                }};
                                role = "odio";
                            }}),
                        }};
                        etag = "quaerat";
                        version = 881005;
                    }};;
                    updateMask = "quidem";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "eos";
                key = "atque";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ab";
                uploadProtocol = "soluta";
            }};            

            NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesSetIamPolicy(req, new NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity("dolorum", "iusto") {{
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

## networkconnectivityProjectsLocationsSpokesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest req = new NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("omnis"),
                        add("necessitatibus"),
                        add("distinctio"),
                    }};
                }};;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "voluptate";
                key = "id";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesTestIamPermissions(req, new NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity("amet", "optio") {{
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
