# projects

### Available Operations

* [cloudresourcemanagerProjectsCreate](#cloudresourcemanagerprojectscreate) - Creates a Project resource. Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project. Several APIs are activated automatically for the Project, including Google Cloud Storage. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as project, folder, or organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
* [cloudresourcemanagerProjectsDelete](#cloudresourcemanagerprojectsdelete) - Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
* [cloudresourcemanagerProjectsGet](#cloudresourcemanagerprojectsget) - Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [cloudresourcemanagerProjectsGetAncestry](#cloudresourcemanagerprojectsgetancestry) - Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [cloudresourcemanagerProjectsGetIamPolicy](#cloudresourcemanagerprojectsgetiampolicy) - Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. For additional information about resource structure and identification, see [Resource Names](/apis/design/resource_names).
* [cloudresourcemanagerProjectsList](#cloudresourcemanagerprojectslist) - Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
* [cloudresourcemanagerProjectsSetIamPolicy](#cloudresourcemanagerprojectssetiampolicy) - Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
* [cloudresourcemanagerProjectsTestIamPermissions](#cloudresourcemanagerprojectstestiampermissions) - Returns permissions that a caller has on the specified Project.
* [cloudresourcemanagerProjectsUndelete](#cloudresourcemanagerprojectsundelete) - Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
* [cloudresourcemanagerProjectsUpdate](#cloudresourcemanagerprojectsupdate) - Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

## cloudresourcemanagerProjectsCreate

Creates a Project resource. Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project. Several APIs are activated automatically for the Project, including Google Cloud Storage. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as project, folder, or organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Project;
import org.openapis.openapi.models.shared.ProjectLifecycleStateEnum;
import org.openapis.openapi.models.shared.ResourceId;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsCreateRequest req = new CloudresourcemanagerProjectsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                project = new Project() {{
                    createTime = "reprehenderit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("maiores", "dicta");
                        put("corporis", "dolore");
                    }};
                    lifecycleState = ProjectLifecycleStateEnum.ACTIVE;
                    name = "Maryann Hamill";
                    parent = new ResourceId() {{
                        id = "e13b99d4-88e1-4e91-a450-ad2abd442698";
                        type = "perferendis";
                    }};;
                    projectId = "magni";
                    projectNumber = "assumenda";
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
                useLegacyStack = false;
            }};            

            CloudresourcemanagerProjectsCreateResponse res = sdk.projects.cloudresourcemanagerProjectsCreate(req, new CloudresourcemanagerProjectsCreateSecurity("delectus", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsDelete

Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsDeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsDeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsDeleteRequest req = new CloudresourcemanagerProjectsDeleteRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            CloudresourcemanagerProjectsDeleteResponse res = sdk.projects.cloudresourcemanagerProjectsDelete(req, new CloudresourcemanagerProjectsDeleteSecurity("dolorum", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsGet

Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsGetRequest req = new CloudresourcemanagerProjectsGetRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "magnam";
                key = "cumque";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aliquid";
                uploadProtocol = "laborum";
            }};            

            CloudresourcemanagerProjectsGetResponse res = sdk.projects.cloudresourcemanagerProjectsGet(req, new CloudresourcemanagerProjectsGetSecurity() {{
                option1 = new CloudresourcemanagerProjectsGetSecurityOption1("accusamus", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsGetAncestry

Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetAncestryRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetAncestryResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetAncestrySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetAncestrySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetAncestrySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsGetAncestryRequest req = new CloudresourcemanagerProjectsGetAncestryRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("delectus", "quidem");
                    put("provident", "nam");
                    put("id", "blanditiis");
                    put("deleniti", "sapiente");
                }};
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "vel";
                key = "natus";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "perferendis";
                uploadProtocol = "nihil";
            }};            

            CloudresourcemanagerProjectsGetAncestryResponse res = sdk.projects.cloudresourcemanagerProjectsGetAncestry(req, new CloudresourcemanagerProjectsGetAncestrySecurity() {{
                option1 = new CloudresourcemanagerProjectsGetAncestrySecurityOption1("magnam", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getAncestryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsGetIamPolicy

Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. For additional information about resource structure and identification, see [Resource Names](/apis/design/resource_names).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsGetIamPolicyRequest req = new CloudresourcemanagerProjectsGetIamPolicyRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 290077;
                    }};;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "eum";
                key = "vero";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "magnam";
                uploadProtocol = "et";
            }};            

            CloudresourcemanagerProjectsGetIamPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsGetIamPolicy(req, new CloudresourcemanagerProjectsGetIamPolicySecurity() {{
                option1 = new CloudresourcemanagerProjectsGetIamPolicySecurityOption1("excepturi", "ullam") {{
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

## cloudresourcemanagerProjectsList

Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsListRequest req = new CloudresourcemanagerProjectsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                filter = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                pageSize = 431418L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
            }};            

            CloudresourcemanagerProjectsListResponse res = sdk.projects.cloudresourcemanagerProjectsList(req, new CloudresourcemanagerProjectsListSecurity() {{
                option1 = new CloudresourcemanagerProjectsListSecurityOption1("quasi", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsSetIamPolicy

Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSetIamPolicySecurity;
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

            CloudresourcemanagerProjectsSetIamPolicyRequest req = new CloudresourcemanagerProjectsSetIamPolicyRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("facilis"),
                                            add("in"),
                                            add("architecto"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                            add("expedita"),
                                            add("nihil"),
                                            add("repellat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("saepe"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consequuntur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "natus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "pariatur";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ea";
                                    expression = "excepturi";
                                    location = "odit";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ab"),
                                }};
                                role = "maiores";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quidem";
                                    expression = "ipsam";
                                    location = "voluptate";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("eaque"),
                                    add("pariatur"),
                                    add("nemo"),
                                }};
                                role = "voluptatibus";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "perferendis";
                                    expression = "fugiat";
                                    location = "amet";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("corporis"),
                                    add("hic"),
                                    add("libero"),
                                    add("nobis"),
                                }};
                                role = "dolores";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quis";
                                    expression = "totam";
                                    location = "dignissimos";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("nesciunt"),
                                    add("eos"),
                                }};
                                role = "perferendis";
                            }}),
                        }};
                        etag = "dolores";
                        version = 793698;
                    }};;
                    updateMask = "quam";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "hic";
                key = "recusandae";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "perspiciatis";
                uploadProtocol = "voluptatem";
            }};            

            CloudresourcemanagerProjectsSetIamPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsSetIamPolicy(req, new CloudresourcemanagerProjectsSetIamPolicySecurity("porro", "consequuntur") {{
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

## cloudresourcemanagerProjectsTestIamPermissions

Returns permissions that a caller has on the specified Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsTestIamPermissionsRequest req = new CloudresourcemanagerProjectsTestIamPermissionsRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("occaecati"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "pariatur";
            }};            

            CloudresourcemanagerProjectsTestIamPermissionsResponse res = sdk.projects.cloudresourcemanagerProjectsTestIamPermissions(req, new CloudresourcemanagerProjectsTestIamPermissionsSecurity() {{
                option1 = new CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1("provident", "nobis") {{
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

## cloudresourcemanagerProjectsUndelete

Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUndeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUndeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsUndeleteRequest req = new CloudresourcemanagerProjectsUndeleteRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quos", "aliquid");
                    put("dolorem", "dolorem");
                }};
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            CloudresourcemanagerProjectsUndeleteResponse res = sdk.projects.cloudresourcemanagerProjectsUndelete(req, new CloudresourcemanagerProjectsUndeleteSecurity("amet", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsUpdate

Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUpdateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUpdateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Project;
import org.openapis.openapi.models.shared.ProjectLifecycleStateEnum;
import org.openapis.openapi.models.shared.ResourceId;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsUpdateRequest req = new CloudresourcemanagerProjectsUpdateRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                project = new Project() {{
                    createTime = "ipsa";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "odio");
                    }};
                    lifecycleState = ProjectLifecycleStateEnum.ACTIVE;
                    name = "Rickey Wolf";
                    parent = new ResourceId() {{
                        id = "280d1ba7-7a89-4ebf-b37a-e4203ce5e6a9";
                        type = "minima";
                    }};;
                    projectId = "repellendus";
                    projectNumber = "totam";
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "quaerat";
                key = "tempora";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "officiis";
                uploadProtocol = "qui";
            }};            

            CloudresourcemanagerProjectsUpdateResponse res = sdk.projects.cloudresourcemanagerProjectsUpdate(req, new CloudresourcemanagerProjectsUpdateSecurity("dolorum", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
