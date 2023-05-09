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
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("corporis"),
        Filter: sdk.String("magnam"),
        Key: sdk.String("voluptates"),
        MaxResults: sdk.Int64(978173),
        OauthToken: sdk.String("tempore"),
        OrderBy: sdk.String("aperiam"),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        Project: "ratione",
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("occaecati"),
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
