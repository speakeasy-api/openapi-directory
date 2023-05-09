# Resources

### Available Operations

* [DeploymentmanagerResourcesGet](#deploymentmanagerresourcesget) - Gets information about a single resource.
* [DeploymentmanagerResourcesList](#deploymentmanagerresourceslist) - Lists all resources in a given deployment.

## DeploymentmanagerResourcesGet

Gets information about a single resource.

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
    res, err := s.Resources.DeploymentmanagerResourcesGet(ctx, operations.DeploymentmanagerResourcesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Deployment: "incidunt",
        Fields: sdk.String("sed"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        Project: "necessitatibus",
        QuotaUser: sdk.String("ipsum"),
        Resource: "ea",
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DeploymentmanagerResourcesGetSecurity{
        Option1: &operations.DeploymentmanagerResourcesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resource != nil {
        // handle response
    }
}
```

## DeploymentmanagerResourcesList

Lists all resources in a given deployment.

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
    res, err := s.Resources.DeploymentmanagerResourcesList(ctx, operations.DeploymentmanagerResourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        Deployment: "reiciendis",
        Fields: sdk.String("ex"),
        Filter: sdk.String("sit"),
        Key: sdk.String("non"),
        MaxResults: sdk.Int64(888044),
        OauthToken: sdk.String("praesentium"),
        OrderBy: sdk.String("facilis"),
        PageToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        Project: "incidunt",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DeploymentmanagerResourcesListSecurity{
        Option1: &operations.DeploymentmanagerResourcesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourcesListResponse != nil {
        // handle response
    }
}
```
