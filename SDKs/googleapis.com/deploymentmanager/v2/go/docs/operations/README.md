# Operations

### Available Operations

* [DeploymentmanagerOperationsGet](#deploymentmanageroperationsget) - Gets information about a specific operation.
* [DeploymentmanagerOperationsList](#deploymentmanageroperationslist) - Lists all operations for a project.

## DeploymentmanagerOperationsGet

Gets information about a specific operation.

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
    res, err := s.Operations.DeploymentmanagerOperationsGet(ctx, operations.DeploymentmanagerOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quod"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("similique"),
        Operation: "facilis",
        PrettyPrint: sdk.Bool(false),
        Project: "vero",
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.DeploymentmanagerOperationsGetSecurity{
        Option1: &operations.DeploymentmanagerOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DeploymentmanagerOperationsList

Lists all operations for a project.

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
    res, err := s.Operations.DeploymentmanagerOperationsList(ctx, operations.DeploymentmanagerOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("aut"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("exercitationem"),
        MaxResults: sdk.Int64(862310),
        OauthToken: sdk.String("fugit"),
        OrderBy: sdk.String("porro"),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        Project: "doloribus",
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.DeploymentmanagerOperationsListSecurity{
        Option1: &operations.DeploymentmanagerOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsListResponse != nil {
        // handle response
    }
}
```
