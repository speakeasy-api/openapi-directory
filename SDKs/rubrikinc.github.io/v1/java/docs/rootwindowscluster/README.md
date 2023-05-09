# rootWindowsCluster

## Overview

Windows clusters.

### Available Operations

* [getWindowsCluster](#getwindowscluster) - Get detailed information for a Windows cluster
* [queryWindowsCluster](#querywindowscluster) - Get summary information for Windows clusters

## getWindowsCluster

Returns a detailed view of a Windows server failover cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWindowsClusterRequest;
import org.openapis.openapi.models.operations.GetWindowsClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("inventore", "iste") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetWindowsClusterRequest req = new GetWindowsClusterRequest("atque");            

            GetWindowsClusterResponse res = sdk.rootWindowsCluster.getWindowsCluster(req);

            if (res.windowsClusterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryWindowsCluster

Returns a list of summary information for Windows server failover clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryWindowsClusterRequest;
import org.openapis.openapi.models.operations.QueryWindowsClusterResponse;
import org.openapis.openapi.models.operations.QueryWindowsClusterSnappableStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("explicabo", "ullam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryWindowsClusterRequest req = new QueryWindowsClusterRequest() {{
                isAgentless = false;
                primaryClusterId = "atque";
                snappableStatus = QueryWindowsClusterSnappableStatusEnum.PROTECTABLE;
            }};            

            QueryWindowsClusterResponse res = sdk.rootWindowsCluster.queryWindowsCluster(req);

            if (res.windowsClusterSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
