# Activities

### Available Operations

* [YoutubeActivitiesList](#youtubeactivitieslist) - Retrieves a list of resources, possibly filtered.

## YoutubeActivitiesList

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
    res, err := s.Activities.YoutubeActivitiesList(ctx, operations.YoutubeActivitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        ChannelID: sdk.String("delectus"),
        Fields: sdk.String("dolorem"),
        Home: sdk.Bool(false),
        Key: sdk.String("dolore"),
        MaxResults: sdk.Int64(286915),
        Mine: sdk.Bool(false),
        OauthToken: sdk.String("adipisci"),
        PageToken: sdk.String("dolorum"),
        Part: []string{
            "quae",
        },
        PrettyPrint: sdk.Bool(false),
        PublishedAfter: sdk.String("aut"),
        PublishedBefore: sdk.String("quas"),
        QuotaUser: sdk.String("itaque"),
        RegionCode: sdk.String("consequatur"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.YoutubeActivitiesListSecurity{
        Option1: &operations.YoutubeActivitiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityListResponse != nil {
        // handle response
    }
}
```
