# rootVmwareVcenter

## Overview

VMware vCenter.

### Available Operations

* [createRefresh](#createrefresh) - Refresh vCenter Server metadata
* [createRefreshVmV1](#createrefreshvmv1) - Refresh single virtual machine metadata in a vcenter
* [createVcenter](#createvcenter) - Add vCenter Server
* [deleteVcenter](#deletevcenter) - Remove vCenter Server
* [getHotAddBandwidth](#gethotaddbandwidth) - Get the ingest and export bandwidth limits for HotAdd with the vCenter
* [getHotAddNetwork](#gethotaddnetwork) - Retrieve the user-configured network for HotAdd operations
* [getNetworks](#getnetworks) - Get the user-configured networks in the vCenter
* [getNumProxiesNeeded](#getnumproxiesneeded) - Get the number of HotAdd proxies needed for the vCenter
* [getVcenter](#getvcenter) - Get the details of a vCenter Server
* [getVcenterAsyncRequestStatus](#getvcenterasyncrequeststatus) - Get vCenter Server async request
* [patchVcenter](#patchvcenter) - Update the SLA Domain for a vCenter Server
* [queryHotAddProxyVm](#queryhotaddproxyvm) - Get a list of HotAdd proxy virtual machines
* [queryVcenter](#queryvcenter) - Get list of vCenters
* [setHotAddBandwidth](#sethotaddbandwidth) - Set the ingest and export bandwidth limits for HotAdd with the vCenter
* [setHotAddNetwork](#sethotaddnetwork) - Set the user-configured network for HotAdd backup and recovery
* [updateVcenter](#updatevcenter) - Update vCenter Server

## createRefresh

Create a job to refresh the metadata for the specified vCenter Server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRefreshRequest;
import org.openapis.openapi.models.operations.CreateRefreshResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("enim", "animi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateRefreshRequest req = new CreateRefreshRequest("unde");            

            CreateRefreshResponse res = sdk.rootVmwareVcenter.createRefresh(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRefreshVmV1

Refresh the metadata for a single virtual machine controlled by vCenter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRefreshVmV1Request;
import org.openapis.openapi.models.operations.CreateRefreshVmV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quae", "eum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateRefreshVmV1Request req = new CreateRefreshVmV1Request("nostrum", "eveniet");            

            CreateRefreshVmV1Response res = sdk.rootVmwareVcenter.createRefreshVmV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVcenter

(DEPRECATED) Create a vCenter Server object by providing the address and account credentials of the vCenter Server. Initiates an asynchronous job to establish a connection with the vCenter Server and retrieve all metadata. Use GET /vcenter/{id}/status to check status. The recommended endpoint is /v2/vmware/vcenter. This endpoint will remain available in future releases despite deprecation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVcenterResponse;
import org.openapis.openapi.models.shared.ClusterVisibilityConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VcenterConfig;
import org.openapis.openapi.models.shared.VcenterConfigConflictResolutionAuthzEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laboriosam", "ratione") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.VcenterConfig req = new VcenterConfig("blanditiis", "quidem", "illum") {{
                caCerts = "reiciendis";
                computeVisibilityFilter = new org.openapis.openapi.models.shared.ClusterVisibilityConfig[]{{
                    add(new ClusterVisibilityConfig(                new String[]{{
                                        add("aspernatur"),
                                        add("eligendi"),
                                        add("repudiandae"),
                                    }}, "dicta") {{
                        hostGroupFilter = new String[]{{
                            add("consequatur"),
                        }};
                        id = "32b6c879-923b-47e1-b584-f7ae12c6891f";
                    }}),
                    add(new ClusterVisibilityConfig(                new String[]{{
                                        add("unde"),
                                        add("cumque"),
                                        add("dolor"),
                                        add("repellendus"),
                                    }}, "temporibus") {{
                        hostGroupFilter = new String[]{{
                            add("ullam"),
                        }};
                        id = "71723053-77dc-4fa8-9df9-75e356686092";
                    }}),
                    add(new ClusterVisibilityConfig(                new String[]{{
                                        add("distinctio"),
                                        add("distinctio"),
                                        add("assumenda"),
                                        add("illum"),
                                    }}, "soluta") {{
                        hostGroupFilter = new String[]{{
                            add("minima"),
                            add("a"),
                            add("beatae"),
                            add("vitae"),
                        }};
                        id = "1dea1026-d541-4a4d-990f-eb21780bccc0";
                    }}),
                    add(new ClusterVisibilityConfig(                new String[]{{
                                        add("explicabo"),
                                    }}, "suscipit") {{
                        hostGroupFilter = new String[]{{
                            add("laudantium"),
                            add("tempora"),
                        }};
                        id = "708fb4e3-91e6-4bc1-98c4-c4e54599ea34";
                    }}),
                }};
                conflictResolutionAuthz = VcenterConfigConflictResolutionAuthzEnum.ALLOW_AUTO_CONFLICT_RESOLUTION;
            }};            

            CreateVcenterResponse res = sdk.rootVmwareVcenter.createVcenter(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVcenter

Initiates an asynchronous job to remove a vCenter Server object. The vCenter Server cannot have VMs mounted through the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVcenterRequest;
import org.openapis.openapi.models.operations.DeleteVcenterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eveniet", "sint") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteVcenterRequest req = new DeleteVcenterRequest("nobis");            

            DeleteVcenterResponse res = sdk.rootVmwareVcenter.deleteVcenter(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHotAddBandwidth

Get the ingest and export bandwidth limits in Mbps when using HotAdd with the vCenter. These limits are shared across all HotAdd proxies for the Center.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHotAddBandwidthRequest;
import org.openapis.openapi.models.operations.GetHotAddBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("qui", "accusantium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHotAddBandwidthRequest req = new GetHotAddBandwidthRequest("consequatur");            

            GetHotAddBandwidthResponse res = sdk.rootVmwareVcenter.getHotAddBandwidth(req);

            if (res.hotAddBandwidthInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHotAddNetwork

Retrieve the user-configured network for HotAdd backup and recovery operations on VMware on AWS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHotAddNetworkRequest;
import org.openapis.openapi.models.operations.GetHotAddNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("impedit", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHotAddNetworkRequest req = new GetHotAddNetworkRequest("voluptate");            

            GetHotAddNetworkResponse res = sdk.rootVmwareVcenter.getHotAddNetwork(req);

            if (res.hotAddNetworkConfigWithName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworks

Get the names and IDs of the user configured networks in the vCenter. This information enables users to choose a desired network for backups to go through for VMware Cloud on AWS setups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworksRequest;
import org.openapis.openapi.models.operations.GetNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deleniti", "est") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetNetworksRequest req = new GetNetworksRequest("et");            

            GetNetworksResponse res = sdk.rootVmwareVcenter.getNetworks(req);

            if (res.networkInfoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNumProxiesNeeded

Get the number of HotAdd proxies that need to be deployed to the vCenter to support the maximum number of ingest jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumProxiesNeededRequest;
import org.openapis.openapi.models.operations.GetNumProxiesNeededResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("expedita", "quibusdam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetNumProxiesNeededRequest req = new GetNumProxiesNeededRequest("quos");            

            GetNumProxiesNeededResponse res = sdk.rootVmwareVcenter.getNumProxiesNeeded(req);

            if (res.hotAddProxiesNeededInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcenter

Retrieve detailed information for a vCenter Server object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcenterRequest;
import org.openapis.openapi.models.operations.GetVcenterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("maiores", "quidem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcenterRequest req = new GetVcenterRequest("in");            

            GetVcenterResponse res = sdk.rootVmwareVcenter.getVcenter(req);

            if (res.vcenterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcenterAsyncRequestStatus

Get details about a vcenter related async request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcenterAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetVcenterAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("culpa", "doloremque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcenterAsyncRequestStatusRequest req = new GetVcenterAsyncRequestStatusRequest("fuga");            

            GetVcenterAsyncRequestStatusResponse res = sdk.rootVmwareVcenter.getVcenterAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchVcenter

Update the SLA Domain that is configured for a vCenter Server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchVcenterRequest;
import org.openapis.openapi.models.operations.PatchVcenterResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VcenterPatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dicta", "architecto") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchVcenterRequest req = new PatchVcenterRequest(                new VcenterPatch() {{
                                caCerts = "suscipit";
                                configuredSlaDomainId = "eligendi";
                            }};, "officiis");            

            PatchVcenterResponse res = sdk.rootVmwareVcenter.patchVcenter(req);

            if (res.vcenterSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryHotAddProxyVm

Retrieve summary information for all HotAdd proxy virtual machines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryHotAddProxyVmRequest;
import org.openapis.openapi.models.operations.QueryHotAddProxyVmResponse;
import org.openapis.openapi.models.operations.QueryHotAddProxyVmSortByEnum;
import org.openapis.openapi.models.operations.QueryHotAddProxyVmSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dignissimos", "fugit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryHotAddProxyVmRequest req = new QueryHotAddProxyVmRequest() {{
                name = "Miss Elena Hahn";
                sortBy = QueryHotAddProxyVmSortByEnum.NAME;
                sortOrder = QueryHotAddProxyVmSortOrderEnum.DESC;
            }};            

            QueryHotAddProxyVmResponse res = sdk.rootVmwareVcenter.queryHotAddProxyVm(req);

            if (res.hotAddProxyVmInfoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVcenter

Retrieve information for each managed vCenter, including: ID, managed ID, address, username, SLA ID, and primary cluster ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVcenterRequest;
import org.openapis.openapi.models.operations.QueryVcenterResponse;
import org.openapis.openapi.models.operations.QueryVcenterSnappableStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deserunt", "ratione") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVcenterRequest req = new QueryVcenterRequest() {{
                ignoreConnectionStatus = false;
                primaryClusterId = "ipsa";
                snappableStatus = QueryVcenterSnappableStatusEnum.PROTECTABLE;
            }};            

            QueryVcenterResponse res = sdk.rootVmwareVcenter.queryVcenter(req);

            if (res.vcenterSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setHotAddBandwidth

Set the ingest and export bandwidth limits in Mbps when using HotAdd with the vCenter. These limits are shared across all HotAdd proxies for the Center.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetHotAddBandwidthRequest;
import org.openapis.openapi.models.operations.SetHotAddBandwidthResponse;
import org.openapis.openapi.models.shared.HotAddBandwidthInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("debitis", "iste") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SetHotAddBandwidthRequest req = new SetHotAddBandwidthRequest(                new HotAddBandwidthInfo(646776, 944405);, "ducimus");            

            SetHotAddBandwidthResponse res = sdk.rootVmwareVcenter.setHotAddBandwidth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setHotAddNetwork

Set the user-configured network for HotAdd backup and recovery operations on VMware on AWS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetHotAddNetworkRequest;
import org.openapis.openapi.models.operations.SetHotAddNetworkResponse;
import org.openapis.openapi.models.shared.HotAddNetworkConfigWithId;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StaticIpInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consequuntur", "ipsam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SetHotAddNetworkRequest req = new SetHotAddNetworkRequest(                new HotAddNetworkConfigWithId("libero") {{
                                staticIpInfo = new StaticIpInfo(                new String[]{{
                                                    add("omnis"),
                                                }}, "dicta") {{
                                    dnsServers = new String[]{{
                                        add("explicabo"),
                                    }};
                                    gateway = "consequatur";
                                }};;
                            }};, "amet");            

            SetHotAddNetworkResponse res = sdk.rootVmwareVcenter.setHotAddNetwork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVcenter

Update the address, username and password of the specified vCenter Server object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVcenterRequest;
import org.openapis.openapi.models.operations.UpdateVcenterResponse;
import org.openapis.openapi.models.shared.ClusterVisibilityConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VcenterConfig;
import org.openapis.openapi.models.shared.VcenterConfigConflictResolutionAuthzEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consequatur", "fugiat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateVcenterRequest req = new UpdateVcenterRequest(                new VcenterConfig("voluptatum", "velit", "hic") {{
                                caCerts = "ullam";
                                computeVisibilityFilter = new org.openapis.openapi.models.shared.ClusterVisibilityConfig[]{{
                                    add(new ClusterVisibilityConfig(                new String[]{{
                                                        add("aliquam"),
                                                        add("eligendi"),
                                                        add("hic"),
                                                    }}, "quo") {{
                                        hostGroupFilter = new String[]{{
                                            add("distinctio"),
                                            add("iusto"),
                                            add("dignissimos"),
                                            add("provident"),
                                        }};
                                        id = "9d22e8c1-f849-4382-9fdc-42c876c2c2df";
                                    }}),
                                    add(new ClusterVisibilityConfig(                new String[]{{
                                                        add("natus"),
                                                        add("deleniti"),
                                                        add("necessitatibus"),
                                                    }}, "aspernatur") {{
                                        hostGroupFilter = new String[]{{
                                            add("nobis"),
                                        }};
                                        id = "76230f84-1fb1-4bd2-bfdb-14db6be5a685";
                                    }}),
                                    add(new ClusterVisibilityConfig(                new String[]{{
                                                        add("magni"),
                                                        add("consequuntur"),
                                                        add("consequuntur"),
                                                        add("eius"),
                                                    }}, "commodi") {{
                                        hostGroupFilter = new String[]{{
                                            add("laborum"),
                                        }};
                                        id = "e20da16f-c2b2-471a-a89c-57e854e90439";
                                    }}),
                                }};
                                conflictResolutionAuthz = VcenterConfigConflictResolutionAuthzEnum.ALLOW_AUTO_CONFLICT_RESOLUTION;
                            }};, "vel");            

            UpdateVcenterResponse res = sdk.rootVmwareVcenter.updateVcenter(req);

            if (res.vcenterSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
