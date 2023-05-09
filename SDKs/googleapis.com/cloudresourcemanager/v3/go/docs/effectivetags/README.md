# EffectiveTags

### Available Operations

* [CloudresourcemanagerEffectiveTagsList](#cloudresourcemanagereffectivetagslist) - Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

## CloudresourcemanagerEffectiveTagsList

Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

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
    res, err := s.EffectiveTags.CloudresourcemanagerEffectiveTagsList(ctx, operations.CloudresourcemanagerEffectiveTagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(791725),
        PageToken: sdk.String("placeat"),
        Parent: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.CloudresourcemanagerEffectiveTagsListSecurity{
        Option1: &operations.CloudresourcemanagerEffectiveTagsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEffectiveTagsResponse != nil {
        // handle response
    }
}
```
