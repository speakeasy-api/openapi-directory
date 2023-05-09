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

            ComputeNodeTemplatesAggregatedListRequest req = new ComputeNodeTemplatesAggregatedListRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "odio";
                filter = "soluta";
                includeAllScopes = false;
                key = "incidunt";
                maxResults = 366259L;
                oauthToken = "suscipit";
                orderBy = "culpa";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "ipsam";
                returnPartialSuccess = false;
                uploadType = "enim";
                uploadProtocol = "repudiandae";
                userIp = "nostrum";
            }};            

            ComputeNodeTemplatesAggregatedListResponse res = sdk.nodeTemplates.computeNodeTemplatesAggregatedList(req, new ComputeNodeTemplatesAggregatedListSecurity() {{
                option1 = new ComputeNodeTemplatesAggregatedListSecurityOption1("perferendis", "rem") {{
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

            ComputeNodeTemplatesDeleteRequest req = new ComputeNodeTemplatesDeleteRequest("quos", "maxime", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "dolorem";
                key = "magnam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "laborum";
                requestId = "quo";
                uploadType = "eligendi";
                uploadProtocol = "quod";
                userIp = "impedit";
            }};            

            ComputeNodeTemplatesDeleteResponse res = sdk.nodeTemplates.computeNodeTemplatesDelete(req, new ComputeNodeTemplatesDeleteSecurity() {{
                option1 = new ComputeNodeTemplatesDeleteSecurityOption1("culpa", "nisi") {{
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

            ComputeNodeTemplatesGetRequest req = new ComputeNodeTemplatesGetRequest("nisi", "ratione", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "iste";
                key = "corporis";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "distinctio";
                uploadProtocol = "amet";
                userIp = "dolores";
            }};            

            ComputeNodeTemplatesGetResponse res = sdk.nodeTemplates.computeNodeTemplatesGet(req, new ComputeNodeTemplatesGetSecurity() {{
                option1 = new ComputeNodeTemplatesGetSecurityOption1("quidem", "soluta") {{
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

            ComputeNodeTemplatesGetIamPolicyRequest req = new ComputeNodeTemplatesGetIamPolicyRequest("magni", "vitae", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "dolor";
                fields = "vitae";
                key = "porro";
                oauthToken = "temporibus";
                optionsRequestedPolicyVersion = 411186L;
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "exercitationem";
                uploadProtocol = "expedita";
                userIp = "repudiandae";
            }};            

            ComputeNodeTemplatesGetIamPolicyResponse res = sdk.nodeTemplates.computeNodeTemplatesGetIamPolicy(req, new ComputeNodeTemplatesGetIamPolicySecurity() {{
                option1 = new ComputeNodeTemplatesGetIamPolicySecurityOption1("odio", "incidunt") {{
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

            ComputeNodeTemplatesInsertRequest req = new ComputeNodeTemplatesInsertRequest("omnis", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeTemplate = new NodeTemplate() {{
                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 567510;
                            acceleratorType = "vel";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 789791;
                            acceleratorType = "iure";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 199764;
                            acceleratorType = "vel";
                        }}),
                    }};
                    cpuOvercommitType = NodeTemplateCpuOvercommitTypeEnum.NONE;
                    creationTimestamp = "voluptate";
                    description = "aliquam";
                    disks = new org.openapis.openapi.models.shared.LocalDisk[]{{
                        add(new LocalDisk() {{
                            diskCount = 147566;
                            diskSizeGb = 518898;
                            diskType = "culpa";
                        }}),
                        add(new LocalDisk() {{
                            diskCount = 312402;
                            diskSizeGb = 524410;
                            diskType = "et";
                        }}),
                        add(new LocalDisk() {{
                            diskCount = 291533;
                            diskSizeGb = 570480;
                            diskType = "similique";
                        }}),
                        add(new LocalDisk() {{
                            diskCount = 65826;
                            diskSizeGb = 714352;
                            diskType = "rem";
                        }}),
                    }};
                    id = "tempora";
                    kind = "veritatis";
                    name = "Claire Langosh";
                    nodeAffinityLabels = new java.util.HashMap<String, String>() {{
                        put("minima", "laudantium");
                    }};
                    nodeType = "dignissimos";
                    nodeTypeFlexibility = new NodeTemplateNodeTypeFlexibility() {{
                        cpus = "vel";
                        localSsd = "tempore";
                        memory = "dolorem";
                    }};;
                    region = "aut";
                    selfLink = "quos";
                    serverBinding = new ServerBinding() {{
                        type = ServerBindingTypeEnum.RESTART_NODE_ON_MINIMAL_SERVERS;
                    }};;
                    status = NodeTemplateStatusEnum.CREATING;
                    statusMessage = "sunt";
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "eius";
                key = "aut";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "aperiam";
                uploadType = "corrupti";
                uploadProtocol = "sed";
                userIp = "nulla";
            }};            

            ComputeNodeTemplatesInsertResponse res = sdk.nodeTemplates.computeNodeTemplatesInsert(req, new ComputeNodeTemplatesInsertSecurity() {{
                option1 = new ComputeNodeTemplatesInsertSecurityOption1("alias", "provident") {{
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

            ComputeNodeTemplatesListRequest req = new ComputeNodeTemplatesListRequest("corporis", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "temporibus";
                filter = "sint";
                key = "dolores";
                maxResults = 484515L;
                oauthToken = "dolorum";
                orderBy = "ad";
                pageToken = "soluta";
                prettyPrint = false;
                quotaUser = "officia";
                returnPartialSuccess = false;
                uploadType = "nostrum";
                uploadProtocol = "exercitationem";
                userIp = "vitae";
            }};            

            ComputeNodeTemplatesListResponse res = sdk.nodeTemplates.computeNodeTemplatesList(req, new ComputeNodeTemplatesListSecurity() {{
                option1 = new ComputeNodeTemplatesListSecurityOption1("illo", "soluta") {{
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

            ComputeNodeTemplatesSetIamPolicyRequest req = new ComputeNodeTemplatesSetIamPolicyRequest("expedita", "totam", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "temporibus";
                            condition = new Expr() {{
                                description = "iste";
                                expression = "dignissimos";
                                location = "rem";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("nobis"),
                                add("architecto"),
                                add("tempora"),
                                add("eum"),
                            }};
                            role = "incidunt";
                        }}),
                    }};
                    etag = "ducimus";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("expedita"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("rerum"),
                                    add("voluptates"),
                                }};
                                service = "suscipit";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "nam";
                                condition = new Expr() {{
                                    description = "velit";
                                    expression = "sapiente";
                                    location = "dolorem";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("odio"),
                                }};
                                role = "dolores";
                            }}),
                        }};
                        etag = "voluptatum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "odio";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("possimus"),
                                            add("labore"),
                                            add("consectetur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "impedit";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("assumenda"),
                                            add("fugit"),
                                            add("placeat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "alias";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quibusdam"),
                                            add("esse"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "iure";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("distinctio"),
                                            add("nam"),
                                            add("quo"),
                                        }};
                                    }}),
                                }};
                                description = "iste";
                                ins = new String[]{{
                                    add("provident"),
                                    add("odio"),
                                    add("aliquam"),
                                    add("incidunt"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jill Paucek";
                                                    value = "maiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ollie Romaguera";
                                                    value = "placeat";
                                                }}),
                                            }};
                                            field = "quisquam";
                                            metric = "nam";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Adam Hauck";
                                                    value = "aut";
                                                }}),
                                            }};
                                            field = "ex";
                                            metric = "dolorum";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Billy Cassin Sr.";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Heidi O'Keefe";
                                                    value = "quibusdam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elijah West";
                                                    value = "quis";
                                                }}),
                                            }};
                                            field = "dolores";
                                            metric = "harum";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Maria Wilkinson";
                                                    value = "blanditiis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fred Macejkovic";
                                                    value = "praesentium";
                                                }}),
                                            }};
                                            field = "nihil";
                                            metric = "beatae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("fugit"),
                                    add("iure"),
                                    add("doloribus"),
                                    add("aliquid"),
                                }};
                                permissions = new String[]{{
                                    add("et"),
                                    add("voluptate"),
                                    add("minima"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "voluptatem";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("tempora"),
                                            add("aperiam"),
                                            add("error"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "magnam";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("corrupti"),
                                            add("eos"),
                                            add("exercitationem"),
                                            add("ut"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "eveniet";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("molestiae"),
                                            add("dolores"),
                                        }};
                                    }}),
                                }};
                                description = "incidunt";
                                ins = new String[]{{
                                    add("exercitationem"),
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
                                                    name = "Jan Kuhic";
                                                    value = "placeat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Carlos Morar";
                                                    value = "voluptas";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cory Toy";
                                                    value = "porro";
                                                }}),
                                            }};
                                            field = "commodi";
                                            metric = "alias";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("sapiente"),
                                    add("voluptatem"),
                                    add("sunt"),
                                }};
                                permissions = new String[]{{
                                    add("illum"),
                                    add("adipisci"),
                                    add("atque"),
                                    add("veniam"),
                                }};
                            }}),
                        }};
                        version = 149535;
                    }};;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "animi";
                key = "magnam";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "distinctio";
                uploadProtocol = "iste";
                userIp = "asperiores";
            }};            

            ComputeNodeTemplatesSetIamPolicyResponse res = sdk.nodeTemplates.computeNodeTemplatesSetIamPolicy(req, new ComputeNodeTemplatesSetIamPolicySecurity() {{
                option1 = new ComputeNodeTemplatesSetIamPolicySecurityOption1("pariatur", "laudantium") {{
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

            ComputeNodeTemplatesTestIamPermissionsRequest req = new ComputeNodeTemplatesTestIamPermissionsRequest("sequi", "repellat", "totam") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("asperiores"),
                        add("iste"),
                        add("quidem"),
                        add("aut"),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "fuga";
                key = "eaque";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "necessitatibus";
                uploadProtocol = "fugit";
                userIp = "recusandae";
            }};            

            ComputeNodeTemplatesTestIamPermissionsResponse res = sdk.nodeTemplates.computeNodeTemplatesTestIamPermissions(req, new ComputeNodeTemplatesTestIamPermissionsSecurity() {{
                option1 = new ComputeNodeTemplatesTestIamPermissionsSecurityOption1("provident", "quod") {{
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
