# Manifests

### Available Operations

* [DeploymentmanagerManifestsGet](#deploymentmanagermanifestsget) - Gets information about a specific manifest.
* [DeploymentmanagerManifestsList](#deploymentmanagermanifestslist) - Lists all manifests for a given deployment.

## DeploymentmanagerManifestsGet

Gets information about a specific manifest.

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
    res, err := s.Manifests.DeploymentmanagerManifestsGet(ctx, operations.DeploymentmanagerManifestsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Deployment: "quas",
        Fields: sdk.String("itaque"),
        Key: sdk.String("consequatur"),
        Manifest: "est",
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        Project: "porro",
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.DeploymentmanagerManifestsGetSecurity{
        Option1: &operations.DeploymentmanagerManifestsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Manifest != nil {
        // handle response
    }
}
```

## DeploymentmanagerManifestsList

Lists all manifests for a given deployment.

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
    res, err := s.Manifests.DeploymentmanagerManifestsList(ctx, operations.DeploymentmanagerManifestsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Deployment: "odio",
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("quisquam"),
        MaxResults: sdk.Int64(876506),
        OauthToken: sdk.String("omnis"),
        OrderBy: sdk.String("quis"),
        PageToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        Project: "delectus",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DeploymentmanagerManifestsListSecurity{
        Option1: &operations.DeploymentmanagerManifestsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManifestsListResponse != nil {
        // handle response
    }
}
```
