# organizations

### Available Operations

* [cloudresourcemanagerOrganizationsGet](#cloudresourcemanagerorganizationsget) - Fetches an Organization resource identified by the specified resource name.
* [cloudresourcemanagerOrganizationsGetIamPolicy](#cloudresourcemanagerorganizationsgetiampolicy) - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization
* [cloudresourcemanagerOrganizationsSearch](#cloudresourcemanagerorganizationssearch) - Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`
* [cloudresourcemanagerOrganizationsSetIamPolicy](#cloudresourcemanagerorganizationssetiampolicy) - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization
* [cloudresourcemanagerOrganizationsTestIamPermissions](#cloudresourcemanagerorganizationstestiampermissions) - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.

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

            CloudresourcemanagerOrganizationsGetRequest req = new CloudresourcemanagerOrganizationsGetRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                key = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            CloudresourcemanagerOrganizationsGetResponse res = sdk.organizations.cloudresourcemanagerOrganizationsGet(req, new CloudresourcemanagerOrganizationsGetSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsGetSecurityOption1("mollitia", "laborum") {{
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

Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization

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

            CloudresourcemanagerOrganizationsGetIamPolicyRequest req = new CloudresourcemanagerOrganizationsGetIamPolicyRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 358152;
                    }};;
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            CloudresourcemanagerOrganizationsGetIamPolicyResponse res = sdk.organizations.cloudresourcemanagerOrganizationsGetIamPolicy(req, new CloudresourcemanagerOrganizationsGetIamPolicySecurity() {{
                option1 = new CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1("culpa", "doloribus") {{
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

## cloudresourcemanagerOrganizationsSearch

Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SearchOrganizationsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsSearchRequest req = new CloudresourcemanagerOrganizationsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                searchOrganizationsRequest = new SearchOrganizationsRequest() {{
                    filter = "architecto";
                    pageSize = 652790;
                    pageToken = "dolorem";
                }};;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "mollitia";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            CloudresourcemanagerOrganizationsSearchResponse res = sdk.organizations.cloudresourcemanagerOrganizationsSearch(req, new CloudresourcemanagerOrganizationsSearchSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsSearchSecurityOption1("velit", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchOrganizationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerOrganizationsSetIamPolicy

Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization

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

            CloudresourcemanagerOrganizationsSetIamPolicyRequest req = new CloudresourcemanagerOrganizationsSetIamPolicyRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("enim"),
                                            add("odit"),
                                            add("quo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "voluptatibus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nihil";
                                    expression = "praesentium";
                                    location = "voluptatibus";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                role = "doloremque";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "reprehenderit";
                                    expression = "ut";
                                    location = "maiores";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                role = "dicta";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "harum";
                                    expression = "enim";
                                    location = "accusamus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                                role = "excepturi";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "pariatur";
                                    expression = "modi";
                                    location = "praesentium";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quasi"),
                                    add("repudiandae"),
                                    add("sint"),
                                    add("veritatis"),
                                }};
                                role = "itaque";
                            }}),
                        }};
                        etag = "incidunt";
                        version = 318569;
                    }};;
                    updateMask = "consequatur";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            CloudresourcemanagerOrganizationsSetIamPolicyResponse res = sdk.organizations.cloudresourcemanagerOrganizationsSetIamPolicy(req, new CloudresourcemanagerOrganizationsSetIamPolicySecurity("aliquid", "cupiditate") {{
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

Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.

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

            CloudresourcemanagerOrganizationsTestIamPermissionsRequest req = new CloudresourcemanagerOrganizationsTestIamPermissionsRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("assumenda"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            CloudresourcemanagerOrganizationsTestIamPermissionsResponse res = sdk.organizations.cloudresourcemanagerOrganizationsTestIamPermissions(req, new CloudresourcemanagerOrganizationsTestIamPermissionsSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1("delectus", "eum") {{
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
