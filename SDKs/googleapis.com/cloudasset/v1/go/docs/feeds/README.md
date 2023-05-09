# Feeds

### Available Operations

* [CloudassetFeedsCreate](#cloudassetfeedscreate) - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* [CloudassetFeedsList](#cloudassetfeedslist) - Lists all asset feeds in a parent project/folder/organization.

## CloudassetFeedsCreate

Creates a feed in a parent project/folder/organization to listen to its asset updates.

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
    res, err := s.Feeds.CloudassetFeedsCreate(ctx, operations.CloudassetFeedsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateFeedRequest: &shared.CreateFeedRequest{
            Feed: &shared.Feed{
                AssetNames: []string{
                    "qui",
                    "impedit",
                },
                AssetTypes: []string{
                    "esse",
                    "ipsum",
                    "excepturi",
                },
                Condition: &shared.Expr{
                    Description: sdk.String("aspernatur"),
                    Expression: sdk.String("perferendis"),
                    Location: sdk.String("ad"),
                    Title: sdk.String("Miss"),
                },
                ContentType: shared.FeedContentTypeEnumResource.ToPointer(),
                FeedOutputConfig: &shared.FeedOutputConfig{
                    PubsubDestination: &shared.PubsubDestination{
                        Topic: sdk.String("iste"),
                    },
                },
                Name: sdk.String("Faye Howe"),
                RelationshipTypes: []string{
                    "in",
                    "corporis",
                    "iste",
                },
            },
            FeedID: sdk.String("iure"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.CloudassetFeedsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Feed != nil {
        // handle response
    }
}
```

## CloudassetFeedsList

Lists all asset feeds in a parent project/folder/organization.

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
    res, err := s.Feeds.CloudassetFeedsList(ctx, operations.CloudassetFeedsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.CloudassetFeedsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeedsResponse != nil {
        // handle response
    }
}
```
