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

            ComputeNodeGroupsAddNodesRequest req = new ComputeNodeGroupsAddNodesRequest("saepe", "dicta", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsAddNodesRequest = new NodeGroupsAddNodesRequest() {{
                    additionalNodeCount = 397731;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "fugit";
                key = "accusamus";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "totam";
                uploadType = "eligendi";
                uploadProtocol = "iure";
                userIp = "quis";
            }};            

            ComputeNodeGroupsAddNodesResponse res = sdk.nodeGroups.computeNodeGroupsAddNodes(req, new ComputeNodeGroupsAddNodesSecurity() {{
                option1 = new ComputeNodeGroupsAddNodesSecurityOption1("distinctio", "alias") {{
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

            ComputeNodeGroupsAggregatedListRequest req = new ComputeNodeGroupsAggregatedListRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "amet";
                filter = "excepturi";
                includeAllScopes = false;
                key = "laudantium";
                maxResults = 681434L;
                oauthToken = "voluptatem";
                orderBy = "soluta";
                pageToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "in";
                returnPartialSuccess = false;
                uploadType = "eius";
                uploadProtocol = "eum";
                userIp = "beatae";
            }};            

            ComputeNodeGroupsAggregatedListResponse res = sdk.nodeGroups.computeNodeGroupsAggregatedList(req, new ComputeNodeGroupsAggregatedListSecurity() {{
                option1 = new ComputeNodeGroupsAggregatedListSecurityOption1("nihil", "quibusdam") {{
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

            ComputeNodeGroupsDeleteRequest req = new ComputeNodeGroupsDeleteRequest("nulla", "sint", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "ut";
                key = "numquam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                requestId = "eius";
                uploadType = "itaque";
                uploadProtocol = "expedita";
                userIp = "neque";
            }};            

            ComputeNodeGroupsDeleteResponse res = sdk.nodeGroups.computeNodeGroupsDelete(req, new ComputeNodeGroupsDeleteSecurity() {{
                option1 = new ComputeNodeGroupsDeleteSecurityOption1("cum", "ipsum") {{
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

            ComputeNodeGroupsDeleteNodesRequest req = new ComputeNodeGroupsDeleteNodesRequest("quasi", "eligendi", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroupsDeleteNodesRequest = new NodeGroupsDeleteNodesRequest() {{
                    nodes = new String[]{{
                        add("neque"),
                    }};
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "aliquam";
                key = "aperiam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "deleniti";
                requestId = "esse";
                uploadType = "iusto";
                uploadProtocol = "explicabo";
                userIp = "cumque";
            }};            

            ComputeNodeGroupsDeleteNodesResponse res = sdk.nodeGroups.computeNodeGroupsDeleteNodes(req, new ComputeNodeGroupsDeleteNodesSecurity() {{
                option1 = new ComputeNodeGroupsDeleteNodesSecurityOption1("ipsam", "consectetur") {{
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

            ComputeNodeGroupsGetRequest req = new ComputeNodeGroupsGetRequest("ad", "itaque", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "sapiente";
                key = "iure";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "non";
                uploadProtocol = "quis";
                userIp = "labore";
            }};            

            ComputeNodeGroupsGetResponse res = sdk.nodeGroups.computeNodeGroupsGet(req, new ComputeNodeGroupsGetSecurity() {{
                option1 = new ComputeNodeGroupsGetSecurityOption1("earum", "natus") {{
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

            ComputeNodeGroupsGetIamPolicyRequest req = new ComputeNodeGroupsGetIamPolicyRequest("blanditiis", "sequi", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "tenetur";
                key = "accusantium";
                oauthToken = "debitis";
                optionsRequestedPolicyVersion = 349710L;
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "voluptatibus";
                uploadProtocol = "enim";
                userIp = "eius";
            }};            

            ComputeNodeGroupsGetIamPolicyResponse res = sdk.nodeGroups.computeNodeGroupsGetIamPolicy(req, new ComputeNodeGroupsGetIamPolicySecurity() {{
                option1 = new ComputeNodeGroupsGetIamPolicySecurityOption1("necessitatibus", "nam") {{
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

            ComputeNodeGroupsInsertRequest req = new ComputeNodeGroupsInsertRequest(964137L, "quia", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeGroup = new NodeGroup() {{
                    autoscalingPolicy = new NodeGroupAutoscalingPolicy() {{
                        maxNodes = 733429;
                        minNodes = 296491;
                        mode = NodeGroupAutoscalingPolicyModeEnum.OFF;
                    }};;
                    creationTimestamp = "aut";
                    description = "cupiditate";
                    fingerprint = "odio";
                    id = "earum";
                    kind = "reiciendis";
                    locationHint = "est";
                    maintenancePolicy = NodeGroupMaintenancePolicyEnum.MAINTENANCE_POLICY_UNSPECIFIED;
                    maintenanceWindow = new NodeGroupMaintenanceWindow() {{
                        maintenanceDuration = new Duration() {{
                            nanos = 295906;
                            seconds = "est";
                        }};;
                        startTime = "voluptatum";
                    }};;
                    name = "Abel Weimann DDS";
                    nodeTemplate = "quibusdam";
                    selfLink = "quibusdam";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("voluptatum", new ShareSettingsProjectConfig() {{
                                projectId = "enim";
                            }});
                        }};
                        shareType = ShareSettingsShareTypeEnum.LOCAL;
                    }};;
                    size = 742652;
                    status = NodeGroupStatusEnum.READY;
                    zone = "ipsam";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "soluta";
                key = "impedit";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "quam";
                uploadType = "blanditiis";
                uploadProtocol = "commodi";
                userIp = "eaque";
            }};            

            ComputeNodeGroupsInsertResponse res = sdk.nodeGroups.computeNodeGroupsInsert(req, new ComputeNodeGroupsInsertSecurity() {{
                option1 = new ComputeNodeGroupsInsertSecurityOption1("similique", "voluptatibus") {{
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

            ComputeNodeGroupsListRequest req = new ComputeNodeGroupsListRequest("voluptates", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "corporis";
                filter = "ab";
                key = "nesciunt";
                maxResults = 179221L;
                oauthToken = "repellendus";
                orderBy = "ipsam";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "sit";
                returnPartialSuccess = false;
                uploadType = "quos";
                uploadProtocol = "voluptas";
                userIp = "porro";
            }};            

            ComputeNodeGroupsListResponse res = sdk.nodeGroups.computeNodeGroupsList(req, new ComputeNodeGroupsListSecurity() {{
                option1 = new ComputeNodeGroupsListSecurityOption1("illo", "sit") {{
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

            ComputeNodeGroupsListNodesRequest req = new ComputeNodeGroupsListNodesRequest("culpa", "blanditiis", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "possimus";
                filter = "modi";
                key = "ex";
                maxResults = 394404L;
                oauthToken = "ipsam";
                orderBy = "facilis";
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "omnis";
                returnPartialSuccess = false;
                uploadType = "reprehenderit";
                uploadProtocol = "qui";
                userIp = "ipsam";
            }};            

            ComputeNodeGroupsListNodesResponse res = sdk.nodeGroups.computeNodeGroupsListNodes(req, new ComputeNodeGroupsListNodesSecurity() {{
                option1 = new ComputeNodeGroupsListNodesSecurityOption1("perspiciatis", "molestias") {{
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

            ComputeNodeGroupsPatchRequest req = new ComputeNodeGroupsPatchRequest("reprehenderit", "corporis", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroup1 = new NodeGroup() {{
                    autoscalingPolicy = new NodeGroupAutoscalingPolicy() {{
                        maxNodes = 9183;
                        minNodes = 758285;
                        mode = NodeGroupAutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                    }};;
                    creationTimestamp = "eligendi";
                    description = "facilis";
                    fingerprint = "quisquam";
                    id = "in";
                    kind = "atque";
                    locationHint = "libero";
                    maintenancePolicy = NodeGroupMaintenancePolicyEnum.RESTART_IN_PLACE;
                    maintenanceWindow = new NodeGroupMaintenanceWindow() {{
                        maintenanceDuration = new Duration() {{
                            nanos = 144288;
                            seconds = "modi";
                        }};;
                        startTime = "rem";
                    }};;
                    name = "Benny Jacobson";
                    nodeTemplate = "distinctio";
                    selfLink = "magni";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("accusantium", new ShareSettingsProjectConfig() {{
                                projectId = "distinctio";
                            }});
                            put("et", new ShareSettingsProjectConfig() {{
                                projectId = "quo";
                            }});
                        }};
                        shareType = ShareSettingsShareTypeEnum.LOCAL;
                    }};;
                    size = 430025;
                    status = NodeGroupStatusEnum.READY;
                    zone = "perspiciatis";
                }};;
                accessToken = "optio";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "modi";
                key = "omnis";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "fugiat";
                userIp = "error";
            }};            

            ComputeNodeGroupsPatchResponse res = sdk.nodeGroups.computeNodeGroupsPatch(req, new ComputeNodeGroupsPatchSecurity() {{
                option1 = new ComputeNodeGroupsPatchSecurityOption1("necessitatibus", "ullam") {{
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

            ComputeNodeGroupsSetIamPolicyRequest req = new ComputeNodeGroupsSetIamPolicyRequest("deleniti", "fugiat", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "autem";
                            condition = new Expr() {{
                                description = "voluptas";
                                expression = "nemo";
                                location = "optio";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("dolores"),
                            }};
                            role = "cumque";
                        }}),
                    }};
                    etag = "voluptate";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quae"),
                                            add("at"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("sunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("iusto"),
                                }};
                                service = "aliquid";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consequuntur"),
                                            add("nulla"),
                                            add("facere"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("molestiae"),
                                    add("blanditiis"),
                                    add("necessitatibus"),
                                }};
                                service = "in";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                            add("quos"),
                                            add("quo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ab"),
                                    add("quos"),
                                }};
                                service = "modi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officiis"),
                                            add("inventore"),
                                            add("a"),
                                            add("deleniti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("id"),
                                    add("illo"),
                                    add("aut"),
                                    add("ratione"),
                                }};
                                service = "deserunt";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "voluptatum";
                                condition = new Expr() {{
                                    description = "aut";
                                    expression = "laboriosam";
                                    location = "recusandae";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("commodi"),
                                }};
                                role = "ipsa";
                            }}),
                            add(new Binding() {{
                                bindingId = "suscipit";
                                condition = new Expr() {{
                                    description = "ratione";
                                    expression = "cupiditate";
                                    location = "iste";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("beatae"),
                                    add("iusto"),
                                    add("cum"),
                                    add("deleniti"),
                                }};
                                role = "sunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "reprehenderit";
                                condition = new Expr() {{
                                    description = "ullam";
                                    expression = "deleniti";
                                    location = "repellendus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("veniam"),
                                    add("expedita"),
                                }};
                                role = "impedit";
                            }}),
                        }};
                        etag = "totam";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "dignissimos";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("omnis"),
                                            add("cupiditate"),
                                            add("dolor"),
                                            add("illo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "molestias";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("aperiam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "tenetur";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "culpa";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("dolore"),
                                            add("doloremque"),
                                            add("animi"),
                                        }};
                                    }}),
                                }};
                                description = "quia";
                                ins = new String[]{{
                                    add("repudiandae"),
                                    add("id"),
                                    add("aperiam"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Latoya Kreiger";
                                                    value = "sequi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kendra Oberbrunner";
                                                    value = "incidunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ellis Reichert II";
                                                    value = "provident";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Douglas Mann";
                                                    value = "quis";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "perferendis";
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
                                                    name = "Angelo Gutkowski PhD";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            field = "officiis";
                                            metric = "repellendus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("corporis"),
                                    add("placeat"),
                                    add("voluptatibus"),
                                }};
                                permissions = new String[]{{
                                    add("eum"),
                                }};
                            }}),
                        }};
                        version = 121219;
                    }};;
                }};;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "perspiciatis";
                key = "ratione";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "ullam";
                uploadProtocol = "odio";
                userIp = "exercitationem";
            }};            

            ComputeNodeGroupsSetIamPolicyResponse res = sdk.nodeGroups.computeNodeGroupsSetIamPolicy(req, new ComputeNodeGroupsSetIamPolicySecurity() {{
                option1 = new ComputeNodeGroupsSetIamPolicySecurityOption1("soluta", "nulla") {{
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

            ComputeNodeGroupsSetNodeTemplateRequest req = new ComputeNodeGroupsSetNodeTemplateRequest("iure", "doloremque", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsSetNodeTemplateRequest = new NodeGroupsSetNodeTemplateRequest() {{
                    nodeTemplate = "est";
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "eius";
                key = "unde";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "pariatur";
                requestId = "dicta";
                uploadType = "quod";
                uploadProtocol = "quod";
                userIp = "assumenda";
            }};            

            ComputeNodeGroupsSetNodeTemplateResponse res = sdk.nodeGroups.computeNodeGroupsSetNodeTemplate(req, new ComputeNodeGroupsSetNodeTemplateSecurity() {{
                option1 = new ComputeNodeGroupsSetNodeTemplateSecurityOption1("illum", "ipsum") {{
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

            ComputeNodeGroupsSimulateMaintenanceEventRequest req = new ComputeNodeGroupsSimulateMaintenanceEventRequest("ea", "magni", "rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupsSimulateMaintenanceEventRequest = new NodeGroupsSimulateMaintenanceEventRequest() {{
                    nodes = new String[]{{
                        add("sint"),
                        add("qui"),
                        add("amet"),
                        add("natus"),
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "quis";
                key = "a";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "deleniti";
                uploadType = "excepturi";
                uploadProtocol = "unde";
                userIp = "optio";
            }};            

            ComputeNodeGroupsSimulateMaintenanceEventResponse res = sdk.nodeGroups.computeNodeGroupsSimulateMaintenanceEvent(req, new ComputeNodeGroupsSimulateMaintenanceEventSecurity() {{
                option1 = new ComputeNodeGroupsSimulateMaintenanceEventSecurityOption1("asperiores", "numquam") {{
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

            ComputeNodeGroupsTestIamPermissionsRequest req = new ComputeNodeGroupsTestIamPermissionsRequest("delectus", "delectus", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("expedita"),
                        add("officiis"),
                        add("impedit"),
                    }};
                }};;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                fields = "beatae";
                key = "rem";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "vitae";
                uploadProtocol = "eveniet";
                userIp = "expedita";
            }};            

            ComputeNodeGroupsTestIamPermissionsResponse res = sdk.nodeGroups.computeNodeGroupsTestIamPermissions(req, new ComputeNodeGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeNodeGroupsTestIamPermissionsSecurityOption1("consequatur", "beatae") {{
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
