# Workspaces

### Available Operations

* [Area120tablesWorkspacesGet](#area120tablesworkspacesget) - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* [Area120tablesWorkspacesList](#area120tablesworkspaceslist) - Lists workspaces for the user.

## Area120tablesWorkspacesGet

Gets a workspace. Returns NOT_FOUND if the workspace does not exist.

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
    res, err := s.Workspaces.Area120tablesWorkspacesGet(ctx, operations.Area120tablesWorkspacesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("eum"),
        Name: "Brandon Brakus V",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
        View: operations.Area120tablesWorkspacesGetViewEnumViewUnspecified.ToPointer(),
    }, operations.Area120tablesWorkspacesGetSecurity{
        Option1: &operations.Area120tablesWorkspacesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workspace != nil {
        // handle response
    }
}
```

## Area120tablesWorkspacesList

Lists workspaces for the user.

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
    res, err := s.Workspaces.Area120tablesWorkspacesList(ctx, operations.Area120tablesWorkspacesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(141264),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.Area120tablesWorkspacesListSecurity{
        Option1: &operations.Area120tablesWorkspacesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspacesResponse != nil {
        // handle response
    }
}
```
