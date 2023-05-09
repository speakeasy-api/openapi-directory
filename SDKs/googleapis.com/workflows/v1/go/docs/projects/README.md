# Projects

### Available Operations

* [WorkflowsProjectsLocationsList](#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [WorkflowsProjectsLocationsOperationsList](#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [WorkflowsProjectsLocationsWorkflowsCreate](#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.
* [WorkflowsProjectsLocationsWorkflowsDelete](#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [WorkflowsProjectsLocationsWorkflowsGet](#workflowsprojectslocationsworkflowsget) - Gets details of a single workflow.
* [WorkflowsProjectsLocationsWorkflowsList](#workflowsprojectslocationsworkflowslist) - Lists workflows in a given project and location. The default order is not specified.
* [WorkflowsProjectsLocationsWorkflowsPatch](#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

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

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.

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
            CallLogLevel: shared.WorkflowCallLogLevelEnumLogAllCalls.ToPointer(),
            CryptoKeyName: sdk.String("molestiae"),
            Description: sdk.String("modi"),
            Labels: map[string]string{
                "impedit": "cum",
            },
            Name: sdk.String("Edna Mante II"),
            ServiceAccount: sdk.String("natus"),
            SourceContents: sdk.String("sed"),
            StateError: &shared.StateError{
                Details: sdk.String("iste"),
                Type: shared.StateErrorTypeEnumTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
        WorkflowID: sdk.String("quidem"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        Name: "Connie Herzog",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
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

Gets details of a single workflow.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        Name: "Angie Durgan",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        RevisionID: sdk.String("occaecati"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("commodi"),
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

Lists workflows in a given project and location. The default order is not specified.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Filter: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        OrderBy: sdk.String("animi"),
        PageSize: sdk.Int64(317202),
        PageToken: sdk.String("odit"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
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

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkflowInput: &shared.WorkflowInput{
            CallLogLevel: shared.WorkflowCallLogLevelEnumLogNone.ToPointer(),
            CryptoKeyName: sdk.String("aut"),
            Description: sdk.String("quasi"),
            Labels: map[string]string{
                "temporibus": "laborum",
                "quasi": "reiciendis",
                "voluptatibus": "vero",
            },
            Name: sdk.String("Miss Irma Wolff"),
            ServiceAccount: sdk.String("cum"),
            SourceContents: sdk.String("perferendis"),
            StateError: &shared.StateError{
                Details: sdk.String("doloremque"),
                Type: shared.StateErrorTypeEnumTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("dolore"),
        Name: "Mildred Pfeffer",
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UpdateMask: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
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
