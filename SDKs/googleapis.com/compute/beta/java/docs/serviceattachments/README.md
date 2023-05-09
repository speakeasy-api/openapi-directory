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

            ComputeServiceAttachmentsAggregatedListRequest req = new ComputeServiceAttachmentsAggregatedListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "ex";
                filter = "cum";
                includeAllScopes = false;
                key = "earum";
                maxResults = 848778L;
                oauthToken = "voluptatibus";
                orderBy = "explicabo";
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "iusto";
                returnPartialSuccess = false;
                uploadType = "iusto";
                uploadProtocol = "officiis";
                userIp = "fuga";
            }};            

            ComputeServiceAttachmentsAggregatedListResponse res = sdk.serviceAttachments.computeServiceAttachmentsAggregatedList(req, new ComputeServiceAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeServiceAttachmentsAggregatedListSecurityOption1("soluta", "adipisci") {{
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

            ComputeServiceAttachmentsDeleteRequest req = new ComputeServiceAttachmentsDeleteRequest("alias", "quas", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "expedita";
                key = "rem";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "nihil";
                requestId = "repellat";
                uploadType = "deserunt";
                uploadProtocol = "autem";
                userIp = "deserunt";
            }};            

            ComputeServiceAttachmentsDeleteResponse res = sdk.serviceAttachments.computeServiceAttachmentsDelete(req, new ComputeServiceAttachmentsDeleteSecurity() {{
                option1 = new ComputeServiceAttachmentsDeleteSecurityOption1("minima", "vel") {{
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

            ComputeServiceAttachmentsGetRequest req = new ComputeServiceAttachmentsGetRequest("fugit", "illum", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "reprehenderit";
                key = "enim";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "consectetur";
                uploadProtocol = "consectetur";
                userIp = "ullam";
            }};            

            ComputeServiceAttachmentsGetResponse res = sdk.serviceAttachments.computeServiceAttachmentsGet(req, new ComputeServiceAttachmentsGetSecurity() {{
                option1 = new ComputeServiceAttachmentsGetSecurityOption1("amet", "in") {{
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

            ComputeServiceAttachmentsGetIamPolicyRequest req = new ComputeServiceAttachmentsGetIamPolicyRequest("numquam", "repellendus", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "rerum";
                key = "ducimus";
                oauthToken = "quasi";
                optionsRequestedPolicyVersion = 731360L;
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "laboriosam";
                uploadProtocol = "quidem";
                userIp = "recusandae";
            }};            

            ComputeServiceAttachmentsGetIamPolicyResponse res = sdk.serviceAttachments.computeServiceAttachmentsGetIamPolicy(req, new ComputeServiceAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeServiceAttachmentsGetIamPolicySecurityOption1("provident", "natus") {{
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

            ComputeServiceAttachmentsInsertRequest req = new ComputeServiceAttachmentsInsertRequest("aut", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceAttachment = new ServiceAttachment() {{
                    connectedEndpoints = new org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint[]{{
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "dolorum";
                            pscConnectionId = "necessitatibus";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.PENDING;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "ullam";
                            pscConnectionId = "commodi";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.REJECTED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "commodi";
                            pscConnectionId = "sit";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.PENDING;
                        }}),
                    }};
                    connectionPreference = ServiceAttachmentConnectionPreferenceEnum.ACCEPT_AUTOMATIC;
                    consumerAcceptLists = new org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit[]{{
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 855121L;
                            networkUrl = "quas";
                            projectIdOrNum = "culpa";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 165772L;
                            networkUrl = "placeat";
                            projectIdOrNum = "voluptatum";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 687486L;
                            networkUrl = "libero";
                            projectIdOrNum = "eius";
                        }}),
                    }};
                    consumerRejectLists = new String[]{{
                        add("iusto"),
                        add("accusamus"),
                    }};
                    creationTimestamp = "consectetur";
                    description = "laudantium";
                    domainNames = new String[]{{
                        add("consequatur"),
                    }};
                    enableProxyProtocol = false;
                    fingerprint = "minus";
                    id = "blanditiis";
                    kind = "voluptate";
                    name = "Adrian Rodriguez Sr.";
                    natSubnets = new String[]{{
                        add("repudiandae"),
                        add("repudiandae"),
                        add("possimus"),
                        add("enim"),
                    }};
                    producerForwardingRule = "vero";
                    pscServiceAttachmentId = new Uint128() {{
                        high = "exercitationem";
                        low = "aut";
                    }};;
                    reconcileConnections = false;
                    region = "magni";
                    selfLink = "quidem";
                    targetService = "voluptate";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "et";
                key = "ab";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "maxime";
                uploadType = "non";
                uploadProtocol = "atque";
                userIp = "impedit";
            }};            

            ComputeServiceAttachmentsInsertResponse res = sdk.serviceAttachments.computeServiceAttachmentsInsert(req, new ComputeServiceAttachmentsInsertSecurity() {{
                option1 = new ComputeServiceAttachmentsInsertSecurityOption1("accusamus", "possimus") {{
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

            ComputeServiceAttachmentsListRequest req = new ComputeServiceAttachmentsListRequest("explicabo", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "modi";
                filter = "fugit";
                key = "modi";
                maxResults = 899763L;
                oauthToken = "veritatis";
                orderBy = "porro";
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "beatae";
                returnPartialSuccess = false;
                uploadType = "at";
                uploadProtocol = "nisi";
                userIp = "iusto";
            }};            

            ComputeServiceAttachmentsListResponse res = sdk.serviceAttachments.computeServiceAttachmentsList(req, new ComputeServiceAttachmentsListSecurity() {{
                option1 = new ComputeServiceAttachmentsListSecurityOption1("repellendus", "blanditiis") {{
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

            ComputeServiceAttachmentsPatchRequest req = new ComputeServiceAttachmentsPatchRequest("expedita", "officiis", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceAttachment1 = new ServiceAttachment() {{
                    connectedEndpoints = new org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint[]{{
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "ratione";
                            pscConnectionId = "alias";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.REJECTED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "ullam";
                            pscConnectionId = "sint";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.REJECTED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "similique";
                            pscConnectionId = "corrupti";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.NEEDS_ATTENTION;
                        }}),
                    }};
                    connectionPreference = ServiceAttachmentConnectionPreferenceEnum.CONNECTION_PREFERENCE_UNSPECIFIED;
                    consumerAcceptLists = new org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit[]{{
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 48926L;
                            networkUrl = "aspernatur";
                            projectIdOrNum = "non";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 446866L;
                            networkUrl = "cum";
                            projectIdOrNum = "est";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 916399L;
                            networkUrl = "molestias";
                            projectIdOrNum = "nam";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 341502L;
                            networkUrl = "sapiente";
                            projectIdOrNum = "architecto";
                        }}),
                    }};
                    consumerRejectLists = new String[]{{
                        add("culpa"),
                        add("enim"),
                        add("voluptatibus"),
                        add("assumenda"),
                    }};
                    creationTimestamp = "possimus";
                    description = "quo";
                    domainNames = new String[]{{
                        add("eaque"),
                        add("voluptatibus"),
                        add("praesentium"),
                    }};
                    enableProxyProtocol = false;
                    fingerprint = "sapiente";
                    id = "provident";
                    kind = "earum";
                    name = "Jacob Schamberger";
                    natSubnets = new String[]{{
                        add("laboriosam"),
                        add("ex"),
                    }};
                    producerForwardingRule = "consequuntur";
                    pscServiceAttachmentId = new Uint128() {{
                        high = "fugiat";
                        low = "debitis";
                    }};;
                    reconcileConnections = false;
                    region = "perferendis";
                    selfLink = "iure";
                    targetService = "eveniet";
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "beatae";
                key = "sint";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "molestiae";
                uploadType = "porro";
                uploadProtocol = "rem";
                userIp = "dolores";
            }};            

            ComputeServiceAttachmentsPatchResponse res = sdk.serviceAttachments.computeServiceAttachmentsPatch(req, new ComputeServiceAttachmentsPatchSecurity() {{
                option1 = new ComputeServiceAttachmentsPatchSecurityOption1("quasi", "odit") {{
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

            ComputeServiceAttachmentsSetIamPolicyRequest req = new ComputeServiceAttachmentsSetIamPolicyRequest("animi", "eligendi", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "corporis";
                            condition = new Expr() {{
                                description = "aspernatur";
                                expression = "enim";
                                location = "libero";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("nulla"),
                                add("saepe"),
                                add("quod"),
                                add("id"),
                            }};
                            role = "consequatur";
                        }}),
                        add(new Binding() {{
                            bindingId = "tempora";
                            condition = new Expr() {{
                                description = "ullam";
                                expression = "totam";
                                location = "ad";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("error"),
                                add("distinctio"),
                            }};
                            role = "debitis";
                        }}),
                    }};
                    etag = "deleniti";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("optio"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("blanditiis"),
                                            add("deserunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("placeat"),
                                }};
                                service = "unde";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quibusdam"),
                                            add("neque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tempora"),
                                            add("iure"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("vel"),
                                    add("dolore"),
                                    add("non"),
                                }};
                                service = "quia";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("similique"),
                                            add("corrupti"),
                                            add("cum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptate"),
                                            add("velit"),
                                            add("ipsam"),
                                            add("delectus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illum"),
                                            add("nisi"),
                                            add("tempora"),
                                            add("facere"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("necessitatibus"),
                                    add("fugit"),
                                }};
                                service = "dolores";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("qui"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("nesciunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eligendi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("tempora"),
                                }};
                                service = "nobis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "voluptates";
                                condition = new Expr() {{
                                    description = "fugit";
                                    expression = "ipsum";
                                    location = "ex";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("saepe"),
                                    add("tenetur"),
                                    add("praesentium"),
                                    add("expedita"),
                                }};
                                role = "earum";
                            }}),
                            add(new Binding() {{
                                bindingId = "aspernatur";
                                condition = new Expr() {{
                                    description = "voluptatem";
                                    expression = "temporibus";
                                    location = "similique";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("fuga"),
                                    add("est"),
                                }};
                                role = "dignissimos";
                            }}),
                        }};
                        etag = "exercitationem";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "ipsam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("facere"),
                                            add("delectus"),
                                            add("iste"),
                                            add("blanditiis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "aliquid";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("rerum"),
                                            add("deleniti"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "perferendis";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("voluptas"),
                                            add("nam"),
                                        }};
                                    }}),
                                }};
                                description = "nulla";
                                ins = new String[]{{
                                    add("quidem"),
                                    add("laudantium"),
                                    add("doloribus"),
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
                                                    name = "Aubrey Powlowski";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fred Mohr";
                                                    value = "sed";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rene Mante";
                                                    value = "in";
                                                }}),
                                            }};
                                            field = "nobis";
                                            metric = "doloremque";
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
                                                    name = "Paul O'Connell";
                                                    value = "minima";
                                                }}),
                                            }};
                                            field = "doloribus";
                                            metric = "enim";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Pete Schaden";
                                                    value = "odit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pearl Haley";
                                                    value = "quia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dexter Stark";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "soluta";
                                            metric = "quod";
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
                                                    name = "Vera Murphy";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Joey Wolff";
                                                    value = "iure";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pat Durgan";
                                                    value = "debitis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Sylvia Waelchi";
                                                    value = "mollitia";
                                                }}),
                                            }};
                                            field = "dolore";
                                            metric = "doloribus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("maxime"),
                                    add("tempora"),
                                    add("totam"),
                                }};
                                permissions = new String[]{{
                                    add("nesciunt"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "libero";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ex"),
                                            add("omnis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "tempora";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("repellat"),
                                            add("exercitationem"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "excepturi";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("distinctio"),
                                            add("unde"),
                                            add("esse"),
                                        }};
                                    }}),
                                }};
                                description = "tempora";
                                ins = new String[]{{
                                    add("voluptatibus"),
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
                                                    name = "Marcia Sauer";
                                                    value = "atque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tracy Blick DDS";
                                                    value = "cumque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ben Harber";
                                                    value = "veniam";
                                                }}),
                                            }};
                                            field = "laborum";
                                            metric = "ad";
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
                                                    name = "Daisy Spencer Jr.";
                                                    value = "commodi";
                                                }}),
                                            }};
                                            field = "saepe";
                                            metric = "deleniti";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quisquam"),
                                    add("maiores"),
                                    add("possimus"),
                                }};
                                permissions = new String[]{{
                                    add("fuga"),
                                    add("voluptates"),
                                }};
                            }}),
                        }};
                        version = 626440;
                    }};;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.JSON;
                callback = "placeat";
                fields = "ex";
                key = "placeat";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "officiis";
                uploadProtocol = "modi";
                userIp = "totam";
            }};            

            ComputeServiceAttachmentsSetIamPolicyResponse res = sdk.serviceAttachments.computeServiceAttachmentsSetIamPolicy(req, new ComputeServiceAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeServiceAttachmentsSetIamPolicySecurityOption1("facere", "odio") {{
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

            ComputeServiceAttachmentsTestIamPermissionsRequest req = new ComputeServiceAttachmentsTestIamPermissionsRequest("earum", "suscipit", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("itaque"),
                        add("nam"),
                        add("vitae"),
                    }};
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "a";
                key = "reprehenderit";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "velit";
                uploadProtocol = "saepe";
                userIp = "maxime";
            }};            

            ComputeServiceAttachmentsTestIamPermissionsResponse res = sdk.serviceAttachments.computeServiceAttachmentsTestIamPermissions(req, new ComputeServiceAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeServiceAttachmentsTestIamPermissionsSecurityOption1("exercitationem", "commodi") {{
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
