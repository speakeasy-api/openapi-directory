# VideoCategories

### Available Operations

* [YoutubeVideoCategoriesList](#youtubevideocategorieslist) - Retrieves a list of resources, possibly filtered.

## YoutubeVideoCategoriesList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.VideoCategories.YoutubeVideoCategoriesList(ctx, operations.YoutubeVideoCategoriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("velit"),
        Hl: sdk.String("ratione"),
        ID: []string{
            "maxime",
            "recusandae",
            "cumque",
        },
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("totam"),
        Part: []string{
            "maiores",
            "est",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        RegionCode: sdk.String("veritatis"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("iste"),
    }, operations.YoutubeVideoCategoriesListSecurity{
        Option1: &operations.YoutubeVideoCategoriesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoCategoryListResponse != nil {
        // handle response
    }
}
```
