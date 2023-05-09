# serviceAttachments

### Available Operations

* [computeServiceAttachmentsAggregatedList](#computeserviceattachmentsaggregatedlist) - Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.
* [computeServiceAttachmentsDelete](#computeserviceattachmentsdelete) - Deletes the specified ServiceAttachment in the given scope
* [computeServiceAttachmentsGet](#computeserviceattachmentsget) - Returns the specified ServiceAttachment resource in the given scope.
* [computeServiceAttachmentsGetIamPolicy](#computeserviceattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeServiceAttachmentsInsert](#computeserviceattachmentsinsert) - Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeServiceAttachmentsList](#computeserviceattachmentslist) - Lists the ServiceAttachments for a project in the given scope.
* [computeServiceAttachmentsPatch](#computeserviceattachmentspatch) - Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeServiceAttachmentsSetIamPolicy](#computeserviceattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeServiceAttachmentsTestIamPermissions](#computeserviceattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeServiceAttachmentsAggregatedList

Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsAggregatedListRequest req = new ComputeServiceAttachmentsAggregatedListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "sunt";
                filter = "excepturi";
                includeAllScopes = false;
                key = "exercitationem";
                maxResults = 702746L;
                oauthToken = "expedita";
                orderBy = "accusamus";
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "facilis";
                returnPartialSuccess = false;
                uploadType = "numquam";
                uploadProtocol = "voluptatibus";
                userIp = "voluptatum";
            }};            

            ComputeServiceAttachmentsAggregatedListResponse res = sdk.serviceAttachments.computeServiceAttachmentsAggregatedList(req, new ComputeServiceAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeServiceAttachmentsAggregatedListSecurityOption1("saepe", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceAttachmentAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeServiceAttachmentsDelete

Deletes the specified ServiceAttachment in the given scope

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsDeleteRequest req = new ComputeServiceAttachmentsDeleteRequest("illo", "voluptate", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "corrupti";
                key = "exercitationem";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "explicabo";
                userIp = "perferendis";
            }};            

            ComputeServiceAttachmentsDeleteResponse res = sdk.serviceAttachments.computeServiceAttachmentsDelete(req, new ComputeServiceAttachmentsDeleteSecurity() {{
                option1 = new ComputeServiceAttachmentsDeleteSecurityOption1("sit", "blanditiis") {{
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

## computeServiceAttachmentsGet

Returns the specified ServiceAttachment resource in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsGetRequest req = new ComputeServiceAttachmentsGetRequest("assumenda", "tempora", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "sit";
                key = "temporibus";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "commodi";
                uploadProtocol = "velit";
                userIp = "deleniti";
            }};            

            ComputeServiceAttachmentsGetResponse res = sdk.serviceAttachments.computeServiceAttachmentsGet(req, new ComputeServiceAttachmentsGetSecurity() {{
                option1 = new ComputeServiceAttachmentsGetSecurityOption1("harum", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceAttachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeServiceAttachmentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsGetIamPolicyRequest req = new ComputeServiceAttachmentsGetIamPolicyRequest("repudiandae", "beatae", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "temporibus";
                key = "deserunt";
                oauthToken = "et";
                optionsRequestedPolicyVersion = 629432L;
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "assumenda";
                uploadProtocol = "ipsa";
                userIp = "consectetur";
            }};            

            ComputeServiceAttachmentsGetIamPolicyResponse res = sdk.serviceAttachments.computeServiceAttachmentsGetIamPolicy(req, new ComputeServiceAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeServiceAttachmentsGetIamPolicySecurityOption1("at", "dignissimos") {{
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

## computeServiceAttachmentsInsert

Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsInsertRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsInsertResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ServiceAttachment;
import org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint;
import org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpointStatusEnum;
import org.openapis.openapi.models.shared.ServiceAttachmentConnectionPreferenceEnum;
import org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit;
import org.openapis.openapi.models.shared.Uint128;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsInsertRequest req = new ComputeServiceAttachmentsInsertRequest("occaecati", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceAttachment = new ServiceAttachment() {{
                    connectedEndpoints = new org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint[]{{
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "nobis";
                            pscConnectionId = "magnam";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.NEEDS_ATTENTION;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "ipsa";
                            pscConnectionId = "vitae";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.PENDING;
                        }}),
                    }};
                    connectionPreference = ServiceAttachmentConnectionPreferenceEnum.ACCEPT_MANUAL;
                    consumerAcceptLists = new org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit[]{{
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 540324L;
                            networkUrl = "suscipit";
                            projectIdOrNum = "impedit";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 469004L;
                            networkUrl = "nemo";
                            projectIdOrNum = "soluta";
                        }}),
                    }};
                    consumerRejectLists = new String[]{{
                        add("repellendus"),
                    }};
                    creationTimestamp = "et";
                    description = "eos";
                    domainNames = new String[]{{
                        add("quam"),
                        add("pariatur"),
                    }};
                    enableProxyProtocol = false;
                    fingerprint = "occaecati";
                    id = "tempora";
                    kind = "nisi";
                    name = "Jacquelyn Heidenreich";
                    natSubnets = new String[]{{
                        add("numquam"),
                        add("possimus"),
                        add("velit"),
                    }};
                    producerForwardingRule = "error";
                    pscServiceAttachmentId = new Uint128() {{
                        high = "doloribus";
                        low = "voluptatum";
                    }};;
                    reconcileConnections = false;
                    region = "maiores";
                    selfLink = "fugiat";
                    targetService = "nostrum";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "quis";
                key = "eligendi";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "ipsa";
                uploadType = "eos";
                uploadProtocol = "nostrum";
                userIp = "repellendus";
            }};            

            ComputeServiceAttachmentsInsertResponse res = sdk.serviceAttachments.computeServiceAttachmentsInsert(req, new ComputeServiceAttachmentsInsertSecurity() {{
                option1 = new ComputeServiceAttachmentsInsertSecurityOption1("amet", "totam") {{
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

## computeServiceAttachmentsList

Lists the ServiceAttachments for a project in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsListRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsListResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsListSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsListRequest req = new ComputeServiceAttachmentsListRequest("assumenda", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "eum";
                filter = "quaerat";
                key = "ex";
                maxResults = 575684L;
                oauthToken = "quo";
                orderBy = "ipsam";
                pageToken = "quaerat";
                prettyPrint = false;
                quotaUser = "modi";
                returnPartialSuccess = false;
                uploadType = "vero";
                uploadProtocol = "voluptate";
                userIp = "quos";
            }};            

            ComputeServiceAttachmentsListResponse res = sdk.serviceAttachments.computeServiceAttachmentsList(req, new ComputeServiceAttachmentsListSecurity() {{
                option1 = new ComputeServiceAttachmentsListSecurityOption1("commodi", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceAttachmentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeServiceAttachmentsPatch

Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsPatchRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsPatchResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ServiceAttachment;
import org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint;
import org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpointStatusEnum;
import org.openapis.openapi.models.shared.ServiceAttachmentConnectionPreferenceEnum;
import org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit;
import org.openapis.openapi.models.shared.Uint128;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsPatchRequest req = new ComputeServiceAttachmentsPatchRequest("iste", "nobis", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceAttachment1 = new ServiceAttachment() {{
                    connectedEndpoints = new org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint[]{{
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "ut";
                            pscConnectionId = "in";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.STATUS_UNSPECIFIED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "repellendus";
                            pscConnectionId = "aspernatur";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.CLOSED;
                        }}),
                    }};
                    connectionPreference = ServiceAttachmentConnectionPreferenceEnum.CONNECTION_PREFERENCE_UNSPECIFIED;
                    consumerAcceptLists = new org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit[]{{
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 657683L;
                            networkUrl = "corrupti";
                            projectIdOrNum = "fugit";
                        }}),
                    }};
                    consumerRejectLists = new String[]{{
                        add("repudiandae"),
                        add("ipsam"),
                        add("est"),
                        add("culpa"),
                    }};
                    creationTimestamp = "maxime";
                    description = "consequatur";
                    domainNames = new String[]{{
                        add("eveniet"),
                        add("nam"),
                        add("unde"),
                    }};
                    enableProxyProtocol = false;
                    fingerprint = "exercitationem";
                    id = "eius";
                    kind = "cum";
                    name = "Kristy Fahey";
                    natSubnets = new String[]{{
                        add("est"),
                        add("dolorem"),
                        add("expedita"),
                    }};
                    producerForwardingRule = "numquam";
                    pscServiceAttachmentId = new Uint128() {{
                        high = "illum";
                        low = "beatae";
                    }};;
                    reconcileConnections = false;
                    region = "deleniti";
                    selfLink = "omnis";
                    targetService = "non";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "vitae";
                key = "eos";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "expedita";
                uploadType = "explicabo";
                uploadProtocol = "omnis";
                userIp = "earum";
            }};            

            ComputeServiceAttachmentsPatchResponse res = sdk.serviceAttachments.computeServiceAttachmentsPatch(req, new ComputeServiceAttachmentsPatchSecurity() {{
                option1 = new ComputeServiceAttachmentsPatchSecurityOption1("atque", "expedita") {{
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

## computeServiceAttachmentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsSetIamPolicySecurityOption2;
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

            ComputeServiceAttachmentsSetIamPolicyRequest req = new ComputeServiceAttachmentsSetIamPolicyRequest("vitae", "laudantium", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "sunt";
                            condition = new Expr() {{
                                description = "veniam";
                                expression = "veniam";
                                location = "suscipit";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("corrupti"),
                            }};
                            role = "labore";
                        }}),
                    }};
                    etag = "assumenda";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("molestiae"),
                                            add("cupiditate"),
                                            add("magnam"),
                                            add("pariatur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repellat"),
                                            add("quam"),
                                            add("asperiores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reprehenderit"),
                                            add("et"),
                                            add("a"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iusto"),
                                            add("ipsa"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("praesentium"),
                                }};
                                service = "vel";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eos"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("earum"),
                                            add("quaerat"),
                                            add("sunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("assumenda"),
                                            add("quis"),
                                            add("mollitia"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("doloremque"),
                                    add("quidem"),
                                    add("delectus"),
                                    add("praesentium"),
                                }};
                                service = "nulla";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("harum"),
                                            add("laboriosam"),
                                            add("non"),
                                            add("molestiae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("adipisci"),
                                            add("delectus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nam"),
                                }};
                                service = "at";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "consectetur";
                                condition = new Expr() {{
                                    description = "autem";
                                    expression = "accusamus";
                                    location = "repellat";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("eveniet"),
                                    add("id"),
                                    add("beatae"),
                                    add("culpa"),
                                }};
                                role = "illum";
                            }}),
                        }};
                        etag = "dolor";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "minima";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("fugiat"),
                                            add("dignissimos"),
                                        }};
                                    }}),
                                }};
                                description = "quibusdam";
                                ins = new String[]{{
                                    add("laboriosam"),
                                    add("voluptatum"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Jeanne Goyette I";
                                                    value = "earum";
                                                }}),
                                            }};
                                            field = "pariatur";
                                            metric = "sed";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("at"),
                                }};
                                permissions = new String[]{{
                                    add("cum"),
                                }};
                            }}),
                        }};
                        version = 717796;
                    }};;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "labore";
                key = "ipsa";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "fuga";
                uploadProtocol = "possimus";
                userIp = "quisquam";
            }};            

            ComputeServiceAttachmentsSetIamPolicyResponse res = sdk.serviceAttachments.computeServiceAttachmentsSetIamPolicy(req, new ComputeServiceAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeServiceAttachmentsSetIamPolicySecurityOption1("modi", "voluptatem") {{
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

## computeServiceAttachmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeServiceAttachmentsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeServiceAttachmentsTestIamPermissionsRequest req = new ComputeServiceAttachmentsTestIamPermissionsRequest("magni", "laudantium", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("pariatur"),
                        add("illum"),
                        add("sapiente"),
                        add("quae"),
                    }};
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "nostrum";
                key = "dignissimos";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "perferendis";
                uploadProtocol = "dolorem";
                userIp = "unde";
            }};            

            ComputeServiceAttachmentsTestIamPermissionsResponse res = sdk.serviceAttachments.computeServiceAttachmentsTestIamPermissions(req, new ComputeServiceAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeServiceAttachmentsTestIamPermissionsSecurityOption1("ea", "quos") {{
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
