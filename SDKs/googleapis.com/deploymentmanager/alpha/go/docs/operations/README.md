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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("sed"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("explicabo"),
        Operation: "asperiores",
        PrettyPrint: sdk.Bool(false),
        Project: "facilis",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("ab"),
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
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("in"),
        Filter: sdk.String("commodi"),
        Key: sdk.String("quidem"),
        MaxResults: sdk.Int64(131289),
        OauthToken: sdk.String("voluptas"),
        OrderBy: sdk.String("unde"),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        Project: "suscipit",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("illo"),
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
