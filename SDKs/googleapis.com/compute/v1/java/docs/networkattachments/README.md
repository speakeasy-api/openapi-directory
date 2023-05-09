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

            ComputeNetworkAttachmentsAggregatedListRequest req = new ComputeNetworkAttachmentsAggregatedListRequest("molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "deleniti";
                filter = "cumque";
                includeAllScopes = false;
                key = "officia";
                maxResults = 526314L;
                oauthToken = "facere";
                orderBy = "vel";
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "porro";
                returnPartialSuccess = false;
                uploadType = "enim";
                uploadProtocol = "ex";
                userIp = "rem";
            }};            

            ComputeNetworkAttachmentsAggregatedListResponse res = sdk.networkAttachments.computeNetworkAttachmentsAggregatedList(req, new ComputeNetworkAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeNetworkAttachmentsAggregatedListSecurityOption1("cupiditate", "explicabo") {{
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

            ComputeNetworkAttachmentsDeleteRequest req = new ComputeNetworkAttachmentsDeleteRequest("vitae", "tempora", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "alias";
                key = "reprehenderit";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "delectus";
                uploadType = "similique";
                uploadProtocol = "saepe";
                userIp = "aut";
            }};            

            ComputeNetworkAttachmentsDeleteResponse res = sdk.networkAttachments.computeNetworkAttachmentsDelete(req, new ComputeNetworkAttachmentsDeleteSecurity() {{
                option1 = new ComputeNetworkAttachmentsDeleteSecurityOption1("ipsum", "voluptatum") {{
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

            ComputeNetworkAttachmentsGetRequest req = new ComputeNetworkAttachmentsGetRequest("eligendi", "facere", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "ratione";
                key = "placeat";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "dolorum";
                uploadProtocol = "repellat";
                userIp = "dignissimos";
            }};            

            ComputeNetworkAttachmentsGetResponse res = sdk.networkAttachments.computeNetworkAttachmentsGet(req, new ComputeNetworkAttachmentsGetSecurity() {{
                option1 = new ComputeNetworkAttachmentsGetSecurityOption1("asperiores", "optio") {{
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

            ComputeNetworkAttachmentsGetIamPolicyRequest req = new ComputeNetworkAttachmentsGetIamPolicyRequest("eos", "impedit", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "recusandae";
                key = "asperiores";
                oauthToken = "aperiam";
                optionsRequestedPolicyVersion = 836620L;
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "nisi";
                uploadProtocol = "voluptatum";
                userIp = "earum";
            }};            

            ComputeNetworkAttachmentsGetIamPolicyResponse res = sdk.networkAttachments.computeNetworkAttachmentsGetIamPolicy(req, new ComputeNetworkAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeNetworkAttachmentsGetIamPolicySecurityOption1("mollitia", "vero") {{
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

            ComputeNetworkAttachmentsInsertRequest req = new ComputeNetworkAttachmentsInsertRequest("repellendus", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                networkAttachment = new NetworkAttachment() {{
                    connectionEndpoints = new org.openapis.openapi.models.shared.NetworkAttachmentConnectedEndpoint[]{{
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "necessitatibus";
                            projectIdOrNum = "quam";
                            secondaryIpCidrRanges = new String[]{{
                                add("expedita"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.STATUS_UNSPECIFIED;
                            subnetwork = "alias";
                        }}),
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "ea";
                            projectIdOrNum = "excepturi";
                            secondaryIpCidrRanges = new String[]{{
                                add("nam"),
                                add("consectetur"),
                                add("suscipit"),
                                add("est"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.STATUS_UNSPECIFIED;
                            subnetwork = "illum";
                        }}),
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "odio";
                            projectIdOrNum = "sit";
                            secondaryIpCidrRanges = new String[]{{
                                add("sit"),
                                add("corrupti"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.ACCEPTED;
                            subnetwork = "saepe";
                        }}),
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "consequatur";
                            projectIdOrNum = "fuga";
                            secondaryIpCidrRanges = new String[]{{
                                add("tenetur"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.REJECTED;
                            subnetwork = "in";
                        }}),
                    }};
                    connectionPreference = NetworkAttachmentConnectionPreferenceEnum.ACCEPT_AUTOMATIC;
                    creationTimestamp = "animi";
                    description = "ullam";
                    fingerprint = "similique";
                    id = "aperiam";
                    kind = "adipisci";
                    name = "Mrs. Patty Block";
                    network = "sint";
                    producerAcceptLists = new String[]{{
                        add("eius"),
                    }};
                    producerRejectLists = new String[]{{
                        add("error"),
                    }};
                    region = "maiores";
                    selfLink = "mollitia";
                    selfLinkWithId = "suscipit";
                    subnetworks = new String[]{{
                        add("totam"),
                        add("in"),
                        add("est"),
                    }};
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "libero";
                key = "esse";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "iste";
                requestId = "dolorum";
                uploadType = "vitae";
                uploadProtocol = "minima";
                userIp = "ipsum";
            }};            

            ComputeNetworkAttachmentsInsertResponse res = sdk.networkAttachments.computeNetworkAttachmentsInsert(req, new ComputeNetworkAttachmentsInsertSecurity() {{
                option1 = new ComputeNetworkAttachmentsInsertSecurityOption1("accusamus", "eos") {{
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

            ComputeNetworkAttachmentsListRequest req = new ComputeNetworkAttachmentsListRequest("fugit", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "rem";
                filter = "ad";
                key = "ipsum";
                maxResults = 608988L;
                oauthToken = "eligendi";
                orderBy = "saepe";
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                returnPartialSuccess = false;
                uploadType = "consectetur";
                uploadProtocol = "eos";
                userIp = "repellendus";
            }};            

            ComputeNetworkAttachmentsListResponse res = sdk.networkAttachments.computeNetworkAttachmentsList(req, new ComputeNetworkAttachmentsListSecurity() {{
                option1 = new ComputeNetworkAttachmentsListSecurityOption1("vitae", "aperiam") {{
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

            ComputeNetworkAttachmentsSetIamPolicyRequest req = new ComputeNetworkAttachmentsSetIamPolicyRequest("animi", "quisquam", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "quibusdam";
                            condition = new Expr() {{
                                description = "praesentium";
                                expression = "porro";
                                location = "quisquam";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("ex"),
                            }};
                            role = "quidem";
                        }}),
                        add(new Binding() {{
                            bindingId = "esse";
                            condition = new Expr() {{
                                description = "praesentium";
                                expression = "nisi";
                                location = "libero";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("amet"),
                                add("ducimus"),
                                add("harum"),
                                add("fugiat"),
                            }};
                            role = "sed";
                        }}),
                    }};
                    etag = "aut";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloribus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("accusantium"),
                                            add("nam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("reprehenderit"),
                                    add("odio"),
                                }};
                                service = "dolorum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corporis"),
                                            add("inventore"),
                                            add("provident"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("velit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sint"),
                                    add("voluptatem"),
                                }};
                                service = "odit";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "aliquam";
                                condition = new Expr() {{
                                    description = "deleniti";
                                    expression = "quos";
                                    location = "qui";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("distinctio"),
                                    add("aperiam"),
                                    add("consectetur"),
                                }};
                                role = "porro";
                            }}),
                            add(new Binding() {{
                                bindingId = "nihil";
                                condition = new Expr() {{
                                    description = "asperiores";
                                    expression = "possimus";
                                    location = "consequuntur";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("debitis"),
                                    add("dolore"),
                                }};
                                role = "in";
                            }}),
                            add(new Binding() {{
                                bindingId = "corrupti";
                                condition = new Expr() {{
                                    description = "iusto";
                                    expression = "architecto";
                                    location = "culpa";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("necessitatibus"),
                                    add("possimus"),
                                    add("in"),
                                }};
                                role = "qui";
                            }}),
                        }};
                        etag = "laborum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quaerat";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("id"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "repellendus";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("sit"),
                                            add("repellat"),
                                            add("nemo"),
                                            add("quos"),
                                        }};
                                    }}),
                                }};
                                description = "optio";
                                ins = new String[]{{
                                    add("libero"),
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
                                                    name = "Dr. Jessica Goldner PhD";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alonzo Mills";
                                                    value = "eos";
                                                }}),
                                            }};
                                            field = "porro";
                                            metric = "nostrum";
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
                                                    name = "Zachary Heathcote";
                                                    value = "maiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Adrienne Sporer";
                                                    value = "consequatur";
                                                }}),
                                            }};
                                            field = "eos";
                                            metric = "totam";
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
                                                    name = "Jay Feil V";
                                                    value = "id";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Manuel Krajcik";
                                                    value = "consequuntur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sylvester Wunsch";
                                                    value = "beatae";
                                                }}),
                                            }};
                                            field = "assumenda";
                                            metric = "quibusdam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("vero"),
                                    add("eaque"),
                                }};
                                permissions = new String[]{{
                                    add("totam"),
                                    add("repellat"),
                                    add("iusto"),
                                }};
                            }}),
                        }};
                        version = 289295;
                    }};;
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "quis";
                fields = "quaerat";
                key = "eligendi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "ab";
                uploadProtocol = "laboriosam";
                userIp = "vero";
            }};            

            ComputeNetworkAttachmentsSetIamPolicyResponse res = sdk.networkAttachments.computeNetworkAttachmentsSetIamPolicy(req, new ComputeNetworkAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeNetworkAttachmentsSetIamPolicySecurityOption1("atque", "unde") {{
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

            ComputeNetworkAttachmentsTestIamPermissionsRequest req = new ComputeNetworkAttachmentsTestIamPermissionsRequest("qui", "aliquid", "sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("libero"),
                    }};
                }};;
                accessToken = "soluta";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "quo";
                key = "explicabo";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "illum";
                uploadProtocol = "fugit";
                userIp = "reprehenderit";
            }};            

            ComputeNetworkAttachmentsTestIamPermissionsResponse res = sdk.networkAttachments.computeNetworkAttachmentsTestIamPermissions(req, new ComputeNetworkAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkAttachmentsTestIamPermissionsSecurityOption1("eaque", "inventore") {{
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
