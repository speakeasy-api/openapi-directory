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

            ComputeServiceAttachmentsAggregatedListRequest req = new ComputeServiceAttachmentsAggregatedListRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "quas";
                filter = "nihil";
                includeAllScopes = false;
                key = "vero";
                maxResults = 646426L;
                oauthToken = "commodi";
                orderBy = "explicabo";
                pageToken = "vitae";
                prettyPrint = false;
                quotaUser = "veniam";
                returnPartialSuccess = false;
                uploadType = "facere";
                uploadProtocol = "aut";
                userIp = "voluptatibus";
            }};            

            ComputeServiceAttachmentsAggregatedListResponse res = sdk.serviceAttachments.computeServiceAttachmentsAggregatedList(req, new ComputeServiceAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeServiceAttachmentsAggregatedListSecurityOption1("nobis", "facere") {{
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

            ComputeServiceAttachmentsDeleteRequest req = new ComputeServiceAttachmentsDeleteRequest("nesciunt", "vel", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "quaerat";
                key = "eos";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "qui";
                requestId = "officia";
                uploadType = "nostrum";
                uploadProtocol = "reiciendis";
                userIp = "recusandae";
            }};            

            ComputeServiceAttachmentsDeleteResponse res = sdk.serviceAttachments.computeServiceAttachmentsDelete(req, new ComputeServiceAttachmentsDeleteSecurity() {{
                option1 = new ComputeServiceAttachmentsDeleteSecurityOption1("ipsa", "sunt") {{
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

            ComputeServiceAttachmentsGetRequest req = new ComputeServiceAttachmentsGetRequest("dolor", "rem", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "quaerat";
                key = "repellat";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "laudantium";
                uploadProtocol = "architecto";
                userIp = "esse";
            }};            

            ComputeServiceAttachmentsGetResponse res = sdk.serviceAttachments.computeServiceAttachmentsGet(req, new ComputeServiceAttachmentsGetSecurity() {{
                option1 = new ComputeServiceAttachmentsGetSecurityOption1("neque", "maxime") {{
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

            ComputeServiceAttachmentsGetIamPolicyRequest req = new ComputeServiceAttachmentsGetIamPolicyRequest("in", "vel", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "ad";
                key = "error";
                oauthToken = "vero";
                optionsRequestedPolicyVersion = 855209L;
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "unde";
                uploadProtocol = "nostrum";
                userIp = "in";
            }};            

            ComputeServiceAttachmentsGetIamPolicyResponse res = sdk.serviceAttachments.computeServiceAttachmentsGetIamPolicy(req, new ComputeServiceAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeServiceAttachmentsGetIamPolicySecurityOption1("maiores", "iusto") {{
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

            ComputeServiceAttachmentsInsertRequest req = new ComputeServiceAttachmentsInsertRequest("necessitatibus", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceAttachment = new ServiceAttachment() {{
                    connectedEndpoints = new org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint[]{{
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "itaque";
                            pscConnectionId = "accusantium";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.REJECTED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "similique";
                            pscConnectionId = "molestias";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.REJECTED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "incidunt";
                            pscConnectionId = "facilis";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.CLOSED;
                        }}),
                    }};
                    connectionPreference = ServiceAttachmentConnectionPreferenceEnum.ACCEPT_AUTOMATIC;
                    consumerAcceptLists = new org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit[]{{
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 492560L;
                            networkUrl = "repudiandae";
                            projectIdOrNum = "iure";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 564391L;
                            networkUrl = "quis";
                            projectIdOrNum = "temporibus";
                        }}),
                    }};
                    consumerRejectLists = new String[]{{
                        add("non"),
                    }};
                    creationTimestamp = "tempora";
                    description = "maxime";
                    domainNames = new String[]{{
                        add("alias"),
                        add("aperiam"),
                        add("corrupti"),
                        add("architecto"),
                    }};
                    enableProxyProtocol = false;
                    fingerprint = "vero";
                    id = "vitae";
                    kind = "numquam";
                    name = "Lillie Gottlieb";
                    natSubnets = new String[]{{
                        add("neque"),
                    }};
                    producerForwardingRule = "dicta";
                    pscServiceAttachmentId = new Uint128() {{
                        high = "eum";
                        low = "natus";
                    }};;
                    reconcileConnections = false;
                    region = "ea";
                    selfLink = "ducimus";
                    targetService = "unde";
                }};;
                accessToken = "possimus";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "laboriosam";
                key = "ipsa";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "eligendi";
                uploadType = "aut";
                uploadProtocol = "aut";
                userIp = "nihil";
            }};            

            ComputeServiceAttachmentsInsertResponse res = sdk.serviceAttachments.computeServiceAttachmentsInsert(req, new ComputeServiceAttachmentsInsertSecurity() {{
                option1 = new ComputeServiceAttachmentsInsertSecurityOption1("voluptates", "esse") {{
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

            ComputeServiceAttachmentsListRequest req = new ComputeServiceAttachmentsListRequest("voluptates", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "inventore";
                filter = "nihil";
                key = "autem";
                maxResults = 110824L;
                oauthToken = "assumenda";
                orderBy = "a";
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "dignissimos";
                returnPartialSuccess = false;
                uploadType = "soluta";
                uploadProtocol = "excepturi";
                userIp = "autem";
            }};            

            ComputeServiceAttachmentsListResponse res = sdk.serviceAttachments.computeServiceAttachmentsList(req, new ComputeServiceAttachmentsListSecurity() {{
                option1 = new ComputeServiceAttachmentsListSecurityOption1("amet", "ex") {{
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

            ComputeServiceAttachmentsPatchRequest req = new ComputeServiceAttachmentsPatchRequest("veritatis", "iusto", "quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceAttachment1 = new ServiceAttachment() {{
                    connectedEndpoints = new org.openapis.openapi.models.shared.ServiceAttachmentConnectedEndpoint[]{{
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "cum";
                            pscConnectionId = "natus";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.CLOSED;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "quis";
                            pscConnectionId = "laudantium";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.PENDING;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "incidunt";
                            pscConnectionId = "nobis";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.NEEDS_ATTENTION;
                        }}),
                        add(new ServiceAttachmentConnectedEndpoint() {{
                            endpoint = "tenetur";
                            pscConnectionId = "repellendus";
                            status = ServiceAttachmentConnectedEndpointStatusEnum.STATUS_UNSPECIFIED;
                        }}),
                    }};
                    connectionPreference = ServiceAttachmentConnectionPreferenceEnum.ACCEPT_AUTOMATIC;
                    consumerAcceptLists = new org.openapis.openapi.models.shared.ServiceAttachmentConsumerProjectLimit[]{{
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 67438L;
                            networkUrl = "quibusdam";
                            projectIdOrNum = "ullam";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 391051L;
                            networkUrl = "itaque";
                            projectIdOrNum = "repellendus";
                        }}),
                        add(new ServiceAttachmentConsumerProjectLimit() {{
                            connectionLimit = 215891L;
                            networkUrl = "error";
                            projectIdOrNum = "incidunt";
                        }}),
                    }};
                    consumerRejectLists = new String[]{{
                        add("perferendis"),
                        add("voluptatem"),
                        add("amet"),
                    }};
                    creationTimestamp = "sint";
                    description = "sequi";
                    domainNames = new String[]{{
                        add("dolorum"),
                        add("quisquam"),
                        add("vel"),
                        add("illum"),
                    }};
                    enableProxyProtocol = false;
                    fingerprint = "aliquam";
                    id = "praesentium";
                    kind = "adipisci";
                    name = "Sophia Walker";
                    natSubnets = new String[]{{
                        add("tempora"),
                        add("corporis"),
                    }};
                    producerForwardingRule = "hic";
                    pscServiceAttachmentId = new Uint128() {{
                        high = "maiores";
                        low = "qui";
                    }};;
                    reconcileConnections = false;
                    region = "non";
                    selfLink = "cumque";
                    targetService = "alias";
                }};;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "placeat";
                fields = "laborum";
                key = "omnis";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "earum";
                uploadType = "iusto";
                uploadProtocol = "sequi";
                userIp = "et";
            }};            

            ComputeServiceAttachmentsPatchResponse res = sdk.serviceAttachments.computeServiceAttachmentsPatch(req, new ComputeServiceAttachmentsPatchSecurity() {{
                option1 = new ComputeServiceAttachmentsPatchSecurityOption1("amet", "autem") {{
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

            ComputeServiceAttachmentsSetIamPolicyRequest req = new ComputeServiceAttachmentsSetIamPolicyRequest("laborum", "modi", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "rerum";
                            condition = new Expr() {{
                                description = "necessitatibus";
                                expression = "libero";
                                location = "soluta";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("molestias"),
                                add("perspiciatis"),
                                add("nam"),
                            }};
                            role = "fugiat";
                        }}),
                        add(new Binding() {{
                            bindingId = "eos";
                            condition = new Expr() {{
                                description = "et";
                                expression = "cum";
                                location = "aperiam";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("commodi"),
                            }};
                            role = "distinctio";
                        }}),
                        add(new Binding() {{
                            bindingId = "molestias";
                            condition = new Expr() {{
                                description = "aspernatur";
                                expression = "consequuntur";
                                location = "facere";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("accusantium"),
                                add("atque"),
                            }};
                            role = "et";
                        }}),
                        add(new Binding() {{
                            bindingId = "facere";
                            condition = new Expr() {{
                                description = "magni";
                                expression = "sapiente";
                                location = "veritatis";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("eligendi"),
                            }};
                            role = "omnis";
                        }}),
                    }};
                    etag = "nisi";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("quae"),
                                            add("dolore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minima"),
                                            add("iste"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("alias"),
                                    add("aut"),
                                    add("recusandae"),
                                }};
                                service = "earum";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "eligendi";
                                condition = new Expr() {{
                                    description = "doloremque";
                                    expression = "nostrum";
                                    location = "possimus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("tempora"),
                                }};
                                role = "deleniti";
                            }}),
                            add(new Binding() {{
                                bindingId = "corrupti";
                                condition = new Expr() {{
                                    description = "odit";
                                    expression = "delectus";
                                    location = "ipsam";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("tempora"),
                                }};
                                role = "debitis";
                            }}),
                            add(new Binding() {{
                                bindingId = "molestias";
                                condition = new Expr() {{
                                    description = "animi";
                                    expression = "ipsum";
                                    location = "similique";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ullam"),
                                    add("unde"),
                                    add("nisi"),
                                }};
                                role = "aliquam";
                            }}),
                            add(new Binding() {{
                                bindingId = "distinctio";
                                condition = new Expr() {{
                                    description = "delectus";
                                    expression = "beatae";
                                    location = "ipsum";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("velit"),
                                    add("provident"),
                                    add("ad"),
                                }};
                                role = "animi";
                            }}),
                        }};
                        etag = "quas";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "itaque";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("animi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "iure";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("ut"),
                                            add("in"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "autem";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("veritatis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "exercitationem";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("labore"),
                                        }};
                                    }}),
                                }};
                                description = "pariatur";
                                ins = new String[]{{
                                    add("eveniet"),
                                    add("consequuntur"),
                                    add("delectus"),
                                    add("debitis"),
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
                                                    name = "Chester Kris";
                                                    value = "ducimus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Vicky Crist";
                                                    value = "quidem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Chris Nicolas Jr.";
                                                    value = "adipisci";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Hannah Thiel";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            field = "necessitatibus";
                                            metric = "rem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptas"),
                                    add("natus"),
                                    add("cum"),
                                    add("quas"),
                                }};
                                permissions = new String[]{{
                                    add("dolore"),
                                    add("necessitatibus"),
                                    add("nesciunt"),
                                }};
                            }}),
                        }};
                        version = 202189;
                    }};;
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "delectus";
                key = "ipsam";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "voluptatum";
                uploadProtocol = "itaque";
                userIp = "iste";
            }};            

            ComputeServiceAttachmentsSetIamPolicyResponse res = sdk.serviceAttachments.computeServiceAttachmentsSetIamPolicy(req, new ComputeServiceAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeServiceAttachmentsSetIamPolicySecurityOption1("neque", "excepturi") {{
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

            ComputeServiceAttachmentsTestIamPermissionsRequest req = new ComputeServiceAttachmentsTestIamPermissionsRequest("culpa", "qui", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("perspiciatis"),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "nulla";
                key = "laborum";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "error";
                userIp = "modi";
            }};            

            ComputeServiceAttachmentsTestIamPermissionsResponse res = sdk.serviceAttachments.computeServiceAttachmentsTestIamPermissions(req, new ComputeServiceAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeServiceAttachmentsTestIamPermissionsSecurityOption1("culpa", "voluptas") {{
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
