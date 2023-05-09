# Projects

### Available Operations

* [WorkflowsProjectsLocationsList](#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [WorkflowsProjectsLocationsOperationsList](#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [WorkflowsProjectsLocationsWorkflowsCreate](#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.
* [WorkflowsProjectsLocationsWorkflowsDelete](#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [WorkflowsProjectsLocationsWorkflowsGet](#workflowsprojectslocationsworkflowsget) - Gets details of a single Workflow.
* [WorkflowsProjectsLocationsWorkflowsList](#workflowsprojectslocationsworkflowslist) - Lists Workflows in a given project and location. The default order is not specified.
* [WorkflowsProjectsLocationsWorkflowsPatch](#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

## WorkflowsProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.WorkflowsProjectsLocationsList(ctx, operations.WorkflowsProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.WorkflowsProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## WorkflowsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.WorkflowsProjectsLocationsOperationsList(ctx, operations.WorkflowsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Filter: sdk.String("quod"),
        Key: sdk.String("esse"),
        Name: "Miss Lowell Parisian",
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.WorkflowsProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## WorkflowsProjectsLocationsWorkflowsCreate

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.

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
    res, err := s.Projects.WorkflowsProjectsLocationsWorkflowsCreate(ctx, operations.WorkflowsProjectsLocationsWorkflowsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WorkflowInput: &shared.WorkflowInput{
            Description: sdk.String("commodi"),
            Labels: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
            Name: sdk.String("Edna Mante II"),
            ServiceAccount: sdk.String("natus"),
            SourceContents: sdk.String("sed"),
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
        WorkflowID: sdk.String("iure"),
    }, operations.WorkflowsProjectsLocationsWorkflowsCreateSecurity{
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

## WorkflowsProjectsLocationsWorkflowsDelete

Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.

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
    res, err := s.Projects.WorkflowsProjectsLocationsWorkflowsDelete(ctx, operations.WorkflowsProjectsLocationsWorkflowsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        Name: "Cameron Dach",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.WorkflowsProjectsLocationsWorkflowsDeleteSecurity{
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

## WorkflowsProjectsLocationsWorkflowsGet

Gets details of a single Workflow.

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
    res, err := s.Projects.WorkflowsProjectsLocationsWorkflowsGet(ctx, operations.WorkflowsProjectsLocationsWorkflowsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        Name: "Darrin Brakus",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.WorkflowsProjectsLocationsWorkflowsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workflow != nil {
        // handle response
    }
}
```

## WorkflowsProjectsLocationsWorkflowsList

Lists Workflows in a given project and location. The default order is not specified.

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
    res, err := s.Projects.WorkflowsProjectsLocationsWorkflowsList(ctx, operations.WorkflowsProjectsLocationsWorkflowsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestiae"),
        Filter: sdk.String("velit"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("quia"),
        OrderBy: sdk.String("quis"),
        PageSize: sdk.Int64(110375),
        PageToken: sdk.String("laborum"),
        Parent: "animi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
    }, operations.WorkflowsProjectsLocationsWorkflowsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowsResponse != nil {
        // handle response
    }
}
```

## WorkflowsProjectsLocationsWorkflowsPatch

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

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
    res, err := s.Projects.WorkflowsProjectsLocationsWorkflowsPatch(ctx, operations.WorkflowsProjectsLocationsWorkflowsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WorkflowInput: &shared.WorkflowInput{
            Description: sdk.String("tenetur"),
            Labels: map[string]string{
                "id": "possimus",
                "aut": "quasi",
            },
            Name: sdk.String("Dr. Jake Pacocha"),
            ServiceAccount: sdk.String("vero"),
            SourceContents: sdk.String("nihil"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        Name: "Thomas Batz",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UpdateMask: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.WorkflowsProjectsLocationsWorkflowsPatchSecurity{
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
