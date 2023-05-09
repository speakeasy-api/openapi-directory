# organizations

### Available Operations

* [cloudresourcemanagerOrganizationsGet](#cloudresourcemanagerorganizationsget) - Fetches an Organization resource identified by the specified resource name.
* [cloudresourcemanagerOrganizationsGetIamPolicy](#cloudresourcemanagerorganizationsgetiampolicy) - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [cloudresourcemanagerOrganizationsList](#cloudresourcemanagerorganizationslist) - Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
* [cloudresourcemanagerOrganizationsSetIamPolicy](#cloudresourcemanagerorganizationssetiampolicy) - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [cloudresourcemanagerOrganizationsTestIamPermissions](#cloudresourcemanagerorganizationstestiampermissions) - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [cloudresourcemanagerOrganizationsUpdate](#cloudresourcemanagerorganizationsupdate) - Updates an Organization resource identified by the specified resource name.

## cloudresourcemanagerOrganizationsGet

Fetches an Organization resource identified by the specified resource name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsGetRequest req = new CloudresourcemanagerOrganizationsGetRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                organizationId = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            CloudresourcemanagerOrganizationsGetResponse res = sdk.organizations.cloudresourcemanagerOrganizationsGet(req, new CloudresourcemanagerOrganizationsGetSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsGetSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerOrganizationsGetIamPolicy

Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsGetIamPolicyRequest req = new CloudresourcemanagerOrganizationsGetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 87129;
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            CloudresourcemanagerOrganizationsGetIamPolicyResponse res = sdk.organizations.cloudresourcemanagerOrganizationsGetIamPolicy(req, new CloudresourcemanagerOrganizationsGetIamPolicySecurity() {{
                option1 = new CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1("maiores", "molestiae") {{
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

## cloudresourcemanagerOrganizationsList

Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsListRequest req = new CloudresourcemanagerOrganizationsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                filter = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                pageSize = 639921L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            CloudresourcemanagerOrganizationsListResponse res = sdk.organizations.cloudresourcemanagerOrganizationsList(req, new CloudresourcemanagerOrganizationsListSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsListSecurityOption1("optio", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOrganizationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerOrganizationsSetIamPolicy

Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsSetIamPolicyRequest req = new CloudresourcemanagerOrganizationsSetIamPolicyRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("impedit"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "perferendis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("iste"),
                                            add("dolor"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "in";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "iste";
                                    expression = "iure";
                                    location = "saepe";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ipsa"),
                                }};
                                role = "reiciendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "est";
                                    expression = "mollitia";
                                    location = "laborum";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("corporis"),
                                }};
                                role = "explicabo";
                            }}),
                        }};
                        etag = "nobis";
                        version = 315428;
                    }};;
                    updateMask = "omnis";
                }};;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            CloudresourcemanagerOrganizationsSetIamPolicyResponse res = sdk.organizations.cloudresourcemanagerOrganizationsSetIamPolicy(req, new CloudresourcemanagerOrganizationsSetIamPolicySecurity("mollitia", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudresourcemanagerOrganizationsTestIamPermissions

Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsTestIamPermissionsRequest req = new CloudresourcemanagerOrganizationsTestIamPermissionsRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("mollitia"),
                        add("occaecati"),
                        add("numquam"),
                        add("commodi"),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                key = "quia";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            CloudresourcemanagerOrganizationsTestIamPermissionsResponse res = sdk.organizations.cloudresourcemanagerOrganizationsTestIamPermissions(req, new CloudresourcemanagerOrganizationsTestIamPermissionsSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1("enim", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerOrganizationsUpdate

Updates an Organization resource identified by the specified resource name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsUpdateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsUpdateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Organization;
import org.openapis.openapi.models.shared.OrganizationLifecycleStateEnum;
import org.openapis.openapi.models.shared.OrganizationOwner;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsUpdateRequest req = new CloudresourcemanagerOrganizationsUpdateRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                organization = new Organization() {{
                    creationTime = "tenetur";
                    displayName = "ipsam";
                    lifecycleState = OrganizationLifecycleStateEnum.ACTIVE;
                    name = "Richard Boyer";
                    organizationId = "laborum";
                    owner = new OrganizationOwner() {{
                        directoryCustomerId = "quasi";
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            CloudresourcemanagerOrganizationsUpdateResponse res = sdk.organizations.cloudresourcemanagerOrganizationsUpdate(req, new CloudresourcemanagerOrganizationsUpdateSecurity("cum", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
