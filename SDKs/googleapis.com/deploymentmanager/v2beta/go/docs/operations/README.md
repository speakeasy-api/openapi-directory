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
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("quod"),
        Operation: "labore",
        PrettyPrint: sdk.Bool(false),
        Project: "ab",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("id"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("recusandae"),
        Filter: sdk.String("totam"),
        Key: sdk.String("fugiat"),
        MaxResults: sdk.Int64(424089),
        OauthToken: sdk.String("ducimus"),
        OrderBy: sdk.String("quos"),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        Project: "labore",
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("cum"),
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
