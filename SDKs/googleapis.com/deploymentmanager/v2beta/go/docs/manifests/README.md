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
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corrupti"),
        Deployment: "non",
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("dolor"),
        Manifest: "occaecati",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        Project: "impedit",
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("aut"),
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
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("natus"),
        Deployment: "velit",
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("voluptas"),
        Key: sdk.String("asperiores"),
        MaxResults: sdk.Int64(45659),
        OauthToken: sdk.String("ea"),
        OrderBy: sdk.String("quaerat"),
        PageToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        Project: "repellendus",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("dignissimos"),
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
