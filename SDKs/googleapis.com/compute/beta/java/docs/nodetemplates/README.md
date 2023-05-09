# nodeTemplates

### Available Operations

* [computeNodeTemplatesAggregatedList](#computenodetemplatesaggregatedlist) - Retrieves an aggregated list of node templates.
* [computeNodeTemplatesDelete](#computenodetemplatesdelete) - Deletes the specified NodeTemplate resource.
* [computeNodeTemplatesGet](#computenodetemplatesget) - Returns the specified node template.
* [computeNodeTemplatesGetIamPolicy](#computenodetemplatesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNodeTemplatesInsert](#computenodetemplatesinsert) - Creates a NodeTemplate resource in the specified project using the data included in the request.
* [computeNodeTemplatesList](#computenodetemplateslist) - Retrieves a list of node templates available to the specified project.
* [computeNodeTemplatesSetIamPolicy](#computenodetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNodeTemplatesTestIamPermissions](#computenodetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNodeTemplatesAggregatedList

Retrieves an aggregated list of node templates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesAggregatedListRequest req = new ComputeNodeTemplatesAggregatedListRequest("unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "aliquam";
                filter = "voluptas";
                includeAllScopes = false;
                key = "magnam";
                maxResults = 139056L;
                oauthToken = "nobis";
                orderBy = "occaecati";
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "ipsum";
                returnPartialSuccess = false;
                uploadType = "dignissimos";
                uploadProtocol = "placeat";
                userIp = "molestias";
            }};            

            ComputeNodeTemplatesAggregatedListResponse res = sdk.nodeTemplates.computeNodeTemplatesAggregatedList(req, new ComputeNodeTemplatesAggregatedListSecurity() {{
                option1 = new ComputeNodeTemplatesAggregatedListSecurityOption1("aliquam", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeTemplateAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeTemplatesDelete

Deletes the specified NodeTemplate resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesDeleteRequest req = new ComputeNodeTemplatesDeleteRequest("sequi", "at", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "illo";
                key = "blanditiis";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "natus";
                uploadType = "odio";
                uploadProtocol = "corrupti";
                userIp = "corrupti";
            }};            

            ComputeNodeTemplatesDeleteResponse res = sdk.nodeTemplates.computeNodeTemplatesDelete(req, new ComputeNodeTemplatesDeleteSecurity() {{
                option1 = new ComputeNodeTemplatesDeleteSecurityOption1("praesentium", "repellendus") {{
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

## computeNodeTemplatesGet

Returns the specified node template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesGetRequest req = new ComputeNodeTemplatesGetRequest("illo", "ullam", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "itaque";
                key = "velit";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "harum";
                uploadProtocol = "voluptatum";
                userIp = "temporibus";
            }};            

            ComputeNodeTemplatesGetResponse res = sdk.nodeTemplates.computeNodeTemplatesGet(req, new ComputeNodeTemplatesGetSecurity() {{
                option1 = new ComputeNodeTemplatesGetSecurityOption1("eaque", "consequatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeTemplatesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesGetIamPolicyRequest req = new ComputeNodeTemplatesGetIamPolicyRequest("odit", "praesentium", "eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "minus";
                key = "excepturi";
                oauthToken = "alias";
                optionsRequestedPolicyVersion = 360189L;
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "sapiente";
                uploadProtocol = "molestiae";
                userIp = "eveniet";
            }};            

            ComputeNodeTemplatesGetIamPolicyResponse res = sdk.nodeTemplates.computeNodeTemplatesGetIamPolicy(req, new ComputeNodeTemplatesGetIamPolicySecurity() {{
                option1 = new ComputeNodeTemplatesGetIamPolicySecurityOption1("voluptatibus", "perferendis") {{
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

## computeNodeTemplatesInsert

Creates a NodeTemplate resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesInsertRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesInsertResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalDisk;
import org.openapis.openapi.models.shared.NodeTemplate;
import org.openapis.openapi.models.shared.NodeTemplateCpuOvercommitTypeEnum;
import org.openapis.openapi.models.shared.NodeTemplateNodeTypeFlexibility;
import org.openapis.openapi.models.shared.NodeTemplateStatusEnum;
import org.openapis.openapi.models.shared.ServerBinding;
import org.openapis.openapi.models.shared.ServerBindingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesInsertRequest req = new ComputeNodeTemplatesInsertRequest("earum", "sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeTemplate = new NodeTemplate() {{
                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 366129;
                            acceleratorType = "harum";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 382183;
                            acceleratorType = "quam";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 786703;
                            acceleratorType = "qui";
                        }}),
                    }};
                    cpuOvercommitType = NodeTemplateCpuOvercommitTypeEnum.CPU_OVERCOMMIT_TYPE_UNSPECIFIED;
                    creationTimestamp = "autem";
                    description = "reprehenderit";
                    disks = new org.openapis.openapi.models.shared.LocalDisk[]{{
                        add(new LocalDisk() {{
                            diskCount = 634117;
                            diskSizeGb = 804201;
                            diskType = "omnis";
                        }}),
                    }};
                    id = "atque";
                    kind = "reiciendis";
                    name = "Kari Conroy";
                    nodeAffinityLabels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "explicabo");
                        put("mollitia", "suscipit");
                        put("facilis", "cum");
                        put("doloremque", "laudantium");
                    }};
                    nodeType = "voluptas";
                    nodeTypeFlexibility = new NodeTemplateNodeTypeFlexibility() {{
                        cpus = "sunt";
                        localSsd = "ipsam";
                        memory = "aspernatur";
                    }};;
                    region = "dolores";
                    selfLink = "consequuntur";
                    serverBinding = new ServerBinding() {{
                        type = ServerBindingTypeEnum.RESTART_NODE_ON_ANY_SERVER;
                    }};;
                    status = NodeTemplateStatusEnum.INVALID;
                    statusMessage = "aperiam";
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "laudantium";
                key = "repudiandae";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "odit";
                uploadType = "quae";
                uploadProtocol = "beatae";
                userIp = "vero";
            }};            

            ComputeNodeTemplatesInsertResponse res = sdk.nodeTemplates.computeNodeTemplatesInsert(req, new ComputeNodeTemplatesInsertSecurity() {{
                option1 = new ComputeNodeTemplatesInsertSecurityOption1("optio", "reiciendis") {{
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

## computeNodeTemplatesList

Retrieves a list of node templates available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesListRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesListResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesListSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesListRequest req = new ComputeNodeTemplatesListRequest("nobis", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "hic";
                filter = "minima";
                key = "temporibus";
                maxResults = 922848L;
                oauthToken = "dolore";
                orderBy = "voluptatibus";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "expedita";
                returnPartialSuccess = false;
                uploadType = "eaque";
                uploadProtocol = "culpa";
                userIp = "blanditiis";
            }};            

            ComputeNodeTemplatesListResponse res = sdk.nodeTemplates.computeNodeTemplatesList(req, new ComputeNodeTemplatesListSecurity() {{
                option1 = new ComputeNodeTemplatesListSecurityOption1("corporis", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeTemplateList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.RegionSetPolicyRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesSetIamPolicyRequest req = new ComputeNodeTemplatesSetIamPolicyRequest("soluta", "nobis", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "ab";
                            condition = new Expr() {{
                                description = "voluptatibus";
                                expression = "reiciendis";
                                location = "sequi";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("voluptas"),
                                add("et"),
                                add("sint"),
                            }};
                            role = "eaque";
                        }}),
                        add(new Binding() {{
                            bindingId = "accusantium";
                            condition = new Expr() {{
                                description = "neque";
                                expression = "expedita";
                                location = "quia";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("voluptates"),
                                add("blanditiis"),
                            }};
                            role = "velit";
                        }}),
                        add(new Binding() {{
                            bindingId = "porro";
                            condition = new Expr() {{
                                description = "commodi";
                                expression = "nobis";
                                location = "dolor";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("corporis"),
                                add("voluptas"),
                                add("expedita"),
                            }};
                            role = "adipisci";
                        }}),
                    }};
                    etag = "error";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repellat"),
                                            add("nihil"),
                                            add("unde"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("at"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("repellendus"),
                                    add("quam"),
                                }};
                                service = "eaque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repellendus"),
                                            add("numquam"),
                                            add("quos"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("hic"),
                                    add("autem"),
                                    add("voluptatem"),
                                }};
                                service = "perferendis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("perferendis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quasi"),
                                }};
                                service = "debitis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                            add("totam"),
                                            add("autem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("possimus"),
                                    add("temporibus"),
                                    add("aperiam"),
                                }};
                                service = "repellendus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "in";
                                condition = new Expr() {{
                                    description = "sequi";
                                    expression = "similique";
                                    location = "ipsa";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("sequi"),
                                    add("aut"),
                                    add("odio"),
                                    add("commodi"),
                                }};
                                role = "placeat";
                            }}),
                            add(new Binding() {{
                                bindingId = "corrupti";
                                condition = new Expr() {{
                                    description = "ea";
                                    expression = "dolores";
                                    location = "facere";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ea"),
                                    add("occaecati"),
                                    add("qui"),
                                }};
                                role = "a";
                            }}),
                        }};
                        etag = "iste";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "voluptatem";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("quod"),
                                            add("adipisci"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "possimus";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("non"),
                                            add("in"),
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "nihil";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("corrupti"),
                                            add("ex"),
                                            add("dolore"),
                                        }};
                                    }}),
                                }};
                                description = "officiis";
                                ins = new String[]{{
                                    add("molestias"),
                                    add("explicabo"),
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
                                                    name = "Walter Lowe";
                                                    value = "deserunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Freda VonRueden";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Freddie Balistreri";
                                                    value = "voluptates";
                                                }}),
                                            }};
                                            field = "dolore";
                                            metric = "placeat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Carrie Simonis";
                                                    value = "ipsam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Danielle Williamson PhD";
                                                    value = "dolore";
                                                }}),
                                            }};
                                            field = "eos";
                                            metric = "facere";
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
                                                    name = "Lorena McDermott";
                                                    value = "laboriosam";
                                                }}),
                                            }};
                                            field = "laudantium";
                                            metric = "sint";
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
                                                    name = "Myron Mosciski";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tammy Jacobson";
                                                    value = "sit";
                                                }}),
                                            }};
                                            field = "saepe";
                                            metric = "ipsam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("asperiores"),
                                }};
                                permissions = new String[]{{
                                    add("dignissimos"),
                                    add("modi"),
                                    add("explicabo"),
                                    add("porro"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "aperiam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("vitae"),
                                            add("itaque"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "amet";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("praesentium"),
                                            add("modi"),
                                            add("asperiores"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "molestiae";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("vero"),
                                            add("aperiam"),
                                            add("sapiente"),
                                            add("tempore"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "ducimus";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nulla"),
                                            add("dolor"),
                                        }};
                                    }}),
                                }};
                                description = "sunt";
                                ins = new String[]{{
                                    add("dolore"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Wayne Oberbrunner I";
                                                    value = "ipsa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Molly Kilback";
                                                    value = "dolores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erika Bednar";
                                                    value = "ea";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Peggy Dibbert";
                                                    value = "quasi";
                                                }}),
                                            }};
                                            field = "perspiciatis";
                                            metric = "soluta";
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
                                                    name = "Sophie Kiehn";
                                                    value = "rem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Louis Jones";
                                                    value = "possimus";
                                                }}),
                                            }};
                                            field = "commodi";
                                            metric = "quaerat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("provident"),
                                    add("excepturi"),
                                    add("dolore"),
                                    add("dolor"),
                                }};
                                permissions = new String[]{{
                                    add("aspernatur"),
                                    add("ullam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "a";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("dicta"),
                                            add("saepe"),
                                            add("voluptas"),
                                            add("sequi"),
                                        }};
                                    }}),
                                }};
                                description = "perspiciatis";
                                ins = new String[]{{
                                    add("vel"),
                                    add("veritatis"),
                                    add("assumenda"),
                                    add("hic"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Audrey Greenfelder";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lionel Kerluke";
                                                    value = "corrupti";
                                                }}),
                                            }};
                                            field = "quis";
                                            metric = "eius";
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
                                                    name = "Terri Stiedemann";
                                                    value = "beatae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Justin Wilkinson I";
                                                    value = "dolorum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Wendy Lynch";
                                                    value = "quas";
                                                }}),
                                            }};
                                            field = "vel";
                                            metric = "nemo";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dora Hirthe";
                                                    value = "hic";
                                                }}),
                                            }};
                                            field = "praesentium";
                                            metric = "explicabo";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joyce Robel";
                                                    value = "pariatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Floyd Will";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erica MacGyver";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jose Waelchi V";
                                                    value = "ex";
                                                }}),
                                            }};
                                            field = "itaque";
                                            metric = "cupiditate";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("consequatur"),
                                    add("laudantium"),
                                    add("occaecati"),
                                }};
                                permissions = new String[]{{
                                    add("aliquid"),
                                    add("eum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "tempora";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ut"),
                                            add("repudiandae"),
                                            add("voluptatem"),
                                            add("officiis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "pariatur";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("odio"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "ex";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("aut"),
                                            add("sequi"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                }};
                                description = "reprehenderit";
                                ins = new String[]{{
                                    add("eos"),
                                    add("pariatur"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kellie Funk";
                                                    value = "modi";
                                                }}),
                                            }};
                                            field = "possimus";
                                            metric = "temporibus";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kathryn Schmitt";
                                                    value = "ipsa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Neal O'Connell";
                                                    value = "voluptates";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Grace Block";
                                                    value = "laudantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elsa Wuckert";
                                                    value = "minus";
                                                }}),
                                            }};
                                            field = "sequi";
                                            metric = "ad";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Myron Toy";
                                                    value = "nesciunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tommie Hudson";
                                                    value = "blanditiis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Blanche Little";
                                                    value = "assumenda";
                                                }}),
                                            }};
                                            field = "in";
                                            metric = "nesciunt";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quia"),
                                    add("animi"),
                                }};
                                permissions = new String[]{{
                                    add("doloribus"),
                                    add("labore"),
                                    add("qui"),
                                    add("laudantium"),
                                }};
                            }}),
                        }};
                        version = 134369;
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "quasi";
                key = "repellendus";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "voluptatem";
                uploadProtocol = "nemo";
                userIp = "maxime";
            }};            

            ComputeNodeTemplatesSetIamPolicyResponse res = sdk.nodeTemplates.computeNodeTemplatesSetIamPolicy(req, new ComputeNodeTemplatesSetIamPolicySecurity() {{
                option1 = new ComputeNodeTemplatesSetIamPolicySecurityOption1("officiis", "vitae") {{
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

## computeNodeTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTemplatesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTemplatesTestIamPermissionsRequest req = new ComputeNodeTemplatesTestIamPermissionsRequest("nulla", "adipisci", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("facere"),
                    }};
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "accusamus";
                key = "possimus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "inventore";
                uploadProtocol = "sit";
                userIp = "esse";
            }};            

            ComputeNodeTemplatesTestIamPermissionsResponse res = sdk.nodeTemplates.computeNodeTemplatesTestIamPermissions(req, new ComputeNodeTemplatesTestIamPermissionsSecurity() {{
                option1 = new ComputeNodeTemplatesTestIamPermissionsSecurityOption1("esse", "animi") {{
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
