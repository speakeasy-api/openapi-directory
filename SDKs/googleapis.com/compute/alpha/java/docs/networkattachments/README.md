# networkAttachments

### Available Operations

* [computeNetworkAttachmentsAggregatedList](#computenetworkattachmentsaggregatedlist) - Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
* [computeNetworkAttachmentsDelete](#computenetworkattachmentsdelete) - Deletes the specified NetworkAttachment in the given scope
* [computeNetworkAttachmentsGet](#computenetworkattachmentsget) - Returns the specified NetworkAttachment resource in the given scope.
* [computeNetworkAttachmentsGetIamPolicy](#computenetworkattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkAttachmentsInsert](#computenetworkattachmentsinsert) - Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeNetworkAttachmentsList](#computenetworkattachmentslist) - Lists the NetworkAttachments for a project in the given scope.
* [computeNetworkAttachmentsPatch](#computenetworkattachmentspatch) - Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
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

            ComputeNetworkAttachmentsAggregatedListRequest req = new ComputeNetworkAttachmentsAggregatedListRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "occaecati";
                filter = "eveniet";
                includeAllScopes = false;
                key = "hic";
                maxResults = 252872L;
                oauthToken = "sint";
                orderBy = "illo";
                pageToken = "dolores";
                prettyPrint = false;
                quotaUser = "magni";
                returnPartialSuccess = false;
                uploadType = "a";
                uploadProtocol = "dignissimos";
                userIp = "ratione";
            }};            

            ComputeNetworkAttachmentsAggregatedListResponse res = sdk.networkAttachments.computeNetworkAttachmentsAggregatedList(req, new ComputeNetworkAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeNetworkAttachmentsAggregatedListSecurityOption1("ex", "explicabo") {{
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

            ComputeNetworkAttachmentsDeleteRequest req = new ComputeNetworkAttachmentsDeleteRequest("consectetur", "corporis", "odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "quos";
                key = "officia";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "cumque";
                uploadType = "velit";
                uploadProtocol = "ex";
                userIp = "ab";
            }};            

            ComputeNetworkAttachmentsDeleteResponse res = sdk.networkAttachments.computeNetworkAttachmentsDelete(req, new ComputeNetworkAttachmentsDeleteSecurity() {{
                option1 = new ComputeNetworkAttachmentsDeleteSecurityOption1("illo", "earum") {{
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

            ComputeNetworkAttachmentsGetRequest req = new ComputeNetworkAttachmentsGetRequest("dicta", "deserunt", "asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "vel";
                key = "repellendus";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "accusantium";
                uploadProtocol = "recusandae";
                userIp = "est";
            }};            

            ComputeNetworkAttachmentsGetResponse res = sdk.networkAttachments.computeNetworkAttachmentsGet(req, new ComputeNetworkAttachmentsGetSecurity() {{
                option1 = new ComputeNetworkAttachmentsGetSecurityOption1("vero", "placeat") {{
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

            ComputeNetworkAttachmentsGetIamPolicyRequest req = new ComputeNetworkAttachmentsGetIamPolicyRequest("qui", "necessitatibus", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "expedita";
                key = "sint";
                oauthToken = "tempore";
                optionsRequestedPolicyVersion = 734936L;
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "quos";
                uploadProtocol = "quas";
                userIp = "perspiciatis";
            }};            

            ComputeNetworkAttachmentsGetIamPolicyResponse res = sdk.networkAttachments.computeNetworkAttachmentsGetIamPolicy(req, new ComputeNetworkAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeNetworkAttachmentsGetIamPolicySecurityOption1("dolorum", "accusantium") {{
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

            ComputeNetworkAttachmentsInsertRequest req = new ComputeNetworkAttachmentsInsertRequest("rerum", "voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                networkAttachment = new NetworkAttachment() {{
                    connectionEndpoints = new org.openapis.openapi.models.shared.NetworkAttachmentConnectedEndpoint[]{{
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "dignissimos";
                            projectIdOrNum = "labore";
                            secondaryIpCidrRanges = new String[]{{
                                add("maxime"),
                                add("minus"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.REJECTED;
                            subnetwork = "aperiam";
                        }}),
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "molestias";
                            projectIdOrNum = "repellat";
                            secondaryIpCidrRanges = new String[]{{
                                add("quia"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.ACCEPTED;
                            subnetwork = "vel";
                        }}),
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "suscipit";
                            projectIdOrNum = "ab";
                            secondaryIpCidrRanges = new String[]{{
                                add("sequi"),
                                add("amet"),
                                add("veritatis"),
                                add("autem"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.STATUS_UNSPECIFIED;
                            subnetwork = "officia";
                        }}),
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "accusantium";
                            projectIdOrNum = "ducimus";
                            secondaryIpCidrRanges = new String[]{{
                                add("sit"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.STATUS_UNSPECIFIED;
                            subnetwork = "quidem";
                        }}),
                    }};
                    connectionPreference = NetworkAttachmentConnectionPreferenceEnum.INVALID;
                    creationTimestamp = "repudiandae";
                    description = "voluptate";
                    fingerprint = "unde";
                    id = "sequi";
                    kind = "occaecati";
                    name = "Gustavo Dietrich";
                    network = "qui";
                    producerAcceptLists = new String[]{{
                        add("autem"),
                        add("ab"),
                        add("possimus"),
                        add("optio"),
                    }};
                    producerRejectLists = new String[]{{
                        add("dignissimos"),
                        add("quibusdam"),
                        add("quos"),
                    }};
                    region = "explicabo";
                    selfLink = "assumenda";
                    selfLinkWithId = "iure";
                    subnetworks = new String[]{{
                        add("expedita"),
                        add("beatae"),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "debitis";
                key = "expedita";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "error";
                requestId = "alias";
                uploadType = "exercitationem";
                uploadProtocol = "quidem";
                userIp = "aliquam";
            }};            

            ComputeNetworkAttachmentsInsertResponse res = sdk.networkAttachments.computeNetworkAttachmentsInsert(req, new ComputeNetworkAttachmentsInsertSecurity() {{
                option1 = new ComputeNetworkAttachmentsInsertSecurityOption1("velit", "voluptatem") {{
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

            ComputeNetworkAttachmentsListRequest req = new ComputeNetworkAttachmentsListRequest("consequatur", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "est";
                filter = "facilis";
                key = "ipsam";
                maxResults = 145482L;
                oauthToken = "sed";
                orderBy = "iusto";
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "minus";
                returnPartialSuccess = false;
                uploadType = "asperiores";
                uploadProtocol = "non";
                userIp = "at";
            }};            

            ComputeNetworkAttachmentsListResponse res = sdk.networkAttachments.computeNetworkAttachmentsList(req, new ComputeNetworkAttachmentsListSecurity() {{
                option1 = new ComputeNetworkAttachmentsListSecurityOption1("pariatur", "earum") {{
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

## computeNetworkAttachmentsPatch

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsPatchRequest;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsPatchResponse;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkAttachmentsPatchSecurityOption2;
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

            ComputeNetworkAttachmentsPatchRequest req = new ComputeNetworkAttachmentsPatchRequest("itaque", "sint", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                networkAttachment1 = new NetworkAttachment() {{
                    connectionEndpoints = new org.openapis.openapi.models.shared.NetworkAttachmentConnectedEndpoint[]{{
                        add(new NetworkAttachmentConnectedEndpoint() {{
                            ipAddress = "dignissimos";
                            projectIdOrNum = "deserunt";
                            secondaryIpCidrRanges = new String[]{{
                                add("totam"),
                            }};
                            status = NetworkAttachmentConnectedEndpointStatusEnum.CLOSED;
                            subnetwork = "saepe";
                        }}),
                    }};
                    connectionPreference = NetworkAttachmentConnectionPreferenceEnum.ACCEPT_AUTOMATIC;
                    creationTimestamp = "quod";
                    description = "harum";
                    fingerprint = "blanditiis";
                    id = "exercitationem";
                    kind = "ab";
                    name = "Diane Wolff";
                    network = "aliquam";
                    producerAcceptLists = new String[]{{
                        add("hic"),
                        add("non"),
                        add("est"),
                    }};
                    producerRejectLists = new String[]{{
                        add("tempora"),
                        add("quidem"),
                    }};
                    region = "ullam";
                    selfLink = "ut";
                    selfLinkWithId = "inventore";
                    subnetworks = new String[]{{
                        add("non"),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "officia";
                key = "magnam";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "dolorum";
                uploadType = "sint";
                uploadProtocol = "dicta";
                userIp = "consectetur";
            }};            

            ComputeNetworkAttachmentsPatchResponse res = sdk.networkAttachments.computeNetworkAttachmentsPatch(req, new ComputeNetworkAttachmentsPatchSecurity() {{
                option1 = new ComputeNetworkAttachmentsPatchSecurityOption1("debitis", "sunt") {{
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

            ComputeNetworkAttachmentsSetIamPolicyRequest req = new ComputeNetworkAttachmentsSetIamPolicyRequest("similique", "odio", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "distinctio";
                            condition = new Expr() {{
                                description = "cum";
                                expression = "molestiae";
                                location = "consectetur";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("delectus"),
                                add("quo"),
                                add("saepe"),
                                add("earum"),
                            }};
                            role = "culpa";
                        }}),
                    }};
                    etag = "porro";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("praesentium"),
                                            add("aliquam"),
                                            add("similique"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officiis"),
                                            add("quod"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("voluptatum"),
                                    add("explicabo"),
                                }};
                                service = "tempore";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("id"),
                                            add("sint"),
                                            add("modi"),
                                            add("corrupti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("impedit"),
                                    add("nobis"),
                                }};
                                service = "vitae";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "quas";
                                condition = new Expr() {{
                                    description = "possimus";
                                    expression = "reiciendis";
                                    location = "in";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("at"),
                                    add("occaecati"),
                                    add("eius"),
                                    add("amet"),
                                }};
                                role = "libero";
                            }}),
                            add(new Binding() {{
                                bindingId = "minus";
                                condition = new Expr() {{
                                    description = "quis";
                                    expression = "suscipit";
                                    location = "assumenda";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("modi"),
                                }};
                                role = "fuga";
                            }}),
                        }};
                        etag = "quidem";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "voluptatibus";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("iste"),
                                            add("voluptatem"),
                                            add("qui"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "atque";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("quaerat"),
                                        }};
                                    }}),
                                }};
                                description = "reiciendis";
                                ins = new String[]{{
                                    add("ipsum"),
                                    add("tenetur"),
                                    add("quo"),
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
                                                    name = "Forrest Hirthe MD";
                                                    value = "eligendi";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "tempore";
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
                                                    name = "Andres Haag";
                                                    value = "quibusdam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Christie Tillman";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            field = "tenetur";
                                            metric = "tenetur";
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
                                                    name = "Ron Simonis";
                                                    value = "voluptate";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mary Crist";
                                                    value = "sit";
                                                }}),
                                            }};
                                            field = "repellendus";
                                            metric = "accusamus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("magnam"),
                                    add("earum"),
                                    add("inventore"),
                                    add("enim"),
                                }};
                                permissions = new String[]{{
                                    add("eos"),
                                    add("neque"),
                                    add("eaque"),
                                    add("dolorem"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "magni";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("laudantium"),
                                        }};
                                    }}),
                                }};
                                description = "incidunt";
                                ins = new String[]{{
                                    add("dolorem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Angelo Wiegand";
                                                    value = "fugiat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Edward Conroy";
                                                    value = "laboriosam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rosalie Corkery V";
                                                    value = "eos";
                                                }}),
                                            }};
                                            field = "tempora";
                                            metric = "fugiat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("minima"),
                                    add("labore"),
                                }};
                                permissions = new String[]{{
                                    add("unde"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "perferendis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("iste"),
                                            add("molestias"),
                                            add("ab"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "fuga";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("veniam"),
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "eaque";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("dolor"),
                                            add("voluptas"),
                                            add("iusto"),
                                        }};
                                    }}),
                                }};
                                description = "nulla";
                                ins = new String[]{{
                                    add("voluptates"),
                                    add("architecto"),
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
                                                    name = "Joyce Leffler";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jean Kub";
                                                    value = "esse";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Anna Rohan";
                                                    value = "fugit";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "blanditiis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Milton Wisoky Jr.";
                                                    value = "recusandae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Harold Casper";
                                                    value = "quisquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clara Boyle";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kayla Kub";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            field = "adipisci";
                                            metric = "ratione";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("est"),
                                }};
                                permissions = new String[]{{
                                    add("minus"),
                                    add("natus"),
                                    add("ea"),
                                }};
                            }}),
                        }};
                        version = 906298;
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "repellendus";
                key = "modi";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "quidem";
                uploadProtocol = "dolore";
                userIp = "ratione";
            }};            

            ComputeNetworkAttachmentsSetIamPolicyResponse res = sdk.networkAttachments.computeNetworkAttachmentsSetIamPolicy(req, new ComputeNetworkAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeNetworkAttachmentsSetIamPolicySecurityOption1("eaque", "culpa") {{
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

            ComputeNetworkAttachmentsTestIamPermissionsRequest req = new ComputeNetworkAttachmentsTestIamPermissionsRequest("nihil", "error", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("laboriosam"),
                        add("dolore"),
                    }};
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "voluptatibus";
                key = "explicabo";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "saepe";
                uploadProtocol = "adipisci";
                userIp = "quaerat";
            }};            

            ComputeNetworkAttachmentsTestIamPermissionsResponse res = sdk.networkAttachments.computeNetworkAttachmentsTestIamPermissions(req, new ComputeNetworkAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkAttachmentsTestIamPermissionsSecurityOption1("exercitationem", "quisquam") {{
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
