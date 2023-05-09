# Projects

### Available Operations

* [CloudresourcemanagerProjectsClearOrgPolicy](#cloudresourcemanagerprojectsclearorgpolicy) - Clears a `Policy` from a resource.
* [CloudresourcemanagerProjectsCreate](#cloudresourcemanagerprojectscreate) - Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
* [CloudresourcemanagerProjectsDelete](#cloudresourcemanagerprojectsdelete) - Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
* [CloudresourcemanagerProjectsGet](#cloudresourcemanagerprojectsget) - Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [CloudresourcemanagerProjectsGetAncestry](#cloudresourcemanagerprojectsgetancestry) - Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [CloudresourcemanagerProjectsGetEffectiveOrgPolicy](#cloudresourcemanagerprojectsgeteffectiveorgpolicy) - Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [CloudresourcemanagerProjectsGetIamPolicy](#cloudresourcemanagerprojectsgetiampolicy) - Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).
* [CloudresourcemanagerProjectsGetOrgPolicy](#cloudresourcemanagerprojectsgetorgpolicy) - Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
* [CloudresourcemanagerProjectsList](#cloudresourcemanagerprojectslist) - Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
* [CloudresourcemanagerProjectsListAvailableOrgPolicyConstraints](#cloudresourcemanagerprojectslistavailableorgpolicyconstraints) - Lists `Constraints` that could be applied on the specified resource.
* [CloudresourcemanagerProjectsListOrgPolicies](#cloudresourcemanagerprojectslistorgpolicies) - Lists all the `Policies` set for a particular resource.
* [CloudresourcemanagerProjectsSetIamPolicy](#cloudresourcemanagerprojectssetiampolicy) - Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
* [CloudresourcemanagerProjectsSetOrgPolicy](#cloudresourcemanagerprojectssetorgpolicy) - Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
* [CloudresourcemanagerProjectsTestIamPermissions](#cloudresourcemanagerprojectstestiampermissions) - Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.
* [CloudresourcemanagerProjectsUndelete](#cloudresourcemanagerprojectsundelete) - Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
* [CloudresourcemanagerProjectsUpdate](#cloudresourcemanagerprojectsupdate) - Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

## CloudresourcemanagerProjectsClearOrgPolicy

Clears a `Policy` from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsClearOrgPolicy(ctx, operations.CloudresourcemanagerProjectsClearOrgPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClearOrgPolicyRequest: &shared.ClearOrgPolicyRequest{
            Constraint: sdk.String("non"),
            Etag: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        Resource: "debitis",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.CloudresourcemanagerProjectsClearOrgPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsCreate

Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsCreate(ctx, operations.CloudresourcemanagerProjectsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Project: &shared.Project{
            CreateTime: sdk.String("in"),
            Labels: map[string]string{
                "maiores": "rerum",
                "dicta": "magnam",
                "cumque": "facere",
                "ea": "aliquid",
            },
            LifecycleState: shared.ProjectLifecycleStateEnumDeleteRequested.ToPointer(),
            Name: sdk.String("Alfred McClure"),
            Parent: &shared.ResourceID{
                ID: sdk.String("fb9ba88f-3a66-4997-874b-a4469b6e2141"),
                Type: sdk.String("excepturi"),
            },
            ProjectID: sdk.String("ullam"),
            ProjectNumber: sdk.String("provident"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.CloudresourcemanagerProjectsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsDelete

Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsDelete(ctx, operations.CloudresourcemanagerProjectsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "eius",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.CloudresourcemanagerProjectsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsGet

Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsGet(ctx, operations.CloudresourcemanagerProjectsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "repellat",
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.CloudresourcemanagerProjectsGetSecurity{
        Option1: &operations.CloudresourcemanagerProjectsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsGetAncestry

Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsGetAncestry(ctx, operations.CloudresourcemanagerProjectsGetAncestryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "consequuntur": "praesentium",
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "maxime",
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.CloudresourcemanagerProjectsGetAncestrySecurity{
        Option1: &operations.CloudresourcemanagerProjectsGetAncestrySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAncestryResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsGetEffectiveOrgPolicy

Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsGetEffectiveOrgPolicy(ctx, operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetEffectiveOrgPolicyRequest: &shared.GetEffectiveOrgPolicyRequest{
            Constraint: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        Resource: "eaque",
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity{
        Option1: &operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPolicy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsGetIamPolicy

Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsGetIamPolicy(ctx, operations.CloudresourcemanagerProjectsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(16627),
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        Resource: "nobis",
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("quis"),
    }, operations.CloudresourcemanagerProjectsGetIamPolicySecurity{
        Option1: &operations.CloudresourcemanagerProjectsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsGetOrgPolicy

Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsGetOrgPolicy(ctx, operations.CloudresourcemanagerProjectsGetOrgPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetOrgPolicyRequest: &shared.GetOrgPolicyRequest{
            Constraint: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("eos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        Resource: "quam",
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
    }, operations.CloudresourcemanagerProjectsGetOrgPolicySecurity{
        Option1: &operations.CloudresourcemanagerProjectsGetOrgPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPolicy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsList

Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsList(ctx, operations.CloudresourcemanagerProjectsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("facilis"),
        Filter: sdk.String("perspiciatis"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("porro"),
        PageSize: sdk.Int64(164694),
        PageToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.CloudresourcemanagerProjectsListSecurity{
        Option1: &operations.CloudresourcemanagerProjectsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsListAvailableOrgPolicyConstraints

Lists `Constraints` that could be applied on the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraints(ctx, operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ListAvailableOrgPolicyConstraintsRequest: &shared.ListAvailableOrgPolicyConstraintsRequest{
            PageSize: sdk.Int(237893),
            PageToken: sdk.String("asperiores"),
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        Resource: "nobis",
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity{
        Option1: &operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableOrgPolicyConstraintsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsListOrgPolicies

Lists all the `Policies` set for a particular resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsListOrgPolicies(ctx, operations.CloudresourcemanagerProjectsListOrgPoliciesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ListOrgPoliciesRequest: &shared.ListOrgPoliciesRequest{
            PageSize: sdk.Int(554242),
            PageToken: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("qui"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        Resource: "cum",
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.CloudresourcemanagerProjectsListOrgPoliciesSecurity{
        Option1: &operations.CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrgPoliciesResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsSetIamPolicy

Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsSetIamPolicy(ctx, operations.CloudresourcemanagerProjectsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "veritatis",
                                    "ipsa",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "odio",
                                    "quaerat",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptatibus",
                                    "voluptas",
                                    "natus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("atque"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("fugiat"),
                            Expression: sdk.String("ab"),
                            Location: sdk.String("soluta"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "voluptate",
                            "dolorum",
                        },
                        Role: sdk.String("deleniti"),
                    },
                },
                Etag: sdk.String("omnis"),
                Version: sdk.Int(896672),
            },
            UpdateMask: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        Resource: "aspernatur",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("amet"),
    }, operations.CloudresourcemanagerProjectsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsSetOrgPolicy

Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsSetOrgPolicy(ctx, operations.CloudresourcemanagerProjectsSetOrgPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetOrgPolicyRequest: &shared.SetOrgPolicyRequest{
            Policy: &shared.OrgPolicy{
                BooleanPolicy: &shared.BooleanPolicy{
                    Enforced: sdk.Bool(false),
                },
                Constraint: sdk.String("accusamus"),
                Etag: sdk.String("ad"),
                ListPolicy: &shared.ListPolicy{
                    AllValues: shared.ListPolicyAllValuesEnumDeny.ToPointer(),
                    AllowedValues: []string{
                        "deserunt",
                        "provident",
                    },
                    DeniedValues: []string{
                        "repellendus",
                        "totam",
                    },
                    InheritFromParent: sdk.Bool(false),
                    SuggestedValue: sdk.String("similique"),
                },
                RestoreDefault: map[string]interface{}{
                    "at": "quaerat",
                },
                UpdateTime: sdk.String("tempora"),
                Version: sdk.Int(425451),
            },
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        Resource: "iusto",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.CloudresourcemanagerProjectsSetOrgPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPolicy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsTestIamPermissions

Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsTestIamPermissions(ctx, operations.CloudresourcemanagerProjectsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "tempore",
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        Resource: "sit",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("neque"),
    }, operations.CloudresourcemanagerProjectsTestIamPermissionsSecurity{
        Option1: &operations.CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsUndelete

Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsUndelete(ctx, operations.CloudresourcemanagerProjectsUndeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "libero": "voluptas",
            "deserunt": "quam",
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "soluta",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("totam"),
    }, operations.CloudresourcemanagerProjectsUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsUpdate

Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudresourcemanagerProjectsUpdate(ctx, operations.CloudresourcemanagerProjectsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Project: &shared.Project{
            CreateTime: sdk.String("aspernatur"),
            Labels: map[string]string{
                "distinctio": "facilis",
            },
            LifecycleState: shared.ProjectLifecycleStateEnumActive.ToPointer(),
            Name: sdk.String("Felicia Spencer"),
            Parent: &shared.ResourceID{
                ID: sdk.String("22715bf0-cbb1-4e31-b8b9-0f3443a1108e"),
                Type: sdk.String("consequatur"),
            },
            ProjectID: sdk.String("est"),
            ProjectNumber: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quae",
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.CloudresourcemanagerProjectsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
