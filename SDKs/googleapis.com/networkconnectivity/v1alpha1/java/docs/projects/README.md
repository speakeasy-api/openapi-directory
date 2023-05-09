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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                hubInput = new HubInput() {{
                    createTime = "ipsam";
                    description = "repellendus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quo", "odit");
                        put("at", "at");
                        put("maiores", "molestiae");
                        put("quod", "quod");
                    }};
                    name = "Deanna Sauer MD";
                    updateTime = "officia";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "hic";
                hubId = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req, new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity("impedit", "cum") {{
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

            NetworkconnectivityProjectsLocationsGlobalHubsListRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                filter = "natus";
                key = "sed";
                oauthToken = "iste";
                orderBy = "dolor";
                pageSize = 616934L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsListResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsList(req, new NetworkconnectivityProjectsLocationsGlobalHubsListSecurity("in", "corporis") {{
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

            NetworkconnectivityProjectsLocationsInternalRangesCreateRequest req = new NetworkconnectivityProjectsLocationsInternalRangesCreateRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                internalRangeInput = new InternalRangeInput() {{
                    createTime = "saepe";
                    description = "quidem";
                    ipCidrRange = "architecto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("reiciendis", "est");
                    }};
                    name = "Cameron Dach";
                    network = "explicabo";
                    overlaps = new org.openapis.openapi.models.shared.InternalRangeOverlapsEnum[]{{
                        add(InternalRangeOverlapsEnum.OVERLAP_UNSPECIFIED),
                        add(InternalRangeOverlapsEnum.OVERLAP_ROUTE_RANGE),
                        add(InternalRangeOverlapsEnum.OVERLAP_UNSPECIFIED),
                        add(InternalRangeOverlapsEnum.OVERLAP_UNSPECIFIED),
                    }};
                    peering = InternalRangePeeringEnum.FOR_PEER;
                    prefixLength = 38425;
                    targetCidrRange = new String[]{{
                        add("culpa"),
                        add("doloribus"),
                    }};
                    updateTime = "sapiente";
                    usage = InternalRangeUsageEnum.USAGE_UNSPECIFIED;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                internalRangeId = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                requestId = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            NetworkconnectivityProjectsLocationsInternalRangesCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsInternalRangesCreate(req, new NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity("velit", "error") {{
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

            NetworkconnectivityProjectsLocationsInternalRangesListRequest req = new NetworkconnectivityProjectsLocationsInternalRangesListRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "enim";
                filter = "odit";
                key = "quo";
                oauthToken = "sequi";
                orderBy = "tenetur";
                pageSize = 368725L;
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aut";
                uploadProtocol = "quasi";
            }};            

            NetworkconnectivityProjectsLocationsInternalRangesListResponse res = sdk.projects.networkconnectivityProjectsLocationsInternalRangesList(req, new NetworkconnectivityProjectsLocationsInternalRangesListSecurity("error", "temporibus") {{
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

            NetworkconnectivityProjectsLocationsListRequest req = new NetworkconnectivityProjectsLocationsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                filter = "praesentium";
                key = "voluptatibus";
                oauthToken = "ipsa";
                pageSize = 604846L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "perferendis";
                uploadProtocol = "doloremque";
            }};            

            NetworkconnectivityProjectsLocationsListResponse res = sdk.projects.networkconnectivityProjectsLocationsList(req, new NetworkconnectivityProjectsLocationsListSecurity("reprehenderit", "ut") {{
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

            NetworkconnectivityProjectsLocationsOperationsCancelRequest req = new NetworkconnectivityProjectsLocationsOperationsCancelRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolore", "iusto");
                    put("dicta", "harum");
                }};
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
            }};            

            NetworkconnectivityProjectsLocationsOperationsCancelResponse res = sdk.projects.networkconnectivityProjectsLocationsOperationsCancel(req, new NetworkconnectivityProjectsLocationsOperationsCancelSecurity("pariatur", "modi") {{
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

            NetworkconnectivityProjectsLocationsOperationsListRequest req = new NetworkconnectivityProjectsLocationsOperationsListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "sint";
                filter = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                pageSize = 318569L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            NetworkconnectivityProjectsLocationsOperationsListResponse res = sdk.projects.networkconnectivityProjectsLocationsOperationsList(req, new NetworkconnectivityProjectsLocationsOperationsListSecurity("deserunt", "distinctio") {{
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
import org.openapis.openapi.models.shared.RouterApplianceInstance;
import org.openapis.openapi.models.shared.SpokeInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesCreateRequest req = new NetworkconnectivityProjectsLocationsSpokesCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                spokeInput = new SpokeInput() {{
                    createTime = "modi";
                    description = "qui";
                    hub = "aliquid";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quos", "perferendis");
                        put("magni", "assumenda");
                        put("ipsam", "alias");
                    }};
                    linkedInterconnectAttachments = new String[]{{
                        add("dolorum"),
                    }};
                    linkedRouterApplianceInstances = new org.openapis.openapi.models.shared.RouterApplianceInstance[]{{
                        add(new RouterApplianceInstance() {{
                            ipAddress = "tempora";
                            networkInterface = "facilis";
                            virtualMachine = "tempore";
                        }}),
                        add(new RouterApplianceInstance() {{
                            ipAddress = "labore";
                            networkInterface = "delectus";
                            virtualMachine = "eum";
                        }}),
                        add(new RouterApplianceInstance() {{
                            ipAddress = "non";
                            networkInterface = "eligendi";
                            virtualMachine = "sint";
                        }}),
                    }};
                    linkedVpnTunnels = new String[]{{
                        add("provident"),
                        add("necessitatibus"),
                    }};
                    name = "Luke Fadel";
                    updateTime = "dolorum";
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                requestId = "cumque";
                spokeId = "facere";
                uploadType = "ea";
                uploadProtocol = "aliquid";
            }};            

            NetworkconnectivityProjectsLocationsSpokesCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesCreate(req, new NetworkconnectivityProjectsLocationsSpokesCreateSecurity("laborum", "accusamus") {{
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

            NetworkconnectivityProjectsLocationsSpokesDeleteRequest req = new NetworkconnectivityProjectsLocationsSpokesDeleteRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quidem";
                key = "provident";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "blanditiis";
                uploadType = "deleniti";
                uploadProtocol = "sapiente";
            }};            

            NetworkconnectivityProjectsLocationsSpokesDeleteResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesDelete(req, new NetworkconnectivityProjectsLocationsSpokesDeleteSecurity("amet", "deserunt") {{
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

            NetworkconnectivityProjectsLocationsSpokesGetRequest req = new NetworkconnectivityProjectsLocationsSpokesGetRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "perferendis";
                key = "nihil";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "id";
                uploadProtocol = "labore";
            }};            

            NetworkconnectivityProjectsLocationsSpokesGetResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesGet(req, new NetworkconnectivityProjectsLocationsSpokesGetSecurity("labore", "suscipit") {{
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

            NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest req = new NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                optionsRequestedPolicyVersion = 569965L;
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "provident";
                uploadProtocol = "quos";
            }};            

            NetworkconnectivityProjectsLocationsSpokesGetIamPolicyResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesGetIamPolicy(req, new NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity("sint", "accusantium") {{
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

            NetworkconnectivityProjectsLocationsSpokesListRequest req = new NetworkconnectivityProjectsLocationsSpokesListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "dolor";
                filter = "necessitatibus";
                key = "odit";
                oauthToken = "nemo";
                orderBy = "quasi";
                pageSize = 435865L;
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "eius";
                uploadProtocol = "maxime";
            }};            

            NetworkconnectivityProjectsLocationsSpokesListResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesList(req, new NetworkconnectivityProjectsLocationsSpokesListSecurity("deleniti", "facilis") {{
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
import org.openapis.openapi.models.shared.RouterApplianceInstance;
import org.openapis.openapi.models.shared.SpokeInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsSpokesPatchRequest req = new NetworkconnectivityProjectsLocationsSpokesPatchRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                spokeInput = new SpokeInput() {{
                    createTime = "architecto";
                    description = "repudiandae";
                    hub = "ullam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nihil", "repellat");
                        put("quibusdam", "sed");
                        put("saepe", "pariatur");
                    }};
                    linkedInterconnectAttachments = new String[]{{
                        add("consequuntur"),
                    }};
                    linkedRouterApplianceInstances = new org.openapis.openapi.models.shared.RouterApplianceInstance[]{{
                        add(new RouterApplianceInstance() {{
                            ipAddress = "natus";
                            networkInterface = "magni";
                            virtualMachine = "sunt";
                        }}),
                        add(new RouterApplianceInstance() {{
                            ipAddress = "quo";
                            networkInterface = "illum";
                            virtualMachine = "pariatur";
                        }}),
                        add(new RouterApplianceInstance() {{
                            ipAddress = "maxime";
                            networkInterface = "ea";
                            virtualMachine = "excepturi";
                        }}),
                    }};
                    linkedVpnTunnels = new String[]{{
                        add("ea"),
                    }};
                    name = "Virginia Wunsch";
                    updateTime = "voluptate";
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "pariatur";
                key = "nemo";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "fugiat";
                updateMask = "amet";
                uploadType = "aut";
                uploadProtocol = "cumque";
            }};            

            NetworkconnectivityProjectsLocationsSpokesPatchResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesPatch(req, new NetworkconnectivityProjectsLocationsSpokesPatchSecurity("corporis", "hic") {{
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

            NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest req = new NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dignissimos"),
                                            add("eaque"),
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
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolor";
                                    expression = "vero";
                                    location = "nostrum";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("omnis"),
                                    add("facilis"),
                                    add("perspiciatis"),
                                    add("voluptatem"),
                                }};
                                role = "porro";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "consequuntur";
                                    expression = "blanditiis";
                                    location = "error";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("rerum"),
                                    add("adipisci"),
                                    add("asperiores"),
                                }};
                                role = "earum";
                            }}),
                        }};
                        etag = "modi";
                        version = 613966;
                    }};;
                    updateMask = "dolorum";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nobis";
                key = "libero";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "quos";
                uploadProtocol = "aliquid";
            }};            

            NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesSetIamPolicy(req, new NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity("dolorem", "dolorem") {{
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

            NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest req = new NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("hic"),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "dignissimos";
                key = "reiciendis";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "numquam";
                uploadProtocol = "veritatis";
            }};            

            NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse res = sdk.projects.networkconnectivityProjectsLocationsSpokesTestIamPermissions(req, new NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity("ipsa", "ipsa") {{
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
