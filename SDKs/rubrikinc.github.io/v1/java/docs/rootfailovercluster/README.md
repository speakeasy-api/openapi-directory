# rootFailoverCluster

## Overview

Failover clusters.

### Available Operations

* [bulkDeleteFailoverCluster](#bulkdeletefailovercluster) - Delete the provided failover clusters
* [createFailoverCluster](#createfailovercluster) - Create a failover cluster
* [deleteFailoverCluster](#deletefailovercluster) - Delete a failover cluster
* [getFailoverCluster](#getfailovercluster) - Get details of a failover cluster
* [queryFailoverCluster](#queryfailovercluster) - Get a summary of all failover clusters
* [updateFailoverCluster](#updatefailovercluster) - Update a failover cluster

## bulkDeleteFailoverCluster

Delete the provided failover clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkDeleteFailoverClusterRequest;
import org.openapis.openapi.models.operations.BulkDeleteFailoverClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dicta", "ullam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkDeleteFailoverClusterRequest req = new BulkDeleteFailoverClusterRequest(                new String[]{{
                                add("ullam"),
                                add("nisi"),
                            }}) {{
                preserveSnapshots = false;
            }};            

            BulkDeleteFailoverClusterResponse res = sdk.rootFailoverCluster.bulkDeleteFailoverCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFailoverCluster

Create a failover cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFailoverClusterResponse;
import org.openapis.openapi.models.shared.FailoverClusterConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aut", "voluptatum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.FailoverClusterConfig req = new FailoverClusterConfig(                new String[]{{
                                add("quibusdam"),
                            }}, "ex") {{
                configuredSlaDomainId = "deleniti";
            }};            

            CreateFailoverClusterResponse res = sdk.rootFailoverCluster.createFailoverCluster(req);

            if (res.failoverClusterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFailoverCluster

Delete a failover cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFailoverClusterRequest;
import org.openapis.openapi.models.operations.DeleteFailoverClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("itaque", "dolorum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteFailoverClusterRequest req = new DeleteFailoverClusterRequest("architecto") {{
                preserveSnapshots = false;
            }};            

            DeleteFailoverClusterResponse res = sdk.rootFailoverCluster.deleteFailoverCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverCluster

Get details of a failover cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFailoverClusterRequest;
import org.openapis.openapi.models.operations.GetFailoverClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("omnis", "tenetur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFailoverClusterRequest req = new GetFailoverClusterRequest("quasi");            

            GetFailoverClusterResponse res = sdk.rootFailoverCluster.getFailoverCluster(req);

            if (res.failoverClusterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryFailoverCluster

Get a summary of all failover clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryFailoverClusterOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.QueryFailoverClusterRequest;
import org.openapis.openapi.models.operations.QueryFailoverClusterResponse;
import org.openapis.openapi.models.operations.QueryFailoverClusterSLAAssignmentEnum;
import org.openapis.openapi.models.operations.QueryFailoverClusterSortByEnum;
import org.openapis.openapi.models.operations.QueryFailoverClusterSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("at", "et") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryFailoverClusterRequest req = new QueryFailoverClusterRequest() {{
                limit = 454162;
                name = "Joann Bogan";
                offset = 614465;
                operatingSystemType = QueryFailoverClusterOperatingSystemTypeEnum.UNIX_LIKE;
                primaryClusterId = "accusantium";
                slaAssignment = QueryFailoverClusterSLAAssignmentEnum.DIRECT;
                sortBy = QueryFailoverClusterSortByEnum.NAME;
                sortOrder = QueryFailoverClusterSortOrderEnum.ASC;
            }};            

            QueryFailoverClusterResponse res = sdk.rootFailoverCluster.queryFailoverCluster(req);

            if (res.failoverClusterSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFailoverCluster

Update failover cluster with specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFailoverClusterRequest;
import org.openapis.openapi.models.operations.UpdateFailoverClusterResponse;
import org.openapis.openapi.models.shared.FailoverClusterConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laudantium", "eum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateFailoverClusterRequest req = new UpdateFailoverClusterRequest(                new FailoverClusterConfig(                new String[]{{
                                                add("ab"),
                                                add("corrupti"),
                                                add("non"),
                                            }}, "voluptatem") {{
                                configuredSlaDomainId = "dolor";
                            }};, "occaecati");            

            UpdateFailoverClusterResponse res = sdk.rootFailoverCluster.updateFailoverCluster(req);

            if (res.failoverClusterDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
