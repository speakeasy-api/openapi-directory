# projects

### Available Operations

* [tpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesReimage](#tpuprojectslocationsnodesreimage) - Reimages a node's OS.
* [tpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsDelete](#tpuprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [tpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsTensorflowVersionsGet](#tpuprojectslocationstensorflowversionsget) - Gets TensorFlow Version.
* [tpuProjectsLocationsTensorflowVersionsList](#tpuprojectslocationstensorflowversionslist) - Lists TensorFlow versions supported by this API.

## tpuProjectsLocationsAcceleratorTypesList

Lists accelerator types supported by this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsAcceleratorTypesListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsAcceleratorTypesListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsAcceleratorTypesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsAcceleratorTypesListRequest req = new TpuProjectsLocationsAcceleratorTypesListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                filter = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                orderBy = "recusandae";
                pageSize = 836079L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            TpuProjectsLocationsAcceleratorTypesListResponse res = sdk.projects.tpuProjectsLocationsAcceleratorTypesList(req, new TpuProjectsLocationsAcceleratorTypesListSecurity("perferendis", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAcceleratorTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tpuProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsListRequest req = new TpuProjectsLocationsListRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                filter = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                pageSize = 800911L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
            }};            

            TpuProjectsLocationsListResponse res = sdk.projects.tpuProjectsLocationsList(req, new TpuProjectsLocationsListSecurity("dicta", "nam") {{
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

## tpuProjectsLocationsNodesCreate

Creates a node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesCreateRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesCreateResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeHealthEnum;
import org.openapis.openapi.models.shared.NodeInput;
import org.openapis.openapi.models.shared.SchedulingConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesCreateRequest req = new TpuProjectsLocationsNodesCreateRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeInput = new NodeInput() {{
                    acceleratorType = "fugit";
                    cidrBlock = "deleniti";
                    description = "hic";
                    health = NodeHealthEnum.UNHEALTHY_TENSORFLOW;
                    ipAddress = "totam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("commodi", "molestiae");
                    }};
                    network = "modi";
                    port = "qui";
                    schedulingConfig = new SchedulingConfig() {{
                        preemptible = false;
                        reserved = false;
                    }};;
                    tensorflowVersion = "impedit";
                    useServiceNetworking = false;
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                nodeId = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            TpuProjectsLocationsNodesCreateResponse res = sdk.projects.tpuProjectsLocationsNodesCreate(req, new TpuProjectsLocationsNodesCreateSecurity("natus", "laboriosam") {{
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

## tpuProjectsLocationsNodesList

Lists nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesListRequest req = new TpuProjectsLocationsNodesListRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                pageSize = 697631L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            TpuProjectsLocationsNodesListResponse res = sdk.projects.tpuProjectsLocationsNodesList(req, new TpuProjectsLocationsNodesListSecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNodesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tpuProjectsLocationsNodesReimage

Reimages a node's OS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesReimageRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesReimageResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesReimageSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReimageNodeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesReimageRequest req = new TpuProjectsLocationsNodesReimageRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                reimageNodeRequest = new ReimageNodeRequest() {{
                    tensorflowVersion = "corporis";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            TpuProjectsLocationsNodesReimageResponse res = sdk.projects.tpuProjectsLocationsNodesReimage(req, new TpuProjectsLocationsNodesReimageSecurity("culpa", "doloribus") {{
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

## tpuProjectsLocationsNodesStart

Starts a node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesStartRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesStartResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesStartRequest req = new TpuProjectsLocationsNodesStartRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolorem", "culpa");
                    put("consequuntur", "repellat");
                    put("mollitia", "occaecati");
                }};
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestiae";
                key = "velit";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            TpuProjectsLocationsNodesStartResponse res = sdk.projects.tpuProjectsLocationsNodesStart(req, new TpuProjectsLocationsNodesStartSecurity("laborum", "animi") {{
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

## tpuProjectsLocationsNodesStop

Stops a node. This operation is only available with single TPU nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesStopRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesStopResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesStopRequest req = new TpuProjectsLocationsNodesStopRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sequi", "tenetur");
                    put("ipsam", "id");
                    put("possimus", "aut");
                    put("quasi", "error");
                }};
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            TpuProjectsLocationsNodesStopResponse res = sdk.projects.tpuProjectsLocationsNodesStop(req, new TpuProjectsLocationsNodesStopSecurity("ipsa", "omnis") {{
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

## tpuProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsOperationsCancelRequest req = new TpuProjectsLocationsOperationsCancelRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "reprehenderit";
                fields = "ut";
                key = "maiores";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "dolore";
                uploadProtocol = "iusto";
            }};            

            TpuProjectsLocationsOperationsCancelResponse res = sdk.projects.tpuProjectsLocationsOperationsCancel(req, new TpuProjectsLocationsOperationsCancelSecurity("dicta", "harum") {{
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

## tpuProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsOperationsDeleteRequest req = new TpuProjectsLocationsOperationsDeleteRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "pariatur";
                uploadType = "modi";
                uploadProtocol = "praesentium";
            }};            

            TpuProjectsLocationsOperationsDeleteResponse res = sdk.projects.tpuProjectsLocationsOperationsDelete(req, new TpuProjectsLocationsOperationsDeleteSecurity("rem", "voluptates") {{
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

## tpuProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsOperationsListRequest req = new TpuProjectsLocationsOperationsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                filter = "enim";
                key = "consequatur";
                oauthToken = "est";
                pageSize = 842342L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            TpuProjectsLocationsOperationsListResponse res = sdk.projects.tpuProjectsLocationsOperationsList(req, new TpuProjectsLocationsOperationsListSecurity("labore", "modi") {{
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

## tpuProjectsLocationsTensorflowVersionsGet

Gets TensorFlow Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsTensorflowVersionsGetRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsTensorflowVersionsGetResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsTensorflowVersionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsTensorflowVersionsGetRequest req = new TpuProjectsLocationsTensorflowVersionsGetRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "magni";
                key = "assumenda";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
            }};            

            TpuProjectsLocationsTensorflowVersionsGetResponse res = sdk.projects.tpuProjectsLocationsTensorflowVersionsGet(req, new TpuProjectsLocationsTensorflowVersionsGetSecurity("excepturi", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tensorFlowVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tpuProjectsLocationsTensorflowVersionsList

Lists TensorFlow versions supported by this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsTensorflowVersionsListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsTensorflowVersionsListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsTensorflowVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsTensorflowVersionsListRequest req = new TpuProjectsLocationsTensorflowVersionsListRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                filter = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                orderBy = "provident";
                pageSize = 896039L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            TpuProjectsLocationsTensorflowVersionsListResponse res = sdk.projects.tpuProjectsLocationsTensorflowVersionsList(req, new TpuProjectsLocationsTensorflowVersionsListSecurity("a", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTensorFlowVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
