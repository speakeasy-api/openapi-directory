# Types

### Available Operations

* [DeploymentmanagerTypesList](#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.

## DeploymentmanagerTypesList

Lists all resource types for Deployment Manager.

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
    res, err := s.Types.DeploymentmanagerTypesList(ctx, operations.DeploymentmanagerTypesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("consectetur"),
        Filter: sdk.String("recusandae"),
        Key: sdk.String("aspernatur"),
        MaxResults: sdk.Int64(325310),
        OauthToken: sdk.String("eaque"),
        OrderBy: sdk.String("a"),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        Project: "aut",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.DeploymentmanagerTypesListSecurity{
        Option1: &operations.DeploymentmanagerTypesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TypesListResponse != nil {
        // handle response
    }
}
```
