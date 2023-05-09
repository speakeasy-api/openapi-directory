# nodeGroups

### Available Operations

* [computeNodeGroupsAddNodes](#computenodegroupsaddnodes) - Adds specified number of nodes to the node group.
* [computeNodeGroupsAggregatedList](#computenodegroupsaggregatedlist) - Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.
* [computeNodeGroupsDelete](#computenodegroupsdelete) - Deletes the specified NodeGroup resource.
* [computeNodeGroupsDeleteNodes](#computenodegroupsdeletenodes) - Deletes specified nodes from the node group.
* [computeNodeGroupsGet](#computenodegroupsget) - Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.
* [computeNodeGroupsGetIamPolicy](#computenodegroupsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNodeGroupsInsert](#computenodegroupsinsert) - Creates a NodeGroup resource in the specified project using the data included in the request.
* [computeNodeGroupsList](#computenodegroupslist) - Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.
* [computeNodeGroupsListNodes](#computenodegroupslistnodes) - Lists nodes in the node group.
* [computeNodeGroupsPatch](#computenodegroupspatch) - Updates the specified node group.
* [computeNodeGroupsPerformMaintenance](#computenodegroupsperformmaintenance) - Perform maintenance on a subset of nodes in the node group.
* [computeNodeGroupsSetIamPolicy](#computenodegroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNodeGroupsSetNodeTemplate](#computenodegroupssetnodetemplate) - Updates the node template of the node group.
* [computeNodeGroupsSimulateMaintenanceEvent](#computenodegroupssimulatemaintenanceevent) - Simulates maintenance event on specified nodes from the node group.
* [computeNodeGroupsTestIamPermissions](#computenodegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNodeGroupsAddNodes

Adds specified number of nodes to the node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAddNodesRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAddNodesResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAddNodesSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAddNodesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAddNodesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeGroupsAddNodesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsAddNodesRequest req = new ComputeNodeGroupsAddNodesRequest("excepturi", "commodi", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsAddNodesRequest = new NodeGroupsAddNodesRequest() {{
                    additionalNodeCount = 189375;
                }};;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "aspernatur";
                key = "ex";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "neque";
                uploadType = "sequi";
                uploadProtocol = "optio";
                userIp = "magni";
            }};            

            ComputeNodeGroupsAddNodesResponse res = sdk.nodeGroups.computeNodeGroupsAddNodes(req, new ComputeNodeGroupsAddNodesSecurity() {{
                option1 = new ComputeNodeGroupsAddNodesSecurityOption1("fuga", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsAggregatedList

Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeGroupsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsAggregatedListRequest req = new ComputeNodeGroupsAggregatedListRequest("soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "eum";
                filter = "vitae";
                includeAllScopes = false;
                key = "placeat";
                maxResults = 258441L;
                oauthToken = "optio";
                orderBy = "optio";
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "fuga";
                returnPartialSuccess = false;
                uploadType = "officia";
                uploadProtocol = "consequuntur";
                userIp = "reiciendis";
            }};            

            ComputeNodeGroupsAggregatedListResponse res = sdk.nodeGroups.computeNodeGroupsAggregatedList(req, new ComputeNodeGroupsAggregatedListSecurity() {{
                option1 = new ComputeNodeGroupsAggregatedListSecurityOption1("totam", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeGroupAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGroupsDelete

Deletes the specified NodeGroup resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsDeleteRequest req = new ComputeNodeGroupsDeleteRequest("perferendis", "dolore", "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "optio";
                requestId = "tempore";
                uploadType = "quidem";
                uploadProtocol = "ad";
                userIp = "eos";
            }};            

            ComputeNodeGroupsDeleteResponse res = sdk.nodeGroups.computeNodeGroupsDelete(req, new ComputeNodeGroupsDeleteSecurity() {{
                option1 = new ComputeNodeGroupsDeleteSecurityOption1("eum", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsDeleteNodes

Deletes specified nodes from the node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteNodesRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteNodesResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteNodesSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteNodesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsDeleteNodesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeGroupsDeleteNodesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsDeleteNodesRequest req = new ComputeNodeGroupsDeleteNodesRequest("occaecati", "quod", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroupsDeleteNodesRequest = new NodeGroupsDeleteNodesRequest() {{
                    nodes = new String[]{{
                        add("porro"),
                        add("odio"),
                    }};
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "distinctio";
                key = "illum";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "nam";
                uploadType = "animi";
                uploadProtocol = "possimus";
                userIp = "illo";
            }};            

            ComputeNodeGroupsDeleteNodesResponse res = sdk.nodeGroups.computeNodeGroupsDeleteNodes(req, new ComputeNodeGroupsDeleteNodesSecurity() {{
                option1 = new ComputeNodeGroupsDeleteNodesSecurityOption1("fuga", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsGet

Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsGetRequest req = new ComputeNodeGroupsGetRequest("voluptates", "officiis", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "possimus";
                fields = "esse";
                key = "velit";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "vero";
                uploadProtocol = "provident";
                userIp = "porro";
            }};            

            ComputeNodeGroupsGetResponse res = sdk.nodeGroups.computeNodeGroupsGet(req, new ComputeNodeGroupsGetSecurity() {{
                option1 = new ComputeNodeGroupsGetSecurityOption1("laudantium", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGroupsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeGroupsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsGetIamPolicyRequest req = new ComputeNodeGroupsGetIamPolicyRequest("occaecati", "ad", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "mollitia";
                key = "odit";
                oauthToken = "eius";
                optionsRequestedPolicyVersion = 619638L;
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "corrupti";
                uploadProtocol = "delectus";
                userIp = "laborum";
            }};            

            ComputeNodeGroupsGetIamPolicyResponse res = sdk.nodeGroups.computeNodeGroupsGetIamPolicy(req, new ComputeNodeGroupsGetIamPolicySecurity() {{
                option1 = new ComputeNodeGroupsGetIamPolicySecurityOption1("iste", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsInsert

Creates a NodeGroup resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsInsertRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsInsertResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.NodeGroup;
import org.openapis.openapi.models.shared.NodeGroupAutoscalingPolicy;
import org.openapis.openapi.models.shared.NodeGroupAutoscalingPolicyModeEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenancePolicyEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenanceWindow;
import org.openapis.openapi.models.shared.NodeGroupStatusEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsFolderConfig;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsInsertRequest req = new ComputeNodeGroupsInsertRequest(331986L, "recusandae", "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroup = new NodeGroup() {{
                    autoscalingPolicy = new NodeGroupAutoscalingPolicy() {{
                        maxNodes = 264014;
                        minNodes = 12476;
                        mode = NodeGroupAutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                    }};;
                    creationTimestamp = "accusamus";
                    description = "optio";
                    fingerprint = "sunt";
                    id = "autem";
                    kind = "libero";
                    locationHint = "tempore";
                    maintenanceInterval = NodeGroupMaintenanceIntervalEnum.AS_NEEDED;
                    maintenancePolicy = NodeGroupMaintenancePolicyEnum.DEFAULT_;
                    maintenanceWindow = new NodeGroupMaintenanceWindow() {{
                        duration = "sunt";
                        maintenanceDuration = new Duration() {{
                            nanos = 782958;
                            seconds = "a";
                        }};;
                        startTime = "cum";
                    }};;
                    name = "Ms. Yolanda Bartell";
                    nodeTemplate = "cupiditate";
                    selfLink = "alias";
                    selfLinkWithId = "eos";
                    shareSettings = new ShareSettings() {{
                        folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                            put("nam", new ShareSettingsFolderConfig() {{
                                folderId = "numquam";
                            }});
                        }};
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("accusantium", new ShareSettingsProjectConfig() {{
                                projectId = "ducimus";
                            }});
                            put("omnis", new ShareSettingsProjectConfig() {{
                                projectId = "sunt";
                            }});
                            put("necessitatibus", new ShareSettingsProjectConfig() {{
                                projectId = "quibusdam";
                            }});
                            put("ea", new ShareSettingsProjectConfig() {{
                                projectId = "hic";
                            }});
                        }};
                        projects = new String[]{{
                            add("repellendus"),
                            add("dicta"),
                            add("molestias"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.SPECIFIC_PROJECTS;
                    }};;
                    size = 839746;
                    status = NodeGroupStatusEnum.READY;
                    zone = "voluptas";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "inventore";
                key = "reiciendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "voluptates";
                uploadType = "sapiente";
                uploadProtocol = "fugiat";
                userIp = "incidunt";
            }};            

            ComputeNodeGroupsInsertResponse res = sdk.nodeGroups.computeNodeGroupsInsert(req, new ComputeNodeGroupsInsertSecurity() {{
                option1 = new ComputeNodeGroupsInsertSecurityOption1("perspiciatis", "harum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsList

Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsListRequest req = new ComputeNodeGroupsListRequest("saepe", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "tenetur";
                filter = "illum";
                key = "excepturi";
                maxResults = 372202L;
                oauthToken = "eaque";
                orderBy = "omnis";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "exercitationem";
                returnPartialSuccess = false;
                uploadType = "eveniet";
                uploadProtocol = "quod";
                userIp = "hic";
            }};            

            ComputeNodeGroupsListResponse res = sdk.nodeGroups.computeNodeGroupsList(req, new ComputeNodeGroupsListSecurity() {{
                option1 = new ComputeNodeGroupsListSecurityOption1("sit", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGroupsListNodes

Lists nodes in the node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListNodesRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListNodesResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListNodesSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListNodesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListNodesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeGroupsListNodesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsListNodesRequest req = new ComputeNodeGroupsListNodesRequest("ex", "dolore", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "nam";
                filter = "id";
                key = "quod";
                maxResults = 304804L;
                oauthToken = "cumque";
                orderBy = "aut";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "doloribus";
                returnPartialSuccess = false;
                uploadType = "vitae";
                uploadProtocol = "porro";
                userIp = "quis";
            }};            

            ComputeNodeGroupsListNodesResponse res = sdk.nodeGroups.computeNodeGroupsListNodes(req, new ComputeNodeGroupsListNodesSecurity() {{
                option1 = new ComputeNodeGroupsListNodesSecurityOption1("doloribus", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeGroupsListNodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGroupsPatch

Updates the specified node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPatchRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPatchResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.NodeGroup;
import org.openapis.openapi.models.shared.NodeGroupAutoscalingPolicy;
import org.openapis.openapi.models.shared.NodeGroupAutoscalingPolicyModeEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenancePolicyEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenanceWindow;
import org.openapis.openapi.models.shared.NodeGroupStatusEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsFolderConfig;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsPatchRequest req = new ComputeNodeGroupsPatchRequest("tenetur", "tempore", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroup1 = new NodeGroup() {{
                    autoscalingPolicy = new NodeGroupAutoscalingPolicy() {{
                        maxNodes = 298367;
                        minNodes = 759611;
                        mode = NodeGroupAutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                    }};;
                    creationTimestamp = "ab";
                    description = "perferendis";
                    fingerprint = "assumenda";
                    id = "neque";
                    kind = "veritatis";
                    locationHint = "corrupti";
                    maintenanceInterval = NodeGroupMaintenanceIntervalEnum.RECURRENT;
                    maintenancePolicy = NodeGroupMaintenancePolicyEnum.DEFAULT_;
                    maintenanceWindow = new NodeGroupMaintenanceWindow() {{
                        duration = "enim";
                        maintenanceDuration = new Duration() {{
                            nanos = 378204;
                            seconds = "dolorem";
                        }};;
                        startTime = "perspiciatis";
                    }};;
                    name = "Gretchen Blick";
                    nodeTemplate = "quisquam";
                    selfLink = "porro";
                    selfLinkWithId = "omnis";
                    shareSettings = new ShareSettings() {{
                        folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                            put("quo", new ShareSettingsFolderConfig() {{
                                folderId = "asperiores";
                            }});
                            put("consequuntur", new ShareSettingsFolderConfig() {{
                                folderId = "impedit";
                            }});
                            put("temporibus", new ShareSettingsFolderConfig() {{
                                folderId = "libero";
                            }});
                        }};
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("ea", new ShareSettingsProjectConfig() {{
                                projectId = "magni";
                            }});
                            put("dicta", new ShareSettingsProjectConfig() {{
                                projectId = "nisi";
                            }});
                        }};
                        projects = new String[]{{
                            add("quasi"),
                            add("nulla"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.SPECIFIC_PROJECTS;
                    }};;
                    size = 335847;
                    status = NodeGroupStatusEnum.DELETING;
                    zone = "sunt";
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                fields = "omnis";
                key = "architecto";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "cumque";
                uploadType = "minus";
                uploadProtocol = "praesentium";
                userIp = "at";
            }};            

            ComputeNodeGroupsPatchResponse res = sdk.nodeGroups.computeNodeGroupsPatch(req, new ComputeNodeGroupsPatchSecurity() {{
                option1 = new ComputeNodeGroupsPatchSecurityOption1("cupiditate", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsPerformMaintenance

Perform maintenance on a subset of nodes in the node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPerformMaintenanceRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPerformMaintenanceResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPerformMaintenanceSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPerformMaintenanceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsPerformMaintenanceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeGroupsPerformMaintenanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsPerformMaintenanceRequest req = new ComputeNodeGroupsPerformMaintenanceRequest("accusantium", "voluptatibus", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroupsPerformMaintenanceRequest = new NodeGroupsPerformMaintenanceRequest() {{
                    nodes = new String[]{{
                        add("atque"),
                        add("architecto"),
                    }};
                    startTime = "adipisci";
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                fields = "ipsam";
                key = "corporis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "et";
                uploadType = "numquam";
                uploadProtocol = "natus";
                userIp = "illum";
            }};            

            ComputeNodeGroupsPerformMaintenanceResponse res = sdk.nodeGroups.computeNodeGroupsPerformMaintenance(req, new ComputeNodeGroupsPerformMaintenanceSecurity() {{
                option1 = new ComputeNodeGroupsPerformMaintenanceSecurityOption1("enim", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsSetIamPolicyRequest req = new ComputeNodeGroupsSetIamPolicyRequest("mollitia", "tempore", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "sequi";
                            condition = new Expr() {{
                                description = "delectus";
                                expression = "cupiditate";
                                location = "ab";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("sequi"),
                                add("harum"),
                                add("architecto"),
                                add("consequatur"),
                            }};
                            role = "optio";
                        }}),
                    }};
                    etag = "cum";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cum"),
                                            add("at"),
                                            add("quis"),
                                            add("consequuntur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("unde"),
                                    add("nostrum"),
                                    add("libero"),
                                    add("officiis"),
                                }};
                                service = "sequi";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "est";
                                condition = new Expr() {{
                                    description = "fugit";
                                    expression = "officia";
                                    location = "reprehenderit";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("beatae"),
                                }};
                                role = "tempora";
                            }}),
                        }};
                        etag = "voluptate";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "fugiat";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("architecto"),
                                            add("aliquid"),
                                        }};
                                    }}),
                                }};
                                description = "mollitia";
                                ins = new String[]{{
                                    add("quisquam"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheryl Borer";
                                                    value = "suscipit";
                                                }}),
                                            }};
                                            field = "adipisci";
                                            metric = "sequi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Betsy Baumbach";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Morris Dickens";
                                                    value = "aut";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Willard Stark";
                                                    value = "aliquid";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sandy Veum";
                                                    value = "ullam";
                                                }}),
                                            }};
                                            field = "quis";
                                            metric = "suscipit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Faith Kirlin IV";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "iure";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("aliquid"),
                                    add("sed"),
                                    add("voluptas"),
                                }};
                                permissions = new String[]{{
                                    add("magnam"),
                                    add("mollitia"),
                                    add("perferendis"),
                                    add("eveniet"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "eius";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("nobis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "tenetur";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("aut"),
                                            add("eius"),
                                            add("ullam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "asperiores";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("quis"),
                                            add("consequuntur"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "iure";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("cupiditate"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                }};
                                description = "odit";
                                ins = new String[]{{
                                    add("sunt"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Lula Mayer";
                                                    value = "doloribus";
                                                }}),
                                            }};
                                            field = "blanditiis";
                                            metric = "doloribus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Nina Pfeffer";
                                                    value = "repudiandae";
                                                }}),
                                            }};
                                            field = "ab";
                                            metric = "corrupti";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Stacey Rice DVM";
                                                    value = "molestiae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bobbie Jast";
                                                    value = "odio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Judith Morissette";
                                                    value = "saepe";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jesse Rath";
                                                    value = "minima";
                                                }}),
                                            }};
                                            field = "cum";
                                            metric = "tenetur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("dolores"),
                                }};
                                permissions = new String[]{{
                                    add("cum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "quasi";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("ipsum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "iusto";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("unde"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "nam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("maxime"),
                                            add("vero"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "consequuntur";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("inventore"),
                                            add("dolorum"),
                                            add("natus"),
                                            add("odit"),
                                        }};
                                    }}),
                                }};
                                description = "eius";
                                ins = new String[]{{
                                    add("sed"),
                                    add("natus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darren Haley PhD";
                                                    value = "sunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jackie Connelly";
                                                    value = "ipsam";
                                                }}),
                                            }};
                                            field = "esse";
                                            metric = "quasi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cristina Hermiston";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Phil Mann";
                                                    value = "assumenda";
                                                }}),
                                            }};
                                            field = "nemo";
                                            metric = "provident";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("eveniet"),
                                    add("et"),
                                    add("itaque"),
                                    add("quo"),
                                }};
                                permissions = new String[]{{
                                    add("doloremque"),
                                    add("quaerat"),
                                }};
                            }}),
                        }};
                        version = 107285;
                    }};;
                }};;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "libero";
                key = "ab";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "voluptates";
                uploadProtocol = "ad";
                userIp = "nisi";
            }};            

            ComputeNodeGroupsSetIamPolicyResponse res = sdk.nodeGroups.computeNodeGroupsSetIamPolicy(req, new ComputeNodeGroupsSetIamPolicySecurity() {{
                option1 = new ComputeNodeGroupsSetIamPolicySecurityOption1("ipsa", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsSetNodeTemplate

Updates the node template of the node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetNodeTemplateRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetNodeTemplateResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetNodeTemplateSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetNodeTemplateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSetNodeTemplateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeGroupsSetNodeTemplateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsSetNodeTemplateRequest req = new ComputeNodeGroupsSetNodeTemplateRequest("hic", "illo", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsSetNodeTemplateRequest = new NodeGroupsSetNodeTemplateRequest() {{
                    nodeTemplate = "cumque";
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "commodi";
                key = "reprehenderit";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "dolores";
                uploadType = "soluta";
                uploadProtocol = "rerum";
                userIp = "voluptatem";
            }};            

            ComputeNodeGroupsSetNodeTemplateResponse res = sdk.nodeGroups.computeNodeGroupsSetNodeTemplate(req, new ComputeNodeGroupsSetNodeTemplateSecurity() {{
                option1 = new ComputeNodeGroupsSetNodeTemplateSecurityOption1("porro", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsSimulateMaintenanceEvent

Simulates maintenance event on specified nodes from the node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSimulateMaintenanceEventRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSimulateMaintenanceEventResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSimulateMaintenanceEventSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSimulateMaintenanceEventSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsSimulateMaintenanceEventSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeGroupsSimulateMaintenanceEventRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsSimulateMaintenanceEventRequest req = new ComputeNodeGroupsSimulateMaintenanceEventRequest("sunt", "nobis", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroupsSimulateMaintenanceEventRequest = new NodeGroupsSimulateMaintenanceEventRequest() {{
                    nodes = new String[]{{
                        add("incidunt"),
                        add("soluta"),
                        add("recusandae"),
                    }};
                }};;
                accessToken = "neque";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "cupiditate";
                key = "consequatur";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "fugiat";
                uploadType = "placeat";
                uploadProtocol = "architecto";
                userIp = "eaque";
            }};            

            ComputeNodeGroupsSimulateMaintenanceEventResponse res = sdk.nodeGroups.computeNodeGroupsSimulateMaintenanceEvent(req, new ComputeNodeGroupsSimulateMaintenanceEventSecurity() {{
                option1 = new ComputeNodeGroupsSimulateMaintenanceEventSecurityOption1("voluptatum", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeNodeGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGroupsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNodeGroupsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNodeGroupsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNodeGroupsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeGroupsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeGroupsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsTestIamPermissionsRequest req = new ComputeNodeGroupsTestIamPermissionsRequest("neque", "fugit", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dolorum"),
                        add("aperiam"),
                        add("laboriosam"),
                        add("deserunt"),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "commodi";
                key = "sapiente";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "laboriosam";
                uploadProtocol = "optio";
                userIp = "doloribus";
            }};            

            ComputeNodeGroupsTestIamPermissionsResponse res = sdk.nodeGroups.computeNodeGroupsTestIamPermissions(req, new ComputeNodeGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeNodeGroupsTestIamPermissionsSecurityOption1("maxime", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
