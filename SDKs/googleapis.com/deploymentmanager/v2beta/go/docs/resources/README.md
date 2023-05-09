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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Deployment: "assumenda",
        Fields: sdk.String("nemo"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        Project: "aperiam",
        QuotaUser: sdk.String("cum"),
        Resource: "consectetur",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("exercitationem"),
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
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Deployment: "suscipit",
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("saepe"),
        MaxResults: sdk.Int64(897071),
        OauthToken: sdk.String("dolore"),
        OrderBy: sdk.String("sunt"),
        PageToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        Project: "adipisci",
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("beatae"),
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
