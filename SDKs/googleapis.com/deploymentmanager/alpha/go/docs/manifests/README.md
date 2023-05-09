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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Deployment: "voluptas",
        Fields: sdk.String("minima"),
        Key: sdk.String("nobis"),
        Manifest: "dolorum",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        Project: "minus",
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("in"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Deployment: "ullam",
        Fields: sdk.String("adipisci"),
        Filter: sdk.String("cum"),
        Key: sdk.String("blanditiis"),
        MaxResults: sdk.Int64(555361),
        OauthToken: sdk.String("hic"),
        OrderBy: sdk.String("nesciunt"),
        PageToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        Project: "corrupti",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("hic"),
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
