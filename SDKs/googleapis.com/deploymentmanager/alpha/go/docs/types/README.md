# Types

### Available Operations

* [DeploymentmanagerTypesGet](#deploymentmanagertypesget) - Gets information about a specific type.
* [DeploymentmanagerTypesList](#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.

## DeploymentmanagerTypesGet

Gets information about a specific type.

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
    res, err := s.Types.DeploymentmanagerTypesGet(ctx, operations.DeploymentmanagerTypesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        Project: "at",
        QuotaUser: sdk.String("labore"),
        Type: "minus",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.DeploymentmanagerTypesGetSecurity{
        Option1: &operations.DeploymentmanagerTypesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Type != nil {
        // handle response
    }
}
```

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
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("dignissimos"),
        Filter: sdk.String("repellat"),
        Key: sdk.String("velit"),
        MaxResults: sdk.Int64(784115),
        OauthToken: sdk.String("provident"),
        OrderBy: sdk.String("consectetur"),
        PageToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        Project: "dignissimos",
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("natus"),
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
