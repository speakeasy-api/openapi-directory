# rootVmwareComputeCluster

## Overview

VMware compute clusters.

### Available Operations

* [getAsyncRequestStatusForComputeCluster](#getasyncrequeststatusforcomputecluster) - Get asynchronous request details for VMware cluster
* [getComputeCluster](#getcomputecluster) - Get details for the compute cluster
* [getIoFilters](#getiofilters) - Get the ioFilters on the VMware compute cluster with a specific ID
* [installIoFilter](#installiofilter) - Install the Rubrik ioFilter to the VMware cluster with a specific ID
* [queryComputeCluster](#querycomputecluster) - Get all the clusters belonging to this datacenter
* [uninstallIoFilter](#uninstalliofilter) - Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID
* [updateComputeCluster](#updatecomputecluster) - Modify information for a VMware compute cluster
* [upgradeIoFilter](#upgradeiofilter) - Upgrade the Rubrik ioFilter for the VMware cluster with a specific ID

## getAsyncRequestStatusForComputeCluster

Get the details of an asynchronous request that involves a VMware compute cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAsyncRequestStatusForComputeClusterRequest;
import org.openapis.openapi.models.operations.GetAsyncRequestStatusForComputeClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quas", "voluptatem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAsyncRequestStatusForComputeClusterRequest req = new GetAsyncRequestStatusForComputeClusterRequest("provident");            

            GetAsyncRequestStatusForComputeClusterResponse res = sdk.rootVmwareComputeCluster.getAsyncRequestStatusForComputeCluster(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComputeCluster

Get details for the compute cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComputeClusterRequest;
import org.openapis.openapi.models.operations.GetComputeClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quas", "ipsum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetComputeClusterRequest req = new GetComputeClusterRequest("vero");            

            GetComputeClusterResponse res = sdk.rootVmwareComputeCluster.getComputeCluster(req);

            if (res.computeClusterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIoFilters

Get the summary of the ioFilters on the VMware compute cluster with a specific ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIoFiltersRequest;
import org.openapis.openapi.models.operations.GetIoFiltersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fuga", "facilis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetIoFiltersRequest req = new GetIoFiltersRequest("maiores");            

            GetIoFiltersResponse res = sdk.rootVmwareComputeCluster.getIoFilters(req);

            if (res.ioFilterSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## installIoFilter

Install the latest version of Rubrik ioFilter to the VMware cluster with a specific ID. The cluster must be in maintenance mode to install the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstallIoFilterRequest;
import org.openapis.openapi.models.operations.InstallIoFilterResponse;
import org.openapis.openapi.models.shared.FullyQualifiedDomainNameInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("error", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            InstallIoFilterRequest req = new InstallIoFilterRequest(                new FullyQualifiedDomainNameInfo("a");, "consectetur");            

            InstallIoFilterResponse res = sdk.rootVmwareComputeCluster.installIoFilter(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryComputeCluster

Get all the clusters belonging to this datacenter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryComputeClusterRequest;
import org.openapis.openapi.models.operations.QueryComputeClusterResponse;
import org.openapis.openapi.models.operations.QueryComputeClusterSnappableStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sapiente", "voluptatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryComputeClusterRequest req = new QueryComputeClusterRequest() {{
                datacenterId = "assumenda";
                primaryClusterId = "repellendus";
                snappableStatus = QueryComputeClusterSnappableStatusEnum.PROTECTABLE;
            }};            

            QueryComputeClusterResponse res = sdk.rootVmwareComputeCluster.queryComputeCluster(req);

            if (res.computeClusterSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uninstallIoFilter

Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID. The cluster must be in maintenance mode to uninstall the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UninstallIoFilterRequest;
import org.openapis.openapi.models.operations.UninstallIoFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("omnis", "delectus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UninstallIoFilterRequest req = new UninstallIoFilterRequest("odio");            

            UninstallIoFilterResponse res = sdk.rootVmwareComputeCluster.uninstallIoFilter(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComputeCluster

Update the configuredSlaDomainId for a VMware compute cluster with a specific ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateComputeClusterRequest;
import org.openapis.openapi.models.operations.UpdateComputeClusterResponse;
import org.openapis.openapi.models.shared.ComputeClusterUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatibus", "aut") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateComputeClusterRequest req = new UpdateComputeClusterRequest(                new ComputeClusterUpdate() {{
                                configuredSlaDomainId = "quam";
                            }};, "omnis");            

            UpdateComputeClusterResponse res = sdk.rootVmwareComputeCluster.updateComputeCluster(req);

            if (res.computeClusterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upgradeIoFilter

Upgrade the Rubrik ioFilter for a VMware cluster with a specific ID. The cluster must be in maintenance mode to upgrade the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpgradeIoFilterRequest;
import org.openapis.openapi.models.operations.UpgradeIoFilterResponse;
import org.openapis.openapi.models.shared.FullyQualifiedDomainNameInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("similique", "asperiores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpgradeIoFilterRequest req = new UpgradeIoFilterRequest(                new FullyQualifiedDomainNameInfo("modi");, "facere");            

            UpgradeIoFilterResponse res = sdk.rootVmwareComputeCluster.upgradeIoFilter(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
