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

            ComputeNodeGroupsAddNodesRequest req = new ComputeNodeGroupsAddNodesRequest("dignissimos", "provident", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsAddNodesRequest = new NodeGroupsAddNodesRequest() {{
                    additionalNodeCount = 386057;
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "adipisci";
                key = "quia";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "reprehenderit";
                uploadType = "enim";
                uploadProtocol = "laborum";
                userIp = "labore";
            }};            

            ComputeNodeGroupsAddNodesResponse res = sdk.nodeGroups.computeNodeGroupsAddNodes(req, new ComputeNodeGroupsAddNodesSecurity() {{
                option1 = new ComputeNodeGroupsAddNodesSecurityOption1("animi", "magni") {{
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

            ComputeNodeGroupsAggregatedListRequest req = new ComputeNodeGroupsAggregatedListRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "ducimus";
                filter = "nobis";
                includeAllScopes = false;
                key = "corporis";
                maxResults = 115012L;
                oauthToken = "recusandae";
                orderBy = "dolores";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "voluptates";
                returnPartialSuccess = false;
                uploadType = "iusto";
                uploadProtocol = "molestiae";
                userIp = "optio";
            }};            

            ComputeNodeGroupsAggregatedListResponse res = sdk.nodeGroups.computeNodeGroupsAggregatedList(req, new ComputeNodeGroupsAggregatedListSecurity() {{
                option1 = new ComputeNodeGroupsAggregatedListSecurityOption1("sit", "necessitatibus") {{
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

            ComputeNodeGroupsDeleteRequest req = new ComputeNodeGroupsDeleteRequest("autem", "recusandae", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "dolorem";
                key = "ratione";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "pariatur";
                uploadType = "minus";
                uploadProtocol = "ipsam";
                userIp = "harum";
            }};            

            ComputeNodeGroupsDeleteResponse res = sdk.nodeGroups.computeNodeGroupsDelete(req, new ComputeNodeGroupsDeleteSecurity() {{
                option1 = new ComputeNodeGroupsDeleteSecurityOption1("beatae", "aperiam") {{
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

            ComputeNodeGroupsDeleteNodesRequest req = new ComputeNodeGroupsDeleteNodesRequest("ipsum", "voluptatem", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroupsDeleteNodesRequest = new NodeGroupsDeleteNodesRequest() {{
                    nodes = new String[]{{
                        add("corrupti"),
                        add("error"),
                        add("excepturi"),
                    }};
                }};;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "minus";
                key = "aliquid";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "quisquam";
                uploadType = "dicta";
                uploadProtocol = "non";
                userIp = "sapiente";
            }};            

            ComputeNodeGroupsDeleteNodesResponse res = sdk.nodeGroups.computeNodeGroupsDeleteNodes(req, new ComputeNodeGroupsDeleteNodesSecurity() {{
                option1 = new ComputeNodeGroupsDeleteNodesSecurityOption1("maiores", "quasi") {{
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

            ComputeNodeGroupsGetRequest req = new ComputeNodeGroupsGetRequest("molestias", "molestiae", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "tempora";
                key = "consequatur";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "laboriosam";
                uploadProtocol = "velit";
                userIp = "quasi";
            }};            

            ComputeNodeGroupsGetResponse res = sdk.nodeGroups.computeNodeGroupsGet(req, new ComputeNodeGroupsGetSecurity() {{
                option1 = new ComputeNodeGroupsGetSecurityOption1("fuga", "dicta") {{
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

            ComputeNodeGroupsGetIamPolicyRequest req = new ComputeNodeGroupsGetIamPolicyRequest("laboriosam", "ex", "voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "eaque";
                key = "soluta";
                oauthToken = "cumque";
                optionsRequestedPolicyVersion = 871350L;
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "nihil";
                uploadProtocol = "saepe";
                userIp = "ad";
            }};            

            ComputeNodeGroupsGetIamPolicyResponse res = sdk.nodeGroups.computeNodeGroupsGetIamPolicy(req, new ComputeNodeGroupsGetIamPolicySecurity() {{
                option1 = new ComputeNodeGroupsGetIamPolicySecurityOption1("consequatur", "recusandae") {{
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
import org.openapis.openapi.models.shared.NodeGroupMaintenancePolicyEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenanceWindow;
import org.openapis.openapi.models.shared.NodeGroupStatusEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsInsertRequest req = new ComputeNodeGroupsInsertRequest(654186L, "modi", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroup = new NodeGroup() {{
                    autoscalingPolicy = new NodeGroupAutoscalingPolicy() {{
                        maxNodes = 69879;
                        minNodes = 19730;
                        mode = NodeGroupAutoscalingPolicyModeEnum.MODE_UNSPECIFIED;
                    }};;
                    creationTimestamp = "porro";
                    description = "ab";
                    fingerprint = "ipsum";
                    id = "quos";
                    kind = "tempore";
                    locationHint = "aliquam";
                    maintenancePolicy = NodeGroupMaintenancePolicyEnum.MAINTENANCE_POLICY_UNSPECIFIED;
                    maintenanceWindow = new NodeGroupMaintenanceWindow() {{
                        maintenanceDuration = new Duration() {{
                            nanos = 166277;
                            seconds = "natus";
                        }};;
                        startTime = "fugit";
                    }};;
                    name = "Dr. Lora Hane";
                    nodeTemplate = "nemo";
                    selfLink = "illo";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("fugit", new ShareSettingsProjectConfig() {{
                                projectId = "praesentium";
                            }});
                            put("quam", new ShareSettingsProjectConfig() {{
                                projectId = "animi";
                            }});
                            put("neque", new ShareSettingsProjectConfig() {{
                                projectId = "consectetur";
                            }});
                        }};
                        projects = new String[]{{
                            add("corrupti"),
                            add("voluptas"),
                            add("eligendi"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.SPECIFIC_PROJECTS;
                    }};;
                    size = 187798;
                    status = NodeGroupStatusEnum.INVALID;
                    zone = "possimus";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "fugit";
                key = "in";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "consequatur";
                uploadType = "autem";
                uploadProtocol = "nemo";
                userIp = "adipisci";
            }};            

            ComputeNodeGroupsInsertResponse res = sdk.nodeGroups.computeNodeGroupsInsert(req, new ComputeNodeGroupsInsertSecurity() {{
                option1 = new ComputeNodeGroupsInsertSecurityOption1("excepturi", "consequatur") {{
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

            ComputeNodeGroupsListRequest req = new ComputeNodeGroupsListRequest("sed", "incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "assumenda";
                filter = "alias";
                key = "a";
                maxResults = 787928L;
                oauthToken = "commodi";
                orderBy = "aut";
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "doloribus";
                uploadProtocol = "laudantium";
                userIp = "hic";
            }};            

            ComputeNodeGroupsListResponse res = sdk.nodeGroups.computeNodeGroupsList(req, new ComputeNodeGroupsListSecurity() {{
                option1 = new ComputeNodeGroupsListSecurityOption1("eveniet", "aut") {{
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

            ComputeNodeGroupsListNodesRequest req = new ComputeNodeGroupsListNodesRequest("officiis", "eaque", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "fugit";
                filter = "exercitationem";
                key = "debitis";
                maxResults = 134276L;
                oauthToken = "occaecati";
                orderBy = "repellendus";
                pageToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "excepturi";
                returnPartialSuccess = false;
                uploadType = "temporibus";
                uploadProtocol = "non";
                userIp = "excepturi";
            }};            

            ComputeNodeGroupsListNodesResponse res = sdk.nodeGroups.computeNodeGroupsListNodes(req, new ComputeNodeGroupsListNodesSecurity() {{
                option1 = new ComputeNodeGroupsListNodesSecurityOption1("possimus", "blanditiis") {{
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
import org.openapis.openapi.models.shared.NodeGroupMaintenancePolicyEnum;
import org.openapis.openapi.models.shared.NodeGroupMaintenanceWindow;
import org.openapis.openapi.models.shared.NodeGroupStatusEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGroupsPatchRequest req = new ComputeNodeGroupsPatchRequest("esse", "omnis", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroup1 = new NodeGroup() {{
                    autoscalingPolicy = new NodeGroupAutoscalingPolicy() {{
                        maxNodes = 153296;
                        minNodes = 912237;
                        mode = NodeGroupAutoscalingPolicyModeEnum.OFF;
                    }};;
                    creationTimestamp = "eaque";
                    description = "inventore";
                    fingerprint = "labore";
                    id = "deserunt";
                    kind = "consectetur";
                    locationHint = "sequi";
                    maintenancePolicy = NodeGroupMaintenancePolicyEnum.RESTART_IN_PLACE;
                    maintenanceWindow = new NodeGroupMaintenanceWindow() {{
                        maintenanceDuration = new Duration() {{
                            nanos = 594111;
                            seconds = "iusto";
                        }};;
                        startTime = "consequatur";
                    }};;
                    name = "Billy Rempel";
                    nodeTemplate = "veritatis";
                    selfLink = "rerum";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("cum", new ShareSettingsProjectConfig() {{
                                projectId = "consectetur";
                            }});
                            put("doloremque", new ShareSettingsProjectConfig() {{
                                projectId = "necessitatibus";
                            }});
                            put("possimus", new ShareSettingsProjectConfig() {{
                                projectId = "fuga";
                            }});
                            put("dolor", new ShareSettingsProjectConfig() {{
                                projectId = "sapiente";
                            }});
                        }};
                        projects = new String[]{{
                            add("eveniet"),
                            add("veniam"),
                            add("vero"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.LOCAL;
                    }};;
                    size = 577773;
                    status = NodeGroupStatusEnum.CREATING;
                    zone = "delectus";
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "voluptate";
                key = "ducimus";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "rerum";
                requestId = "iusto";
                uploadType = "deserunt";
                uploadProtocol = "asperiores";
                userIp = "ab";
            }};            

            ComputeNodeGroupsPatchResponse res = sdk.nodeGroups.computeNodeGroupsPatch(req, new ComputeNodeGroupsPatchSecurity() {{
                option1 = new ComputeNodeGroupsPatchSecurityOption1("tempore", "suscipit") {{
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

            ComputeNodeGroupsSetIamPolicyRequest req = new ComputeNodeGroupsSetIamPolicyRequest("neque", "eveniet", "placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "alias";
                            condition = new Expr() {{
                                description = "atque";
                                expression = "aperiam";
                                location = "asperiores";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("consequatur"),
                                add("impedit"),
                                add("aperiam"),
                            }};
                            role = "ad";
                        }}),
                        add(new Binding() {{
                            bindingId = "voluptas";
                            condition = new Expr() {{
                                description = "adipisci";
                                expression = "autem";
                                location = "porro";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("illum"),
                            }};
                            role = "ut";
                        }}),
                        add(new Binding() {{
                            bindingId = "quae";
                            condition = new Expr() {{
                                description = "ipsam";
                                expression = "occaecati";
                                location = "error";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("minus"),
                                add("ad"),
                            }};
                            role = "maxime";
                        }}),
                        add(new Binding() {{
                            bindingId = "reprehenderit";
                            condition = new Expr() {{
                                description = "inventore";
                                expression = "in";
                                location = "vel";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("enim"),
                                add("provident"),
                            }};
                            role = "nihil";
                        }}),
                    }};
                    etag = "maiores";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quasi"),
                                            add("excepturi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("blanditiis"),
                                            add("quo"),
                                            add("corrupti"),
                                            add("numquam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("impedit"),
                                }};
                                service = "alias";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "aliquid";
                                condition = new Expr() {{
                                    description = "minima";
                                    expression = "fugiat";
                                    location = "sint";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("labore"),
                                    add("nobis"),
                                    add("atque"),
                                    add("eligendi"),
                                }};
                                role = "perspiciatis";
                            }}),
                        }};
                        etag = "delectus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "quae";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("numquam"),
                                        }};
                                    }}),
                                }};
                                description = "illum";
                                ins = new String[]{{
                                    add("officia"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Jake VonRueden";
                                                    value = "deleniti";
                                                }}),
                                            }};
                                            field = "necessitatibus";
                                            metric = "quisquam";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Andy Fahey";
                                                    value = "sint";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Ora Balistreri V";
                                                    value = "expedita";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Martha Zulauf";
                                                    value = "modi";
                                                }}),
                                            }};
                                            field = "temporibus";
                                            metric = "architecto";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Billy Langosh";
                                                    value = "ab";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "expedita";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lawrence Moore";
                                                    value = "consectetur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ida McKenzie";
                                                    value = "atque";
                                                }}),
                                            }};
                                            field = "dolore";
                                            metric = "repudiandae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("pariatur"),
                                    add("soluta"),
                                }};
                                permissions = new String[]{{
                                    add("ullam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "nostrum";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("voluptas"),
                                            add("placeat"),
                                            add("at"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "dolorum";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("veniam"),
                                            add("minima"),
                                        }};
                                    }}),
                                }};
                                description = "occaecati";
                                ins = new String[]{{
                                    add("accusamus"),
                                    add("cumque"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bob Christiansen";
                                                    value = "sapiente";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Matt Koepp";
                                                    value = "ex";
                                                }}),
                                            }};
                                            field = "optio";
                                            metric = "eos";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Erick Heller";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                            field = "iure";
                                            metric = "accusamus";
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
                                                    name = "Emmett Becker";
                                                    value = "pariatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Thomas Fritsch";
                                                    value = "cupiditate";
                                                }}),
                                            }};
                                            field = "officiis";
                                            metric = "fuga";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("sunt"),
                                    add("deleniti"),
                                    add("fugit"),
                                }};
                                permissions = new String[]{{
                                    add("aperiam"),
                                    add("nesciunt"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "laborum";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "occaecati";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("provident"),
                                        }};
                                    }}),
                                }};
                                description = "necessitatibus";
                                ins = new String[]{{
                                    add("illum"),
                                    add("sunt"),
                                    add("eligendi"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Emily Lueilwitz";
                                                    value = "quidem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jermaine Smith";
                                                    value = "officiis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rogelio Moore";
                                                    value = "quisquam";
                                                }}),
                                            }};
                                            field = "magnam";
                                            metric = "reiciendis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Thelma Beier";
                                                    value = "vel";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Delores Schowalter";
                                                    value = "beatae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marty Schneider";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Reginald Altenwerth";
                                                    value = "exercitationem";
                                                }}),
                                            }};
                                            field = "dicta";
                                            metric = "illum";
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
                                                    name = "Felix Renner";
                                                    value = "consequuntur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Frankie Deckow";
                                                    value = "iure";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jan Harris";
                                                    value = "soluta";
                                                }}),
                                            }};
                                            field = "corrupti";
                                            metric = "reprehenderit";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jeffrey Gleichner";
                                                    value = "architecto";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Anita Kassulke";
                                                    value = "occaecati";
                                                }}),
                                            }};
                                            field = "ratione";
                                            metric = "fugiat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("dicta"),
                                    add("aperiam"),
                                    add("alias"),
                                }};
                                permissions = new String[]{{
                                    add("perferendis"),
                                }};
                            }}),
                        }};
                        version = 117538;
                    }};;
                }};;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "optio";
                fields = "facere";
                key = "dicta";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "neque";
                uploadProtocol = "quasi";
                userIp = "commodi";
            }};            

            ComputeNodeGroupsSetIamPolicyResponse res = sdk.nodeGroups.computeNodeGroupsSetIamPolicy(req, new ComputeNodeGroupsSetIamPolicySecurity() {{
                option1 = new ComputeNodeGroupsSetIamPolicySecurityOption1("quae", "rerum") {{
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

            ComputeNodeGroupsSetNodeTemplateRequest req = new ComputeNodeGroupsSetNodeTemplateRequest("consectetur", "debitis", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsSetNodeTemplateRequest = new NodeGroupsSetNodeTemplateRequest() {{
                    nodeTemplate = "unde";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "perferendis";
                key = "mollitia";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "mollitia";
                uploadType = "voluptatibus";
                uploadProtocol = "quo";
                userIp = "ducimus";
            }};            

            ComputeNodeGroupsSetNodeTemplateResponse res = sdk.nodeGroups.computeNodeGroupsSetNodeTemplate(req, new ComputeNodeGroupsSetNodeTemplateSecurity() {{
                option1 = new ComputeNodeGroupsSetNodeTemplateSecurityOption1("est", "deleniti") {{
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

            ComputeNodeGroupsSimulateMaintenanceEventRequest req = new ComputeNodeGroupsSimulateMaintenanceEventRequest("ea", "esse", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsSimulateMaintenanceEventRequest = new NodeGroupsSimulateMaintenanceEventRequest() {{
                    nodes = new String[]{{
                        add("quis"),
                        add("ipsa"),
                        add("accusantium"),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "ut";
                key = "minus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "nihil";
                requestId = "dolores";
                uploadType = "eveniet";
                uploadProtocol = "quibusdam";
                userIp = "ex";
            }};            

            ComputeNodeGroupsSimulateMaintenanceEventResponse res = sdk.nodeGroups.computeNodeGroupsSimulateMaintenanceEvent(req, new ComputeNodeGroupsSimulateMaintenanceEventSecurity() {{
                option1 = new ComputeNodeGroupsSimulateMaintenanceEventSecurityOption1("optio", "a") {{
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

            ComputeNodeGroupsTestIamPermissionsRequest req = new ComputeNodeGroupsTestIamPermissionsRequest("voluptas", "qui", "dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("corporis"),
                        add("nostrum"),
                        add("ea"),
                        add("architecto"),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "doloremque";
                key = "non";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "aspernatur";
                uploadProtocol = "doloribus";
                userIp = "ducimus";
            }};            

            ComputeNodeGroupsTestIamPermissionsResponse res = sdk.nodeGroups.computeNodeGroupsTestIamPermissions(req, new ComputeNodeGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeNodeGroupsTestIamPermissionsSecurityOption1("facilis", "minima") {{
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
