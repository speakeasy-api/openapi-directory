# projects

### Available Operations

* [tpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsGenerateServiceIdentity](#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [tpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesGetGuestAttributes](#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [tpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesPatch](#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [tpuProjectsLocationsNodesSimulateMaintenanceEvent](#tpuprojectslocationsnodessimulatemaintenanceevent) - Simulates a maintenance event.
* [tpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsQueuedResourcesCreate](#tpuprojectslocationsqueuedresourcescreate) - Creates a QueuedResource TPU instance.
* [tpuProjectsLocationsQueuedResourcesDelete](#tpuprojectslocationsqueuedresourcesdelete) - Deletes a QueuedResource TPU instance.
* [tpuProjectsLocationsQueuedResourcesList](#tpuprojectslocationsqueuedresourceslist) - Lists queued resources.
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
                requestId = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            TpuProjectsLocationsNodesCreateResponse res = sdk.projects.tpuProjectsLocationsNodesCreate(req, new TpuProjectsLocationsNodesCreateSecurity("sequi", "tenetur") {{
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

            TpuProjectsLocationsNodesGetGuestAttributesRequest req = new TpuProjectsLocationsNodesGetGuestAttributesRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                getGuestAttributesRequest = new GetGuestAttributesRequest() {{
                    queryPath = "possimus";
                    workerIds = new String[]{{
                        add("quasi"),
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            TpuProjectsLocationsNodesGetGuestAttributesResponse res = sdk.projects.tpuProjectsLocationsNodesGetGuestAttributes(req, new TpuProjectsLocationsNodesGetGuestAttributesSecurity("voluptatibus", "ipsa") {{
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

            TpuProjectsLocationsNodesListRequest req = new TpuProjectsLocationsNodesListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                pageSize = 120196L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            TpuProjectsLocationsNodesListResponse res = sdk.projects.tpuProjectsLocationsNodesList(req, new TpuProjectsLocationsNodesListSecurity("harum", "enim") {{
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

            TpuProjectsLocationsNodesPatchRequest req = new TpuProjectsLocationsNodesPatchRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeInput = new NodeInput() {{
                    acceleratorConfig = new AcceleratorConfig() {{
                        topology = "repudiandae";
                        type = AcceleratorConfigTypeEnum.TYPE_UNSPECIFIED;
                    }};;
                    acceleratorType = "ipsum";
                    cidrBlock = "quidem";
                    dataDisks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            sourceDisk = "pariatur";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.DISK_MODE_UNSPECIFIED;
                            sourceDisk = "praesentium";
                        }}),
                        add(new AttachedDisk() {{
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            sourceDisk = "voluptates";
                        }}),
                    }};
                    description = "quasi";
                    health = NodeHealthEnum.UNHEALTHY_MAINTENANCE;
                    labels = new java.util.HashMap<String, String>() {{
                        put("veritatis", "itaque");
                        put("incidunt", "enim");
                        put("consequatur", "est");
                    }};
                    metadata = new java.util.HashMap<String, String>() {{
                        put("explicabo", "deserunt");
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

## tpuProjectsLocationsNodesSimulateMaintenanceEvent

Simulates a maintenance event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesSimulateMaintenanceEventRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesSimulateMaintenanceEventResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SimulateMaintenanceEventRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsNodesSimulateMaintenanceEventRequest req = new TpuProjectsLocationsNodesSimulateMaintenanceEventRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                simulateMaintenanceEventRequest = new SimulateMaintenanceEventRequest() {{
                    workerIds = new String[]{{
                        add("maiores"),
                        add("rerum"),
                        add("dicta"),
                        add("magnam"),
                    }};
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            TpuProjectsLocationsNodesSimulateMaintenanceEventResponse res = sdk.projects.tpuProjectsLocationsNodesSimulateMaintenanceEvent(req, new TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity("accusamus", "delectus") {{
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

            TpuProjectsLocationsNodesStartRequest req = new TpuProjectsLocationsNodesStartRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("id", "blanditiis");
                    put("deleniti", "sapiente");
                    put("amet", "deserunt");
                }};
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            TpuProjectsLocationsNodesStartResponse res = sdk.projects.tpuProjectsLocationsNodesStart(req, new TpuProjectsLocationsNodesStartSecurity("id", "labore") {{
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

            TpuProjectsLocationsNodesStopRequest req = new TpuProjectsLocationsNodesStopRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nobis", "eum");
                    put("vero", "aspernatur");
                    put("architecto", "magnam");
                }};
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "provident";
                key = "quos";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "mollitia";
                uploadProtocol = "reiciendis";
            }};            

            TpuProjectsLocationsNodesStopResponse res = sdk.projects.tpuProjectsLocationsNodesStop(req, new TpuProjectsLocationsNodesStopSecurity("mollitia", "ad") {{
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

            TpuProjectsLocationsOperationsCancelRequest req = new TpuProjectsLocationsOperationsCancelRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "quasi";
                key = "iure";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "eius";
                uploadProtocol = "maxime";
            }};            

            TpuProjectsLocationsOperationsCancelResponse res = sdk.projects.tpuProjectsLocationsOperationsCancel(req, new TpuProjectsLocationsOperationsCancelSecurity("deleniti", "facilis") {{
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

            TpuProjectsLocationsOperationsListRequest req = new TpuProjectsLocationsOperationsListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "expedita";
                filter = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                pageSize = 149448L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "accusantium";
                uploadProtocol = "consequuntur";
            }};            

            TpuProjectsLocationsOperationsListResponse res = sdk.projects.tpuProjectsLocationsOperationsList(req, new TpuProjectsLocationsOperationsListSecurity("praesentium", "natus") {{
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

## tpuProjectsLocationsQueuedResourcesCreate

Creates a QueuedResource TPU instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesCreateRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesCreateResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.AttachedDiskModeEnum;
import org.openapis.openapi.models.shared.FailedData;
import org.openapis.openapi.models.shared.Guaranteed;
import org.openapis.openapi.models.shared.Interval;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.NodeHealthEnum;
import org.openapis.openapi.models.shared.NodeInput;
import org.openapis.openapi.models.shared.NodeSpecInput;
import org.openapis.openapi.models.shared.QueuedResourceInput;
import org.openapis.openapi.models.shared.QueuedResourceState;
import org.openapis.openapi.models.shared.QueuedResourceStateStateEnum;
import org.openapis.openapi.models.shared.QueueingPolicy;
import org.openapis.openapi.models.shared.SchedulingConfig;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TpuInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsQueuedResourcesCreateRequest req = new TpuProjectsLocationsQueuedResourcesCreateRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                queuedResourceInput = new QueuedResourceInput() {{
                    bestEffort = new java.util.HashMap<String, Object>() {{
                        put("illum", "pariatur");
                        put("maxime", "ea");
                        put("excepturi", "odit");
                        put("ea", "accusantium");
                    }};
                    guaranteed = new Guaranteed() {{
                        minDuration = "ab";
                        reserved = false;
                    }};;
                    queueingPolicy = new QueueingPolicy() {{
                        validAfterDuration = "maiores";
                        validAfterTime = "quidem";
                        validInterval = new Interval() {{
                            endTime = "ipsam";
                            startTime = "voluptate";
                        }};;
                        validUntilDuration = "autem";
                        validUntilTime = "nam";
                    }};;
                    reservationName = "eaque";
                    state = new QueuedResourceState() {{
                        acceptedData = new java.util.HashMap<String, Object>() {{
                            put("nemo", "voluptatibus");
                            put("perferendis", "fugiat");
                            put("amet", "aut");
                            put("cumque", "corporis");
                        }};
                        activeData = new java.util.HashMap<String, Object>() {{
                            put("libero", "nobis");
                            put("dolores", "quis");
                            put("totam", "dignissimos");
                            put("eaque", "quis");
                        }};
                        creatingData = new java.util.HashMap<String, Object>() {{
                            put("eos", "perferendis");
                        }};
                        deletingData = new java.util.HashMap<String, Object>() {{
                            put("minus", "quam");
                        }};
                        failedData = new FailedData() {{
                            error = new Status() {{
                                code = 223924;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("hic", "recusandae");
                                        put("omnis", "facilis");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("voluptatem", "porro");
                                        put("consequuntur", "blanditiis");
                                        put("error", "eaque");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("rerum", "adipisci");
                                        put("asperiores", "earum");
                                        put("modi", "iste");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("deleniti", "pariatur");
                                        put("provident", "nobis");
                                        put("libero", "delectus");
                                    }}),
                                }};
                                message = "quaerat";
                            }};;
                        }};;
                        provisioningData = new java.util.HashMap<String, Object>() {{
                            put("aliquid", "dolorem");
                            put("dolorem", "dolor");
                            put("qui", "ipsum");
                        }};
                        state = QueuedResourceStateStateEnum.SUSPENDED;
                        suspendedData = new java.util.HashMap<String, Object>() {{
                            put("cum", "voluptate");
                            put("dignissimos", "reiciendis");
                            put("amet", "dolorum");
                        }};
                        suspendingData = new java.util.HashMap<String, Object>() {{
                            put("veritatis", "ipsa");
                            put("ipsa", "iure");
                        }};
                    }};;
                    tpu = new TpuInput() {{
                        nodeSpec = new org.openapis.openapi.models.shared.NodeSpecInput[]{{
                            add(new NodeSpecInput() {{
                                node = new NodeInput() {{
                                    acceleratorConfig = new AcceleratorConfig() {{
                                        topology = "quaerat";
                                        type = AcceleratorConfigTypeEnum.V4;
                                    }};
                                    acceleratorType = "quidem";
                                    cidrBlock = "voluptatibus";
                                    dataDisks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            mode = AttachedDiskModeEnum.READ_WRITE;
                                            sourceDisk = "eos";
                                        }}),
                                        add(new AttachedDisk() {{
                                            mode = AttachedDiskModeEnum.READ_WRITE;
                                            sourceDisk = "sit";
                                        }}),
                                    }};
                                    description = "fugiat";
                                    health = NodeHealthEnum.HEALTH_UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("dolorum", "iusto");
                                        put("voluptate", "dolorum");
                                        put("deleniti", "omnis");
                                    }};
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("distinctio", "asperiores");
                                        put("nihil", "ipsum");
                                        put("voluptate", "id");
                                        put("saepe", "eius");
                                    }};
                                    networkConfig = new NetworkConfig() {{
                                        canIpForward = false;
                                        enableExternalIps = false;
                                        network = "aspernatur";
                                        subnetwork = "perferendis";
                                    }};
                                    runtimeVersion = "amet";
                                    schedulingConfig = new SchedulingConfig() {{
                                        preemptible = false;
                                        reserved = false;
                                    }};
                                    serviceAccount = new ServiceAccount() {{
                                        email = "Shannon.Hammes64@hotmail.com";
                                        scope = new String[]{{
                                            add("minima"),
                                            add("repellendus"),
                                            add("totam"),
                                        }};
                                    }};
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableSecureBoot = false;
                                    }};
                                    tags = new String[]{{
                                        add("alias"),
                                        add("at"),
                                        add("quaerat"),
                                    }};
                                }};
                                nodeId = "tempora";
                                parent = "vel";
                            }}),
                            add(new NodeSpecInput() {{
                                node = new NodeInput() {{
                                    acceleratorConfig = new AcceleratorConfig() {{
                                        topology = "quod";
                                        type = AcceleratorConfigTypeEnum.V4;
                                    }};
                                    acceleratorType = "qui";
                                    cidrBlock = "dolorum";
                                    dataDisks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            mode = AttachedDiskModeEnum.READ_WRITE;
                                            sourceDisk = "harum";
                                        }}),
                                        add(new AttachedDisk() {{
                                            mode = AttachedDiskModeEnum.READ_WRITE;
                                            sourceDisk = "ipsum";
                                        }}),
                                        add(new AttachedDisk() {{
                                            mode = AttachedDiskModeEnum.READ_ONLY;
                                            sourceDisk = "tenetur";
                                        }}),
                                        add(new AttachedDisk() {{
                                            mode = AttachedDiskModeEnum.DISK_MODE_UNSPECIFIED;
                                            sourceDisk = "tempore";
                                        }}),
                                    }};
                                    description = "accusamus";
                                    health = NodeHealthEnum.HEALTHY;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("dolorem", "sapiente");
                                        put("totam", "nihil");
                                    }};
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("expedita", "neque");
                                    }};
                                    networkConfig = new NetworkConfig() {{
                                        canIpForward = false;
                                        enableExternalIps = false;
                                        network = "sed";
                                        subnetwork = "vel";
                                    }};
                                    runtimeVersion = "libero";
                                    schedulingConfig = new SchedulingConfig() {{
                                        preemptible = false;
                                        reserved = false;
                                    }};
                                    serviceAccount = new ServiceAccount() {{
                                        email = "Lura27@yahoo.com";
                                        scope = new String[]{{
                                            add("cupiditate"),
                                        }};
                                    }};
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableSecureBoot = false;
                                    }};
                                    tags = new String[]{{
                                        add("pariatur"),
                                        add("soluta"),
                                        add("dicta"),
                                        add("laborum"),
                                    }};
                                }};
                                nodeId = "totam";
                                parent = "incidunt";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "facilis";
                key = "aliquid";
                oauthToken = "quam";
                prettyPrint = false;
                queuedResourceId = "molestias";
                quotaUser = "temporibus";
                requestId = "qui";
                uploadType = "neque";
                uploadProtocol = "fugit";
            }};            

            TpuProjectsLocationsQueuedResourcesCreateResponse res = sdk.projects.tpuProjectsLocationsQueuedResourcesCreate(req, new TpuProjectsLocationsQueuedResourcesCreateSecurity("magni", "odio") {{
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

## tpuProjectsLocationsQueuedResourcesDelete

Deletes a QueuedResource TPU instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesDeleteRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesDeleteResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsQueuedResourcesDeleteRequest req = new TpuProjectsLocationsQueuedResourcesDeleteRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "cumque";
                key = "soluta";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "saepe";
                uploadType = "ipsum";
                uploadProtocol = "veritatis";
            }};            

            TpuProjectsLocationsQueuedResourcesDeleteResponse res = sdk.projects.tpuProjectsLocationsQueuedResourcesDelete(req, new TpuProjectsLocationsQueuedResourcesDeleteSecurity("nobis", "quos") {{
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

## tpuProjectsLocationsQueuedResourcesList

Lists queued resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesListRequest;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesListResponse;
import org.openapis.openapi.models.operations.TpuProjectsLocationsQueuedResourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TpuProjectsLocationsQueuedResourcesListRequest req = new TpuProjectsLocationsQueuedResourcesListRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "dolore";
                key = "labore";
                oauthToken = "adipisci";
                pageSize = 677263L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "aut";
                uploadProtocol = "quas";
            }};            

            TpuProjectsLocationsQueuedResourcesListResponse res = sdk.projects.tpuProjectsLocationsQueuedResourcesList(req, new TpuProjectsLocationsQueuedResourcesListSecurity("itaque", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listQueuedResourcesResponse != null) {
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

            TpuProjectsLocationsRuntimeVersionsGetRequest req = new TpuProjectsLocationsRuntimeVersionsGetRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "facilis";
                key = "cupiditate";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "laudantium";
                uploadProtocol = "odio";
            }};            

            TpuProjectsLocationsRuntimeVersionsGetResponse res = sdk.projects.tpuProjectsLocationsRuntimeVersionsGet(req, new TpuProjectsLocationsRuntimeVersionsGetSecurity("occaecati", "voluptatibus") {{
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

            TpuProjectsLocationsRuntimeVersionsListRequest req = new TpuProjectsLocationsRuntimeVersionsListRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "delectus";
                filter = "voluptate";
                key = "consectetur";
                oauthToken = "vero";
                orderBy = "tenetur";
                pageSize = 492268L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quod";
                uploadProtocol = "odio";
            }};            

            TpuProjectsLocationsRuntimeVersionsListResponse res = sdk.projects.tpuProjectsLocationsRuntimeVersionsList(req, new TpuProjectsLocationsRuntimeVersionsListSecurity("similique", "facilis") {{
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
