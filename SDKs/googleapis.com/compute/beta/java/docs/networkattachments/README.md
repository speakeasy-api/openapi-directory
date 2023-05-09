# networkAttachments

### Available Operations

* [computeNetworkAttachmentsAggregatedList](#computenetworkattachmentsaggregatedlist) - Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
* [computeNetworkAttachmentsDelete](#computenetworkattachmentsdelete) - Deletes the specified NetworkAttachment in the given scope
* [computeNetworkAttachmentsGet](#computenetworkattachmentsget) - Returns the specified NetworkAttachment resource in the given scope.
* [computeNetworkAttachmentsGetIamPolicy](#computenetworkattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkAttachmentsInsert](#computenetworkattachmentsinsert) - Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeNetworkAttachmentsList](#computenetworkattachmentslist) - Lists the NetworkAttachments for a project in the given scope.
* [computeNetworkAttachmentsSetIamPolicy](#computenetworkattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkAttachmentsTestIamPermissions](#computenetworkattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkAttachmentsAggregatedList

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsAggregatedListRequest req = new ComputeNetworkAttachmentsAggregatedListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "iure";
                filter = "architecto";
                includeAllScopes = false;
                key = "illum";
                maxResults = 60659L;
                oauthToken = "quibusdam";
                orderBy = "natus";
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "quod";
                returnPartialSuccess = false;
                uploadType = "quo";
                uploadProtocol = "repellat";
                userIp = "voluptatum";
            }};            

            ComputeNetworkAttachmentsAggregatedListResponse res = sdk.networkAttachments.computeNetworkAttachmentsAggregatedList(req, new ComputeNetworkAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeNetworkAttachmentsAggregatedListSecurityOption1("excepturi", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkAttachmentAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkAttachmentsDelete

Deletes the specified NetworkAttachment in the given scope

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsDeleteRequest req = new ComputeNetworkAttachmentsDeleteRequest("amet", "totam", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "vero";
                key = "temporibus";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "minus";
                uploadType = "eaque";
                uploadProtocol = "consequatur";
                userIp = "magni";
            }};            

            ComputeNetworkAttachmentsDeleteResponse res = sdk.networkAttachments.computeNetworkAttachmentsDelete(req, new ComputeNetworkAttachmentsDeleteSecurity() {{
                option1 = new ComputeNetworkAttachmentsDeleteSecurityOption1("tenetur", "est") {{
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

## computeNetworkAttachmentsGet

Returns the specified NetworkAttachment resource in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsGetRequest req = new ComputeNetworkAttachmentsGetRequest("cumque", "harum", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "ut";
                key = "placeat";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quaerat";
                uploadProtocol = "sequi";
                userIp = "quidem";
            }};            

            ComputeNetworkAttachmentsGetResponse res = sdk.networkAttachments.computeNetworkAttachmentsGet(req, new ComputeNetworkAttachmentsGetSecurity() {{
                option1 = new ComputeNetworkAttachmentsGetSecurityOption1("corrupti", "voluptas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkAttachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkAttachmentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsGetIamPolicyRequest req = new ComputeNetworkAttachmentsGetIamPolicyRequest("suscipit", "optio", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "recusandae";
                key = "quia";
                oauthToken = "iure";
                optionsRequestedPolicyVersion = 402604L;
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "ducimus";
                uploadProtocol = "ratione";
                userIp = "accusantium";
            }};            

            ComputeNetworkAttachmentsGetIamPolicyResponse res = sdk.networkAttachments.computeNetworkAttachmentsGetIamPolicy(req, new ComputeNetworkAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeNetworkAttachmentsGetIamPolicySecurityOption1("quidem", "accusamus") {{
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

## computeNetworkAttachmentsInsert

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsInsertRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsInsertResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkAttachment;
import org.openapis.openapi.models.shared.NetworkAttachmentConnectedEndpoint;
import org.openapis.openapi.models.shared.NetworkAttachmentConnectedEndpointStatusEnum;
import org.openapis.openapi.models.shared.NetworkAttachmentConnectionPreferenceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsInsertRequest req = new ComputeNetworkAttachmentsInsertRequest("dolorem", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                networkAttachment = new NetworkAttachment() {{
                    connectionEndpoints = new org.openapis.openapi.models.shared.NetworkAttachmentConnectedEndpoint[]{{
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "recusandae";
                            projectIdOrNum = "corrupti";
                            secondaryIpCidrRanges = new String[]{{
                                add("nam"),
                                add("quod"),
                                add("dolore"),
                                add("atque"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.REJECTED;
                            subnetwork = "temporibus";
                        }}),
                    }};
                    connectionPreference = NetworkAttachmentConnectionPreferenceEnum.INVALID;
                    creationTimestamp = "esse";
                    description = "officiis";
                    fingerprint = "voluptas";
                    id = "excepturi";
                    kind = "rerum";
                    name = "Mr. Rita Hauck";
                    network = "consequatur";
                    producerAcceptLists = new String[]{{
                        add("aperiam"),
                        add("dicta"),
                    }};
                    producerRejectLists = new String[]{{
                        add("fugiat"),
                        add("porro"),
                    }};
                    region = "est";
                    selfLink = "et";
                    selfLinkWithId = "sit";
                    subnetworks = new String[]{{
                        add("atque"),
                        add("laudantium"),
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "eius";
                key = "impedit";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "debitis";
                uploadType = "perspiciatis";
                uploadProtocol = "ut";
                userIp = "corrupti";
            }};            

            ComputeNetworkAttachmentsInsertResponse res = sdk.networkAttachments.computeNetworkAttachmentsInsert(req, new ComputeNetworkAttachmentsInsertSecurity() {{
                option1 = new ComputeNetworkAttachmentsInsertSecurityOption1("corrupti", "occaecati") {{
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

## computeNetworkAttachmentsList

Lists the NetworkAttachments for a project in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsListRequest req = new ComputeNetworkAttachmentsListRequest("eos", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "aliquam";
                filter = "debitis";
                key = "sit";
                maxResults = 738207L;
                oauthToken = "voluptatum";
                orderBy = "maiores";
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "eaque";
                returnPartialSuccess = false;
                uploadType = "illum";
                uploadProtocol = "enim";
                userIp = "natus";
            }};            

            ComputeNetworkAttachmentsListResponse res = sdk.networkAttachments.computeNetworkAttachmentsList(req, new ComputeNetworkAttachmentsListSecurity() {{
                option1 = new ComputeNetworkAttachmentsListSecurityOption1("sapiente", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkAttachmentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkAttachmentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsSetIamPolicySecurityOption2;
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

            ComputeNetworkAttachmentsSetIamPolicyRequest req = new ComputeNetworkAttachmentsSetIamPolicyRequest("iure", "tempore", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "rem";
                            condition = new Expr() {{
                                description = "odit";
                                expression = "eaque";
                                location = "tempore";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("iusto"),
                            }};
                            role = "deleniti";
                        }}),
                        add(new Binding() {{
                            bindingId = "aperiam";
                            condition = new Expr() {{
                                description = "quos";
                                expression = "maxime";
                                location = "nesciunt";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("cupiditate"),
                                add("necessitatibus"),
                                add("consequuntur"),
                                add("maiores"),
                            }};
                            role = "esse";
                        }}),
                        add(new Binding() {{
                            bindingId = "sit";
                            condition = new Expr() {{
                                description = "adipisci";
                                expression = "quaerat";
                                location = "magnam";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("eaque"),
                            }};
                            role = "maiores";
                        }}),
                    }};
                    etag = "tempora";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cum"),
                                            add("ad"),
                                            add("amet"),
                                            add("error"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("maiores"),
                                            add("reprehenderit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eveniet"),
                                            add("necessitatibus"),
                                            add("delectus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("distinctio"),
                                    add("vel"),
                                    add("sint"),
                                    add("repellendus"),
                                }};
                                service = "minima";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("expedita"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("sint"),
                                            add("amet"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ad"),
                                }};
                                service = "eum";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "suscipit";
                                condition = new Expr() {{
                                    description = "consequuntur";
                                    expression = "quis";
                                    location = "expedita";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("nesciunt"),
                                    add("magni"),
                                    add("consequuntur"),
                                }};
                                role = "quae";
                            }}),
                            add(new Binding() {{
                                bindingId = "illo";
                                condition = new Expr() {{
                                    description = "temporibus";
                                    expression = "recusandae";
                                    location = "porro";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("sint"),
                                    add("optio"),
                                }};
                                role = "voluptas";
                            }}),
                        }};
                        etag = "error";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "ut";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("minima"),
                                            add("placeat"),
                                            add("eos"),
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "aspernatur";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("provident"),
                                            add("voluptatem"),
                                            add("earum"),
                                            add("quibusdam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "esse";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("libero"),
                                            add("repellat"),
                                        }};
                                    }}),
                                }};
                                description = "porro";
                                ins = new String[]{{
                                    add("ex"),
                                    add("molestiae"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Michelle Gibson";
                                                    value = "debitis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Nina Cronin";
                                                    value = "nam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Krystal Nienow";
                                                    value = "architecto";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rodolfo Champlin";
                                                    value = "quae";
                                                }}),
                                            }};
                                            field = "impedit";
                                            metric = "facilis";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Gladys Fahey";
                                                    value = "soluta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kenny Prohaska";
                                                    value = "quam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miguel Goldner";
                                                    value = "illum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Betsy Nader";
                                                    value = "itaque";
                                                }}),
                                            }};
                                            field = "veniam";
                                            metric = "totam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("velit"),
                                    add("nulla"),
                                    add("quis"),
                                }};
                                permissions = new String[]{{
                                    add("nobis"),
                                    add("animi"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "laborum";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("sint"),
                                            add("expedita"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "corporis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("totam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "ipsam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("dignissimos"),
                                            add("maiores"),
                                            add("ea"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "aspernatur";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("quis"),
                                        }};
                                    }}),
                                }};
                                description = "voluptas";
                                ins = new String[]{{
                                    add("repudiandae"),
                                    add("molestias"),
                                    add("exercitationem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Garry Considine";
                                                    value = "laudantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Becky Berge";
                                                    value = "in";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Carole Ankunding";
                                                    value = "aut";
                                                }}),
                                            }};
                                            field = "dolores";
                                            metric = "doloribus";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Norma Leannon";
                                                    value = "ex";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alma Haley";
                                                    value = "voluptatem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marjorie Quigley";
                                                    value = "cum";
                                                }}),
                                            }};
                                            field = "totam";
                                            metric = "laborum";
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
                                                    name = "Owen Conn";
                                                    value = "iste";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elizabeth Goodwin";
                                                    value = "adipisci";
                                                }}),
                                            }};
                                            field = "mollitia";
                                            metric = "sit";
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
                                                    name = "Brittany Frami";
                                                    value = "ea";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Chris Monahan";
                                                    value = "tenetur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sylvester Kihn";
                                                    value = "temporibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Nicolas Kris";
                                                    value = "tempora";
                                                }}),
                                            }};
                                            field = "eveniet";
                                            metric = "veniam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("provident"),
                                    add("non"),
                                    add("excepturi"),
                                }};
                                permissions = new String[]{{
                                    add("ducimus"),
                                    add("voluptatem"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "voluptas";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("eius"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "explicabo";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("laborum"),
                                            add("eius"),
                                            add("eveniet"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                }};
                                description = "natus";
                                ins = new String[]{{
                                    add("quos"),
                                    add("eos"),
                                    add("voluptatum"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Earnest Auer";
                                                    value = "velit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Andre Abernathy";
                                                    value = "doloribus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "David Pacocha";
                                                    value = "atque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rolando Brakus";
                                                    value = "tempora";
                                                }}),
                                            }};
                                            field = "quam";
                                            metric = "et";
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
                                                    name = "Kenneth Hahn";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alonzo Stamm";
                                                    value = "dicta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Iris Jacobi PhD";
                                                    value = "fugit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terrance Bins";
                                                    value = "iure";
                                                }}),
                                            }};
                                            field = "quis";
                                            metric = "distinctio";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("rem"),
                                    add("commodi"),
                                }};
                                permissions = new String[]{{
                                    add("earum"),
                                    add("amet"),
                                    add("excepturi"),
                                    add("laudantium"),
                                }};
                            }}),
                        }};
                        version = 681434;
                    }};;
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "in";
                key = "eius";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "nihil";
                uploadProtocol = "quibusdam";
                userIp = "nulla";
            }};            

            ComputeNetworkAttachmentsSetIamPolicyResponse res = sdk.networkAttachments.computeNetworkAttachmentsSetIamPolicy(req, new ComputeNetworkAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeNetworkAttachmentsSetIamPolicySecurityOption1("sint", "nemo") {{
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

## computeNetworkAttachmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkAttachmentsTestIamPermissionsRequest req = new ComputeNetworkAttachmentsTestIamPermissionsRequest("minus", "officiis", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("numquam"),
                        add("distinctio"),
                    }};
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "expedita";
                key = "neque";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quasi";
                uploadProtocol = "eligendi";
                userIp = "cum";
            }};            

            ComputeNetworkAttachmentsTestIamPermissionsResponse res = sdk.networkAttachments.computeNetworkAttachmentsTestIamPermissions(req, new ComputeNetworkAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkAttachmentsTestIamPermissionsSecurityOption1("corporis", "voluptatem") {{
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
