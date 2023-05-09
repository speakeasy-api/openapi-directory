# rootFailoverClusterFailoverClusterApp

## Overview

Failover cluster apps.

### Available Operations

* [bulkDeleteFailoverClusterApp](#bulkdeletefailoverclusterapp) - Delete failover cluster applications
* [createFailoverClusterApp](#createfailoverclusterapp) - Create a failover cluster app
* [deleteFailoverClusterApp](#deletefailoverclusterapp) - Delete a failover cluster app
* [getFailoverClusterApp](#getfailoverclusterapp) - Get details of a failover cluster app
* [queryFailoverClusterApp](#queryfailoverclusterapp) - Get a summary of all failover cluster apps
* [updateFailoverClusterApp](#updatefailoverclusterapp) - Update a failover cluster app

## bulkDeleteFailoverClusterApp

Delete failover cluster applications from Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkDeleteFailoverClusterAppRequest;
import org.openapis.openapi.models.operations.BulkDeleteFailoverClusterAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("numquam", "impedit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkDeleteFailoverClusterAppRequest req = new BulkDeleteFailoverClusterAppRequest(                new String[]{{
                                add("voluptas"),
                            }}) {{
                preserveSnapshots = false;
            }};            

            BulkDeleteFailoverClusterAppResponse res = sdk.rootFailoverClusterFailoverClusterApp.bulkDeleteFailoverClusterApp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFailoverClusterApp

Create a failover cluster app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFailoverClusterAppResponse;
import org.openapis.openapi.models.shared.FailoverClusterAppConfig;
import org.openapis.openapi.models.shared.FailoverClusterAppSource;
import org.openapis.openapi.models.shared.FailoverClusterNodeOrder;
import org.openapis.openapi.models.shared.FailoverClusterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aut", "dignissimos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.FailoverClusterAppConfig req = new FailoverClusterAppConfig(                new FailoverClusterAppSource() {{
                                nodeOrders = new org.openapis.openapi.models.shared.FailoverClusterNodeOrder[]{{
                                    add(new FailoverClusterNodeOrder("voluptatibus", "voluptas", 990345) {{
                                        nodeId = "maiores";
                                        nodeName = "natus";
                                        order = 244651;
                                    }}),
                                }};
                                virtualIps = new String[]{{
                                    add("ea"),
                                }};
                            }};, "quaerat", FailoverClusterTypeEnum.WINDOWS, "repellendus") {{
                configuredSlaDomainId = "officia";
            }};            

            CreateFailoverClusterAppResponse res = sdk.rootFailoverClusterFailoverClusterApp.createFailoverClusterApp(req);

            if (res.failoverClusterAppSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFailoverClusterApp

Delete a failover cluster app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFailoverClusterAppRequest;
import org.openapis.openapi.models.operations.DeleteFailoverClusterAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("maxime", "dignissimos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteFailoverClusterAppRequest req = new DeleteFailoverClusterAppRequest("officia") {{
                preserveSnapshots = false;
            }};            

            DeleteFailoverClusterAppResponse res = sdk.rootFailoverClusterFailoverClusterApp.deleteFailoverClusterApp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverClusterApp

Get details of a failover cluster app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFailoverClusterAppRequest;
import org.openapis.openapi.models.operations.GetFailoverClusterAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("asperiores", "nemo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFailoverClusterAppRequest req = new GetFailoverClusterAppRequest("quae");            

            GetFailoverClusterAppResponse res = sdk.rootFailoverClusterFailoverClusterApp.getFailoverClusterApp(req);

            if (res.failoverClusterAppDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryFailoverClusterApp

Get a summary of all failover cluster apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryFailoverClusterAppOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.QueryFailoverClusterAppRequest;
import org.openapis.openapi.models.operations.QueryFailoverClusterAppResponse;
import org.openapis.openapi.models.operations.QueryFailoverClusterAppSLAAssignmentEnum;
import org.openapis.openapi.models.operations.QueryFailoverClusterAppSortByEnum;
import org.openapis.openapi.models.operations.QueryFailoverClusterAppSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quaerat", "porro") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryFailoverClusterAppRequest req = new QueryFailoverClusterAppRequest() {{
                limit = 801836;
                name = "Kathleen Flatley";
                offset = 380729;
                operatingSystemType = QueryFailoverClusterAppOperatingSystemTypeEnum.AIX;
                primaryClusterId = "culpa";
                slaAssignment = QueryFailoverClusterAppSLAAssignmentEnum.DIRECT;
                sortBy = QueryFailoverClusterAppSortByEnum.NAME;
                sortOrder = QueryFailoverClusterAppSortOrderEnum.DESC;
            }};            

            QueryFailoverClusterAppResponse res = sdk.rootFailoverClusterFailoverClusterApp.queryFailoverClusterApp(req);

            if (res.failoverClusterAppSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFailoverClusterApp

Update the failover cluster app with specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFailoverClusterAppRequest;
import org.openapis.openapi.models.operations.UpdateFailoverClusterAppResponse;
import org.openapis.openapi.models.shared.FailoverClusterAppConfig;
import org.openapis.openapi.models.shared.FailoverClusterAppSource;
import org.openapis.openapi.models.shared.FailoverClusterNodeOrder;
import org.openapis.openapi.models.shared.FailoverClusterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("totam", "fugiat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateFailoverClusterAppRequest req = new UpdateFailoverClusterAppRequest(                new FailoverClusterAppConfig(                new FailoverClusterAppSource() {{
                                                nodeOrders = new org.openapis.openapi.models.shared.FailoverClusterNodeOrder[]{{
                                                    add(new FailoverClusterNodeOrder("labore", "possimus", 706575) {{
                                                        nodeId = "ducimus";
                                                        nodeName = "quos";
                                                        order = 427834;
                                                    }}),
                                                    add(new FailoverClusterNodeOrder("corporis", "reiciendis", 828657) {{
                                                        nodeId = "cum";
                                                        nodeName = "commodi";
                                                        order = 447144;
                                                    }}),
                                                }};
                                                virtualIps = new String[]{{
                                                    add("recusandae"),
                                                    add("aliquid"),
                                                }};
                                            }};, "aperiam", FailoverClusterTypeEnum.UNIX_LIKE, "consectetur") {{
                                configuredSlaDomainId = "in";
                            }};, "exercitationem");            

            UpdateFailoverClusterAppResponse res = sdk.rootFailoverClusterFailoverClusterApp.updateFailoverClusterApp(req);

            if (res.failoverClusterAppSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
