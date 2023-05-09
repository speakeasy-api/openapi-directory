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
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Deployment: "ea",
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        Project: "magnam",
        QuotaUser: sdk.String("ratione"),
        Resource: "ex",
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("dicta"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        Deployment: "nulla",
        Fields: sdk.String("excepturi"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("nostrum"),
        MaxResults: sdk.Int64(960835),
        OauthToken: sdk.String("quisquam"),
        OrderBy: sdk.String("saepe"),
        PageToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        Project: "impedit",
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("aliquid"),
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
