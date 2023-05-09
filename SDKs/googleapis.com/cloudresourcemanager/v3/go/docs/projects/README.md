# Projects

### Available Operations

* [CloudresourcemanagerProjectsCreate](#cloudresourcemanagerprojectscreate) - Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.
* [CloudresourcemanagerProjectsList](#cloudresourcemanagerprojectslist) - Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.
* [CloudresourcemanagerProjectsMove](#cloudresourcemanagerprojectsmove) - Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project. 
* [CloudresourcemanagerProjectsSearch](#cloudresourcemanagerprojectssearch) - Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.
* [CloudresourcemanagerProjectsUndelete](#cloudresourcemanagerprojectsundelete) - Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

## CloudresourcemanagerProjectsCreate

Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ProjectInput: &shared.ProjectInput{
            DisplayName: sdk.String("numquam"),
            Labels: map[string]string{
                "quam": "molestiae",
                "velit": "error",
            },
            Parent: sdk.String("quia"),
            ProjectID: sdk.String("quis"),
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
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

## CloudresourcemanagerProjectsList

Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("error"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        Parent: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
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

## CloudresourcemanagerProjectsMove

Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project. 

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
    res, err := s.Projects.CloudresourcemanagerProjectsMove(ctx, operations.CloudresourcemanagerProjectsMoveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MoveProjectRequest: &shared.MoveProjectRequest{
            DestinationParent: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        Name: "Mrs. April Wuckert",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    }, operations.CloudresourcemanagerProjectsMoveSecurity{
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

## CloudresourcemanagerProjectsSearch

Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.

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
    res, err := s.Projects.CloudresourcemanagerProjectsSearch(ctx, operations.CloudresourcemanagerProjectsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("molestias"),
        PageSize: sdk.Int64(566602),
        PageToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("modi"),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.CloudresourcemanagerProjectsSearchSecurity{
        Option1: &operations.CloudresourcemanagerProjectsSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProjectsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerProjectsUndelete

Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

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
            "sint": "veritatis",
            "itaque": "incidunt",
            "enim": "consequatur",
            "est": "quibusdam",
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        Name: "Tina Jacobi",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.CloudresourcemanagerProjectsUndeleteSecurity{
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
