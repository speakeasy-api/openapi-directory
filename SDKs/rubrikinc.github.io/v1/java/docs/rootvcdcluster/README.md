# rootVcdCluster

## Overview

vCloud cluster.

### Available Operations

* [createVcdClusterV1](#createvcdclusterv1) - Add a vCD Cluster
* [deleteVcdClusterV1](#deletevcdclusterv1) - Remove vCD Cluster
* [getVcdClusterAsyncRequestStatusV1](#getvcdclusterasyncrequeststatusv1) - Get vCD Cluster job status
* [getVcdClusterV1](#getvcdclusterv1) - Get vCD Cluster details
* [queryVcdClusterV1](#queryvcdclusterv1) - Get summary for all vCD Clusters
* [queryVcdVimServerV1](#queryvcdvimserverv1) - Get VimServers of a vCD Cluster
* [refreshVcdClusterV1](#refreshvcdclusterv1) - Refresh a vCD Cluster
* [updateVcdClusterV1](#updatevcdclusterv1) - Change vCD Cluster object

## createVcdClusterV1

Create a vCD Cluster object by providing the address of the vCD Cluster and the credentials for an account on the vCD Cluster that has administrator privileges. This request initiates an asynchronous job to connect with the vCD Cluster and retrieve the required metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVcdClusterV1Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VcdClusterConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fuga", "tempore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.VcdClusterConfig req = new VcdClusterConfig("commodi", "fugit", "suscipit") {{
                caCerts = "voluptate";
            }};            

            CreateVcdClusterV1Response res = sdk.rootVcdCluster.createVcdClusterV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVcdClusterV1

Start an asynchronous job to remove a vCD Cluster object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVcdClusterV1Request;
import org.openapis.openapi.models.operations.DeleteVcdClusterV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nisi", "aliquid") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteVcdClusterV1Request req = new DeleteVcdClusterV1Request("provident");            

            DeleteVcdClusterV1Response res = sdk.rootVcdCluster.deleteVcdClusterV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcdClusterAsyncRequestStatusV1

Retrieve the details of a specified asynchronous job for a vCD Cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcdClusterAsyncRequestStatusV1Request;
import org.openapis.openapi.models.operations.GetVcdClusterAsyncRequestStatusV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laboriosam", "accusamus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcdClusterAsyncRequestStatusV1Request req = new GetVcdClusterAsyncRequestStatusV1Request("ab");            

            GetVcdClusterAsyncRequestStatusV1Response res = sdk.rootVcdCluster.getVcdClusterAsyncRequestStatusV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcdClusterV1

Retrieve detailed information for a vCD Cluster object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcdClusterV1Request;
import org.openapis.openapi.models.operations.GetVcdClusterV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("itaque", "quisquam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcdClusterV1Request req = new GetVcdClusterV1Request("eaque");            

            GetVcdClusterV1Response res = sdk.rootVcdCluster.getVcdClusterV1(req);

            if (res.vcdClusterSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVcdClusterV1

Retrieve summary information for all vCD cluster objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVcdClusterV1Request;
import org.openapis.openapi.models.operations.QueryVcdClusterV1Response;
import org.openapis.openapi.models.operations.QueryVcdClusterV1SortByEnum;
import org.openapis.openapi.models.operations.QueryVcdClusterV1SortOrderEnum;
import org.openapis.openapi.models.operations.QueryVcdClusterV1StatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("alias", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVcdClusterV1Request req = new QueryVcdClusterV1Request() {{
                name = "Evelyn Predovic";
                sortBy = QueryVcdClusterV1SortByEnum.NAME;
                sortOrder = QueryVcdClusterV1SortOrderEnum.DESC;
                status = QueryVcdClusterV1StatusEnum.BADLY_CONFIGURED;
            }};            

            QueryVcdClusterV1Response res = sdk.rootVcdCluster.queryVcdClusterV1(req);

            if (res.vcdClusterSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVcdVimServerV1

Retrieves the VimServer representation of the vCenter Servers that are attached to a specified vCD Cluster object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVcdVimServerV1Request;
import org.openapis.openapi.models.operations.QueryVcdVimServerV1Response;
import org.openapis.openapi.models.operations.QueryVcdVimServerV1SortByEnum;
import org.openapis.openapi.models.operations.QueryVcdVimServerV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("unde", "similique") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVcdVimServerV1Request req = new QueryVcdVimServerV1Request("eligendi") {{
                sortBy = QueryVcdVimServerV1SortByEnum.STATUS;
                sortOrder = QueryVcdVimServerV1SortOrderEnum.ASC;
            }};            

            QueryVcdVimServerV1Response res = sdk.rootVcdCluster.queryVcdVimServerV1(req);

            if (res.vimserverSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshVcdClusterV1

Start an asynchronous job to refresh the metadata for a specified vCD Cluster object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshVcdClusterV1Request;
import org.openapis.openapi.models.operations.RefreshVcdClusterV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("debitis", "nobis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RefreshVcdClusterV1Request req = new RefreshVcdClusterV1Request("asperiores");            

            RefreshVcdClusterV1Response res = sdk.rootVcdCluster.refreshVcdClusterV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVcdClusterV1

Modify the hostname and credentials of a specified vCD Cluster object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVcdClusterV1Request;
import org.openapis.openapi.models.operations.UpdateVcdClusterV1Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VcdClusterPatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("temporibus", "id") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateVcdClusterV1Request req = new UpdateVcdClusterV1Request(                new VcdClusterPatch() {{
                                caCerts = "atque";
                                configuredSlaDomainId = "quibusdam";
                                hostname = "all-scratch.biz";
                                password = "aliquam";
                                username = "Lane.Terry21";
                            }};, "alias");            

            UpdateVcdClusterV1Response res = sdk.rootVcdCluster.updateVcdClusterV1(req);

            if (res.vcdClusterSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
