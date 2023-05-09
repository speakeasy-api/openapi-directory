# projects

### Available Operations

* [cloudresourcemanagerProjectsClearOrgPolicy](#cloudresourcemanagerprojectsclearorgpolicy) - Clears a `Policy` from a resource.
* [cloudresourcemanagerProjectsCreate](#cloudresourcemanagerprojectscreate) - Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
* [cloudresourcemanagerProjectsDelete](#cloudresourcemanagerprojectsdelete) - Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
* [cloudresourcemanagerProjectsGet](#cloudresourcemanagerprojectsget) - Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [cloudresourcemanagerProjectsGetAncestry](#cloudresourcemanagerprojectsgetancestry) - Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [cloudresourcemanagerProjectsGetEffectiveOrgPolicy](#cloudresourcemanagerprojectsgeteffectiveorgpolicy) - Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [cloudresourcemanagerProjectsGetIamPolicy](#cloudresourcemanagerprojectsgetiampolicy) - Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).
* [cloudresourcemanagerProjectsGetOrgPolicy](#cloudresourcemanagerprojectsgetorgpolicy) - Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
* [cloudresourcemanagerProjectsList](#cloudresourcemanagerprojectslist) - Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
* [cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints](#cloudresourcemanagerprojectslistavailableorgpolicyconstraints) - Lists `Constraints` that could be applied on the specified resource.
* [cloudresourcemanagerProjectsListOrgPolicies](#cloudresourcemanagerprojectslistorgpolicies) - Lists all the `Policies` set for a particular resource.
* [cloudresourcemanagerProjectsSetIamPolicy](#cloudresourcemanagerprojectssetiampolicy) - Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
* [cloudresourcemanagerProjectsSetOrgPolicy](#cloudresourcemanagerprojectssetorgpolicy) - Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
* [cloudresourcemanagerProjectsTestIamPermissions](#cloudresourcemanagerprojectstestiampermissions) - Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.
* [cloudresourcemanagerProjectsUndelete](#cloudresourcemanagerprojectsundelete) - Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
* [cloudresourcemanagerProjectsUpdate](#cloudresourcemanagerprojectsupdate) - Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

## cloudresourcemanagerProjectsClearOrgPolicy

Clears a `Policy` from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsClearOrgPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsClearOrgPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsClearOrgPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClearOrgPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsClearOrgPolicyRequest req = new CloudresourcemanagerProjectsClearOrgPolicyRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                clearOrgPolicyRequest = new ClearOrgPolicyRequest() {{
                    constraint = "sint";
                    etag = "aliquid";
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "officia";
                key = "dolor";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "dolorum";
                uploadProtocol = "in";
            }};            

            CloudresourcemanagerProjectsClearOrgPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsClearOrgPolicy(req, new CloudresourcemanagerProjectsClearOrgPolicySecurity("in", "illum") {{
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

## cloudresourcemanagerProjectsCreate

Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.

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
                dollarXgafv = XgafvEnum.TWO;
                project = new Project() {{
                    createTime = "rerum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("magnam", "cumque");
                    }};
                    lifecycleState = ProjectLifecycleStateEnum.DELETE_IN_PROGRESS;
                    name = "Beth Padberg";
                    parent = new ResourceId() {{
                        id = "95efb9ba-88f3-4a66-9970-74ba4469b6e2";
                        type = "architecto";
                    }};;
                    projectId = "magnam";
                    projectNumber = "et";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quos";
                key = "sint";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "reiciendis";
                uploadProtocol = "mollitia";
            }};            

            CloudresourcemanagerProjectsCreateResponse res = sdk.projects.cloudresourcemanagerProjectsCreate(req, new CloudresourcemanagerProjectsCreateSecurity("ad", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudresourcemanagerProjectsDelete

Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.

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

            CloudresourcemanagerProjectsDeleteRequest req = new CloudresourcemanagerProjectsDeleteRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "maxime";
                uploadProtocol = "deleniti";
            }};            

            CloudresourcemanagerProjectsDeleteResponse res = sdk.projects.cloudresourcemanagerProjectsDelete(req, new CloudresourcemanagerProjectsDeleteSecurity("facilis", "in") {{
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

            CloudresourcemanagerProjectsGetRequest req = new CloudresourcemanagerProjectsGetRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
            }};            

            CloudresourcemanagerProjectsGetResponse res = sdk.projects.cloudresourcemanagerProjectsGet(req, new CloudresourcemanagerProjectsGetSecurity() {{
                option1 = new CloudresourcemanagerProjectsGetSecurityOption1("accusantium", "consequuntur") {{
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

            CloudresourcemanagerProjectsGetAncestryRequest req = new CloudresourcemanagerProjectsGetAncestryRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sunt", "quo");
                }};
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "accusantium";
                uploadProtocol = "ab";
            }};            

            CloudresourcemanagerProjectsGetAncestryResponse res = sdk.projects.cloudresourcemanagerProjectsGetAncestry(req, new CloudresourcemanagerProjectsGetAncestrySecurity() {{
                option1 = new CloudresourcemanagerProjectsGetAncestrySecurityOption1("maiores", "quidem") {{
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

## cloudresourcemanagerProjectsGetEffectiveOrgPolicy

Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetEffectiveOrgPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest req = new CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                getEffectiveOrgPolicyRequest = new GetEffectiveOrgPolicyRequest() {{
                    constraint = "autem";
                }};;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                key = "voluptatibus";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "amet";
                uploadProtocol = "aut";
            }};            

            CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsGetEffectiveOrgPolicy(req, new CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity() {{
                option1 = new CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1("cumque", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.orgPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsGetIamPolicy

Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).

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

            CloudresourcemanagerProjectsGetIamPolicyRequest req = new CloudresourcemanagerProjectsGetIamPolicyRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 749999;
                    }};;
                }};;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "dignissimos";
                key = "eaque";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "eos";
                uploadProtocol = "perferendis";
            }};            

            CloudresourcemanagerProjectsGetIamPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsGetIamPolicy(req, new CloudresourcemanagerProjectsGetIamPolicySecurity() {{
                option1 = new CloudresourcemanagerProjectsGetIamPolicySecurityOption1("dolores", "minus") {{
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

## cloudresourcemanagerProjectsGetOrgPolicy

Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetOrgPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetOrgPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetOrgPolicySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetOrgPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsGetOrgPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetOrgPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsGetOrgPolicyRequest req = new CloudresourcemanagerProjectsGetOrgPolicyRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                getOrgPolicyRequest = new GetOrgPolicyRequest() {{
                    constraint = "vero";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "omnis";
                key = "facilis";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "porro";
                uploadProtocol = "consequuntur";
            }};            

            CloudresourcemanagerProjectsGetOrgPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsGetOrgPolicy(req, new CloudresourcemanagerProjectsGetOrgPolicySecurity() {{
                option1 = new CloudresourcemanagerProjectsGetOrgPolicySecurityOption1("blanditiis", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.orgPolicy != null) {
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "asperiores";
                filter = "earum";
                key = "modi";
                oauthToken = "iste";
                pageSize = 679091L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
            }};            

            CloudresourcemanagerProjectsListResponse res = sdk.projects.cloudresourcemanagerProjectsList(req, new CloudresourcemanagerProjectsListSecurity() {{
                option1 = new CloudresourcemanagerProjectsListSecurityOption1("libero", "delectus") {{
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

## cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints

Lists `Constraints` that could be applied on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ListAvailableOrgPolicyConstraintsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest req = new CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                listAvailableOrgPolicyConstraintsRequest = new ListAvailableOrgPolicyConstraintsRequest() {{
                    pageSize = 398221;
                    pageToken = "dolorem";
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "voluptate";
                uploadProtocol = "dignissimos";
            }};            

            CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse res = sdk.projects.cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints(req, new CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity() {{
                option1 = new CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1("reiciendis", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAvailableOrgPolicyConstraintsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsListOrgPolicies

Lists all the `Policies` set for a particular resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListOrgPoliciesRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListOrgPoliciesResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListOrgPoliciesSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ListOrgPoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsListOrgPoliciesRequest req = new CloudresourcemanagerProjectsListOrgPoliciesRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                listOrgPoliciesRequest = new ListOrgPoliciesRequest() {{
                    pageSize = 85295;
                    pageToken = "ipsa";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "voluptas";
                uploadProtocol = "natus";
            }};            

            CloudresourcemanagerProjectsListOrgPoliciesResponse res = sdk.projects.cloudresourcemanagerProjectsListOrgPolicies(req, new CloudresourcemanagerProjectsListOrgPoliciesSecurity() {{
                option1 = new CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1("eos", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOrgPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsSetIamPolicy

Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project

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

            CloudresourcemanagerProjectsSetIamPolicyRequest req = new CloudresourcemanagerProjectsSetIamPolicyRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iusto"),
                                            add("voluptate"),
                                            add("dolorum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("distinctio"),
                                            add("asperiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptate"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "saepe";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aspernatur";
                                    expression = "perferendis";
                                    location = "amet";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                    add("deserunt"),
                                }};
                                role = "provident";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "minima";
                                    expression = "repellendus";
                                    location = "totam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("at"),
                                }};
                                role = "quaerat";
                            }}),
                        }};
                        etag = "tempora";
                        version = 425451;
                    }};;
                    updateMask = "quod";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "ipsum";
                uploadProtocol = "quisquam";
            }};            

            CloudresourcemanagerProjectsSetIamPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsSetIamPolicy(req, new CloudresourcemanagerProjectsSetIamPolicySecurity("tenetur", "amet") {{
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

## cloudresourcemanagerProjectsSetOrgPolicy

Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSetOrgPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSetOrgPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSetOrgPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BooleanPolicy;
import org.openapis.openapi.models.shared.ListPolicy;
import org.openapis.openapi.models.shared.ListPolicyAllValuesEnum;
import org.openapis.openapi.models.shared.OrgPolicy;
import org.openapis.openapi.models.shared.SetOrgPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsSetOrgPolicyRequest req = new CloudresourcemanagerProjectsSetOrgPolicyRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                setOrgPolicyRequest = new SetOrgPolicyRequest() {{
                    policy = new OrgPolicy() {{
                        booleanPolicy = new BooleanPolicy() {{
                            enforced = false;
                        }};;
                        constraint = "numquam";
                        etag = "enim";
                        listPolicy = new ListPolicy() {{
                            allValues = ListPolicyAllValuesEnum.ALL_VALUES_UNSPECIFIED;
                            allowedValues = new String[]{{
                                add("totam"),
                                add("nihil"),
                                add("sit"),
                                add("expedita"),
                            }};
                            deniedValues = new String[]{{
                                add("sed"),
                            }};
                            inheritFromParent = false;
                            suggestedValue = "vel";
                        }};;
                        restoreDefault = new java.util.HashMap<String, Object>() {{
                            put("voluptas", "deserunt");
                            put("quam", "ipsum");
                            put("incidunt", "qui");
                        }};
                        updateTime = "cupiditate";
                        version = 807581;
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "laborum";
                key = "totam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "dolores";
                uploadProtocol = "distinctio";
            }};            

            CloudresourcemanagerProjectsSetOrgPolicyResponse res = sdk.projects.cloudresourcemanagerProjectsSetOrgPolicy(req, new CloudresourcemanagerProjectsSetOrgPolicySecurity("facilis", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orgPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsTestIamPermissions

Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.

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

            CloudresourcemanagerProjectsTestIamPermissionsRequest req = new CloudresourcemanagerProjectsTestIamPermissionsRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("qui"),
                        add("neque"),
                        add("fugit"),
                        add("magni"),
                    }};
                }};;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "nam";
                key = "hic";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "soluta";
                uploadProtocol = "nobis";
            }};            

            CloudresourcemanagerProjectsTestIamPermissionsResponse res = sdk.projects.cloudresourcemanagerProjectsTestIamPermissions(req, new CloudresourcemanagerProjectsTestIamPermissionsSecurity() {{
                option1 = new CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1("et", "saepe") {{
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

            CloudresourcemanagerProjectsUndeleteRequest req = new CloudresourcemanagerProjectsUndeleteRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quos", "tempore");
                    put("cupiditate", "aperiam");
                    put("delectus", "dolorem");
                }};
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "dolorum";
                key = "architecto";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quas";
                uploadProtocol = "itaque";
            }};            

            CloudresourcemanagerProjectsUndeleteResponse res = sdk.projects.cloudresourcemanagerProjectsUndelete(req, new CloudresourcemanagerProjectsUndeleteSecurity("consequatur", "est") {{
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

            CloudresourcemanagerProjectsUpdateRequest req = new CloudresourcemanagerProjectsUpdateRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                project = new Project() {{
                    createTime = "doloribus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("facilis", "cupiditate");
                        put("qui", "quae");
                    }};
                    lifecycleState = ProjectLifecycleStateEnum.DELETE_REQUESTED;
                    name = "Toni Wolff";
                    parent = new ResourceId() {{
                        id = "953f73ef-7fbc-47ab-974d-d39c0f5d2cff";
                        type = "iusto";
                    }};;
                    projectId = "eligendi";
                    projectNumber = "ducimus";
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "ipsam";
                key = "ea";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "possimus";
                uploadProtocol = "magnam";
            }};            

            CloudresourcemanagerProjectsUpdateResponse res = sdk.projects.cloudresourcemanagerProjectsUpdate(req, new CloudresourcemanagerProjectsUpdateSecurity("ratione", "ex") {{
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
