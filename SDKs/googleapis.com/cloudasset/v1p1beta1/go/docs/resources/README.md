# Resources

### Available Operations

* [CloudassetResourcesSearchAll](#cloudassetresourcessearchall) - Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.

## CloudassetResourcesSearchAll

Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.

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
    res, err := s.Resources.CloudassetResourcesSearchAll(ctx, operations.CloudassetResourcesSearchAllRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AssetTypes: []string{
            "perferendis",
            "ipsam",
            "repellendus",
        },
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        OrderBy: sdk.String("at"),
        PageSize: sdk.Int64(978619),
        PageToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quod"),
        QuotaUser: sdk.String("quod"),
        Scope: "esse",
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.CloudassetResourcesSearchAllSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllResourcesResponse != nil {
        // handle response
    }
}
```
