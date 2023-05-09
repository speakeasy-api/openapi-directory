# projects

### Available Operations

* [tpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsGenerateServiceIdentity](#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [tpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesGetGuestAttributes](#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [tpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesPatch](#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [tpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsDelete](#tpuprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [tpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsRuntimeVersionsGet](#tpuprojectslocationsruntimeversionsget) - Gets a runtime version.
* [tpuProjectsLocationsRuntimeVersionsList](#tpuprojectslocationsruntimeversionslist) - Lists runtime versions supported by this API.

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

## tpuProjectsLocationsGenerateServiceIdentity

Generates the Cloud TPU service identity for the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsGenerateServiceIdentityRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsGenerateServiceIdentityResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsGenerateServiceIdentitySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsGenerateServiceIdentityRequest req = new TpuProjectsLocationsGenerateServiceIdentityRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                    put("quod", "esse");
                }};
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            TpuProjectsLocationsGenerateServiceIdentityResponse res = sdk.projects.tpuProjectsLocationsGenerateServiceIdentity(req, new TpuProjectsLocationsGenerateServiceIdentitySecurity("hic", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateServiceIdentityResponse != null) {
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

            TpuProjectsLocationsListRequest req = new TpuProjectsLocationsListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                filter = "impedit";
                key = "cum";
                oauthToken = "esse";
                pageSize = 216550L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            TpuProjectsLocationsListResponse res = sdk.projects.tpuProjectsLocationsList(req, new TpuProjectsLocationsListSecurity("natus", "sed") {{
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
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.AttachedDiskModeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.NodeHealthEnum;
import org.openapis.openapi.models.shared.NodeInput;
import org.openapis.openapi.models.shared.SchedulingConfig;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesCreateRequest req = new TpuProjectsLocationsNodesCreateRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeInput = new NodeInput() {{
                    acceleratorConfig = new AcceleratorConfig() {{
                        topology = "natus";
                        type = AcceleratorConfigTypeEnum.V2;
                    }};;
                    acceleratorType = "hic";
                    cidrBlock = "saepe";
                    dataDisks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            sourceDisk = "corporis";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            sourceDisk = "iure";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            sourceDisk = "quidem";
                        }}),
                    }};
                    description = "architecto";
                    health = NodeHealthEnum.HEALTH_UNSPECIFIED;
                    labels = new java.util.HashMap<String, String>() {{
                        put("est", "mollitia");
                        put("laborum", "dolores");
                        put("dolorem", "corporis");
                        put("explicabo", "nobis");
                    }};
                    metadata = new java.util.HashMap<String, String>() {{
                        put("omnis", "nemo");
                        put("minima", "excepturi");
                    }};
                    networkConfig = new NetworkConfig() {{
                        canIpForward = false;
                        enableExternalIps = false;
                        network = "accusantium";
                        subnetwork = "iure";
                    }};;
                    runtimeVersion = "culpa";
                    schedulingConfig = new SchedulingConfig() {{
                        preemptible = false;
                        reserved = false;
                    }};;
                    serviceAccount = new ServiceAccount() {{
                        email = "Veronica.Brakus@hotmail.com";
                        scope = new String[]{{
                            add("consequuntur"),
                            add("repellat"),
                            add("mollitia"),
                        }};
                    }};;
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableSecureBoot = false;
                    }};;
                    tags = new String[]{{
                        add("numquam"),
                        add("commodi"),
                        add("quam"),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                nodeId = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            TpuProjectsLocationsNodesCreateResponse res = sdk.projects.tpuProjectsLocationsNodesCreate(req, new TpuProjectsLocationsNodesCreateSecurity("quo", "sequi") {{
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

## tpuProjectsLocationsNodesGetGuestAttributes

Retrieves the guest attributes for the node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesGetGuestAttributesRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesGetGuestAttributesResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesGetGuestAttributesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetGuestAttributesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesGetGuestAttributesRequest req = new TpuProjectsLocationsNodesGetGuestAttributesRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                getGuestAttributesRequest = new GetGuestAttributesRequest() {{
                    queryPath = "id";
                    workerIds = new String[]{{
                        add("aut"),
                        add("quasi"),
                        add("error"),
                        add("temporibus"),
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            TpuProjectsLocationsNodesGetGuestAttributesResponse res = sdk.projects.tpuProjectsLocationsNodesGetGuestAttributes(req, new TpuProjectsLocationsNodesGetGuestAttributesSecurity("omnis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getGuestAttributesResponse != null) {
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

            TpuProjectsLocationsNodesListRequest req = new TpuProjectsLocationsNodesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                pageSize = 296140L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            TpuProjectsLocationsNodesListResponse res = sdk.projects.tpuProjectsLocationsNodesList(req, new TpuProjectsLocationsNodesListSecurity("accusamus", "commodi") {{
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

## tpuProjectsLocationsNodesPatch

Updates the configurations of a node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesPatchRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesPatchResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesPatchSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.AttachedDiskModeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.NodeHealthEnum;
import org.openapis.openapi.models.shared.NodeInput;
import org.openapis.openapi.models.shared.SchedulingConfig;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesPatchRequest req = new TpuProjectsLocationsNodesPatchRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeInput = new NodeInput() {{
                    acceleratorConfig = new AcceleratorConfig() {{
                        topology = "ipsum";
                        type = AcceleratorConfigTypeEnum.V3;
                    }};;
                    acceleratorType = "molestias";
                    cidrBlock = "excepturi";
                    dataDisks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.DISK_MODE_UNSPECIFIED;
                            sourceDisk = "praesentium";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            sourceDisk = "voluptates";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.DISK_MODE_UNSPECIFIED;
                            sourceDisk = "repudiandae";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            sourceDisk = "veritatis";
                        }}),
                    }};
                    description = "itaque";
                    health = NodeHealthEnum.HEALTHY;
                    labels = new java.util.HashMap<String, String>() {{
                        put("consequatur", "est");
                        put("quibusdam", "explicabo");
                    }};
                    metadata = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("labore", "modi");
                        put("qui", "aliquid");
                    }};
                    networkConfig = new NetworkConfig() {{
                        canIpForward = false;
                        enableExternalIps = false;
                        network = "cupiditate";
                        subnetwork = "quos";
                    }};;
                    runtimeVersion = "perferendis";
                    schedulingConfig = new SchedulingConfig() {{
                        preemptible = false;
                        reserved = false;
                    }};;
                    serviceAccount = new ServiceAccount() {{
                        email = "Rhoda14@gmail.com";
                        scope = new String[]{{
                            add("excepturi"),
                            add("tempora"),
                            add("facilis"),
                        }};
                    }};;
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableSecureBoot = false;
                    }};;
                    tags = new String[]{{
                        add("labore"),
                        add("delectus"),
                        add("eum"),
                    }};
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "aliquid";
                key = "provident";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sint";
                updateMask = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            TpuProjectsLocationsNodesPatchResponse res = sdk.projects.tpuProjectsLocationsNodesPatch(req, new TpuProjectsLocationsNodesPatchSecurity("a", "dolorum") {{
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

            TpuProjectsLocationsNodesStartRequest req = new TpuProjectsLocationsNodesStartRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("maiores", "rerum");
                    put("dicta", "magnam");
                    put("cumque", "facere");
                    put("ea", "aliquid");
                }};
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            TpuProjectsLocationsNodesStartResponse res = sdk.projects.tpuProjectsLocationsNodesStart(req, new TpuProjectsLocationsNodesStartSecurity("nam", "id") {{
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

            TpuProjectsLocationsNodesStopRequest req = new TpuProjectsLocationsNodesStopRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("amet", "deserunt");
                    put("nisi", "vel");
                    put("natus", "omnis");
                    put("molestiae", "perferendis");
                }};
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "labore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
            }};            

            TpuProjectsLocationsNodesStopResponse res = sdk.projects.tpuProjectsLocationsNodesStop(req, new TpuProjectsLocationsNodesStopSecurity("eum", "vero") {{
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

            TpuProjectsLocationsOperationsCancelRequest req = new TpuProjectsLocationsOperationsCancelRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusantium";
                uploadProtocol = "mollitia";
            }};            

            TpuProjectsLocationsOperationsCancelResponse res = sdk.projects.tpuProjectsLocationsOperationsCancel(req, new TpuProjectsLocationsOperationsCancelSecurity("reiciendis", "mollitia") {{
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

            TpuProjectsLocationsOperationsDeleteRequest req = new TpuProjectsLocationsOperationsDeleteRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "nemo";
                key = "quasi";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "debitis";
                uploadProtocol = "eius";
            }};            

            TpuProjectsLocationsOperationsDeleteResponse res = sdk.projects.tpuProjectsLocationsOperationsDelete(req, new TpuProjectsLocationsOperationsDeleteSecurity("maxime", "deleniti") {{
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

            TpuProjectsLocationsOperationsListRequest req = new TpuProjectsLocationsOperationsListRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "ullam";
                filter = "expedita";
                key = "nihil";
                oauthToken = "repellat";
                pageSize = 841140L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            TpuProjectsLocationsOperationsListResponse res = sdk.projects.tpuProjectsLocationsOperationsList(req, new TpuProjectsLocationsOperationsListSecurity("consequuntur", "praesentium") {{
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

## tpuProjectsLocationsRuntimeVersionsGet

Gets a runtime version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsRuntimeVersionsGetRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsRuntimeVersionsGetResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsRuntimeVersionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsRuntimeVersionsGetRequest req = new TpuProjectsLocationsRuntimeVersionsGetRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "pariatur";
                key = "maxime";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "odit";
                uploadProtocol = "ea";
            }};            

            TpuProjectsLocationsRuntimeVersionsGetResponse res = sdk.projects.tpuProjectsLocationsRuntimeVersionsGet(req, new TpuProjectsLocationsRuntimeVersionsGetSecurity("accusantium", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.runtimeVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tpuProjectsLocationsRuntimeVersionsList

Lists runtime versions supported by this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsRuntimeVersionsListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsRuntimeVersionsListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsRuntimeVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsRuntimeVersionsListRequest req = new TpuProjectsLocationsRuntimeVersionsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nam";
                filter = "eaque";
                key = "pariatur";
                oauthToken = "nemo";
                orderBy = "voluptatibus";
                pageSize = 16627L;
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "aut";
                uploadProtocol = "cumque";
            }};            

            TpuProjectsLocationsRuntimeVersionsListResponse res = sdk.projects.tpuProjectsLocationsRuntimeVersionsList(req, new TpuProjectsLocationsRuntimeVersionsListSecurity("corporis", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRuntimeVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
