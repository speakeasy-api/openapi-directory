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

            ComputeNodeTemplatesAggregatedListRequest req = new ComputeNodeTemplatesAggregatedListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "cum";
                filter = "excepturi";
                includeAllScopes = false;
                key = "laborum";
                maxResults = 304590L;
                oauthToken = "facilis";
                orderBy = "voluptatum";
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "tempora";
                uploadProtocol = "sint";
                userIp = "esse";
            }};            

            ComputeNodeTemplatesAggregatedListResponse res = sdk.nodeTemplates.computeNodeTemplatesAggregatedList(req, new ComputeNodeTemplatesAggregatedListSecurity() {{
                option1 = new ComputeNodeTemplatesAggregatedListSecurityOption1("quibusdam", "vel") {{
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

            ComputeNodeTemplatesDeleteRequest req = new ComputeNodeTemplatesDeleteRequest("fugit", "consequuntur", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "eaque";
                key = "quis";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "nemo";
                uploadType = "odio";
                uploadProtocol = "earum";
                userIp = "et";
            }};            

            ComputeNodeTemplatesDeleteResponse res = sdk.nodeTemplates.computeNodeTemplatesDelete(req, new ComputeNodeTemplatesDeleteSecurity() {{
                option1 = new ComputeNodeTemplatesDeleteSecurityOption1("labore", "accusamus") {{
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

            ComputeNodeTemplatesGetRequest req = new ComputeNodeTemplatesGetRequest("reiciendis", "omnis", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "impedit";
                key = "quaerat";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ad";
                uploadProtocol = "eum";
                userIp = "assumenda";
            }};            

            ComputeNodeTemplatesGetResponse res = sdk.nodeTemplates.computeNodeTemplatesGet(req, new ComputeNodeTemplatesGetSecurity() {{
                option1 = new ComputeNodeTemplatesGetSecurityOption1("consequuntur", "voluptates") {{
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

            ComputeNodeTemplatesGetIamPolicyRequest req = new ComputeNodeTemplatesGetIamPolicyRequest("praesentium", "rerum", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "excepturi";
                key = "repellendus";
                oauthToken = "provident";
                optionsRequestedPolicyVersion = 307546L;
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "labore";
                uploadProtocol = "totam";
                userIp = "unde";
            }};            

            ComputeNodeTemplatesGetIamPolicyResponse res = sdk.nodeTemplates.computeNodeTemplatesGetIamPolicy(req, new ComputeNodeTemplatesGetIamPolicySecurity() {{
                option1 = new ComputeNodeTemplatesGetIamPolicySecurityOption1("dolores", "impedit") {{
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

            ComputeNodeTemplatesInsertRequest req = new ComputeNodeTemplatesInsertRequest("dolorum", "minima") {{
                dollarXgafv = XgafvEnum.ONE;
                nodeTemplate = new NodeTemplate() {{
                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 603200;
                            acceleratorType = "beatae";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 298653;
                            acceleratorType = "illo";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 704808;
                            acceleratorType = "et";
                        }}),
                    }};
                    cpuOvercommitType = NodeTemplateCpuOvercommitTypeEnum.ENABLED;
                    creationTimestamp = "ut";
                    description = "nam";
                    disks = new org.openapis.openapi.models.shared.LocalDisk[]{{
                        add(new LocalDisk() {{
                            diskCount = 748714;
                            diskSizeGb = 299887;
                            diskType = "libero";
                        }}),
                        add(new LocalDisk() {{
                            diskCount = 300530;
                            diskSizeGb = 872480;
                            diskType = "blanditiis";
                        }}),
                        add(new LocalDisk() {{
                            diskCount = 961983;
                            diskSizeGb = 41772;
                            diskType = "nihil";
                        }}),
                    }};
                    id = "repellendus";
                    kind = "tempora";
                    name = "Dr. Guy Carroll";
                    nodeAffinityLabels = new java.util.HashMap<String, String>() {{
                        put("enim", "consectetur");
                        put("perspiciatis", "pariatur");
                    }};
                    nodeType = "minima";
                    nodeTypeFlexibility = new NodeTemplateNodeTypeFlexibility() {{
                        cpus = "nobis";
                        localSsd = "dolorum";
                        memory = "dignissimos";
                    }};;
                    region = "dignissimos";
                    selfLink = "vero";
                    selfLinkWithId = "necessitatibus";
                    serverBinding = new ServerBinding() {{
                        type = ServerBindingTypeEnum.RESTART_NODE_ON_MINIMAL_SERVERS;
                    }};;
                    status = NodeTemplateStatusEnum.CREATING;
                    statusMessage = "sit";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "eius";
                key = "eius";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "itaque";
                uploadType = "maiores";
                uploadProtocol = "error";
                userIp = "itaque";
            }};            

            ComputeNodeTemplatesInsertResponse res = sdk.nodeTemplates.computeNodeTemplatesInsert(req, new ComputeNodeTemplatesInsertSecurity() {{
                option1 = new ComputeNodeTemplatesInsertSecurityOption1("cumque", "nemo") {{
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

            ComputeNodeTemplatesListRequest req = new ComputeNodeTemplatesListRequest("deleniti", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "tenetur";
                filter = "ipsa";
                key = "expedita";
                maxResults = 128755L;
                oauthToken = "voluptatem";
                orderBy = "cumque";
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                returnPartialSuccess = false;
                uploadType = "impedit";
                uploadProtocol = "impedit";
                userIp = "accusantium";
            }};            

            ComputeNodeTemplatesListResponse res = sdk.nodeTemplates.computeNodeTemplatesList(req, new ComputeNodeTemplatesListSecurity() {{
                option1 = new ComputeNodeTemplatesListSecurityOption1("voluptates", "accusamus") {{
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

            ComputeNodeTemplatesSetIamPolicyRequest req = new ComputeNodeTemplatesSetIamPolicyRequest("quaerat", "laborum", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "iure";
                            condition = new Expr() {{
                                description = "ipsa";
                                expression = "voluptatem";
                                location = "a";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("quos"),
                            }};
                            role = "amet";
                        }}),
                    }};
                    etag = "amet";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tenetur"),
                                            add("dignissimos"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("doloremque"),
                                    add("eaque"),
                                }};
                                service = "dolore";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("molestiae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquam"),
                                            add("voluptatibus"),
                                            add("omnis"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("eveniet"),
                                    add("doloremque"),
                                }};
                                service = "alias";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "minima";
                                condition = new Expr() {{
                                    description = "distinctio";
                                    expression = "dolores";
                                    location = "possimus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("laboriosam"),
                                }};
                                role = "tempore";
                            }}),
                        }};
                        etag = "temporibus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "reprehenderit";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("architecto"),
                                            add("cum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "similique";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ipsa"),
                                            add("iste"),
                                            add("libero"),
                                        }};
                                    }}),
                                }};
                                description = "eligendi";
                                ins = new String[]{{
                                    add("blanditiis"),
                                    add("aspernatur"),
                                    add("culpa"),
                                    add("accusamus"),
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
                                                    name = "Tasha Gleichner";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Preston Dickens";
                                                    value = "magnam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Estelle Kulas";
                                                    value = "velit";
                                                }}),
                                            }};
                                            field = "officiis";
                                            metric = "minus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("magni"),
                                    add("numquam"),
                                }};
                                permissions = new String[]{{
                                    add("veritatis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "error";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "sint";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("praesentium"),
                                            add("corporis"),
                                            add("autem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "nisi";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("non"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "natus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("quia"),
                                            add("ut"),
                                        }};
                                    }}),
                                }};
                                description = "reprehenderit";
                                ins = new String[]{{
                                    add("minima"),
                                    add("quasi"),
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
                                                    name = "Lorena Erdman";
                                                    value = "velit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roland Larkin";
                                                    value = "eveniet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Dexter Jenkins";
                                                    value = "fugit";
                                                }}),
                                            }};
                                            field = "iure";
                                            metric = "laborum";
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
                                                    name = "Emily Balistreri";
                                                    value = "sequi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Calvin Gulgowski Jr.";
                                                    value = "quas";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Susie Kris";
                                                    value = "perferendis";
                                                }}),
                                            }};
                                            field = "quasi";
                                            metric = "debitis";
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
                                                    name = "Mamie Windler";
                                                    value = "laboriosam";
                                                }}),
                                            }};
                                            field = "dicta";
                                            metric = "quos";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Elbert Zieme";
                                                    value = "veniam";
                                                }}),
                                            }};
                                            field = "blanditiis";
                                            metric = "labore";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ullam"),
                                    add("impedit"),
                                    add("porro"),
                                    add("consequatur"),
                                }};
                                permissions = new String[]{{
                                    add("illum"),
                                    add("molestias"),
                                    add("in"),
                                }};
                            }}),
                        }};
                        version = 657696;
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "minima";
                key = "ad";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "dolores";
                uploadProtocol = "maxime";
                userIp = "impedit";
            }};            

            ComputeNodeTemplatesSetIamPolicyResponse res = sdk.nodeTemplates.computeNodeTemplatesSetIamPolicy(req, new ComputeNodeTemplatesSetIamPolicySecurity() {{
                option1 = new ComputeNodeTemplatesSetIamPolicySecurityOption1("magni", "dolores") {{
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

            ComputeNodeTemplatesTestIamPermissionsRequest req = new ComputeNodeTemplatesTestIamPermissionsRequest("impedit", "iusto", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("aliquam"),
                        add("doloribus"),
                    }};
                }};;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "soluta";
                key = "quam";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorem";
                uploadProtocol = "tempore";
                userIp = "accusamus";
            }};            

            ComputeNodeTemplatesTestIamPermissionsResponse res = sdk.nodeTemplates.computeNodeTemplatesTestIamPermissions(req, new ComputeNodeTemplatesTestIamPermissionsSecurity() {{
                option1 = new ComputeNodeTemplatesTestIamPermissionsSecurityOption1("repellat", "et") {{
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
