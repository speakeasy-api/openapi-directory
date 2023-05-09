# Collections

### Available Operations

* [ContentCollectionsCreate](#contentcollectionscreate) - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* [ContentCollectionsDelete](#contentcollectionsdelete) - Deletes a collection from your Merchant Center account.
* [ContentCollectionsGet](#contentcollectionsget) - Retrieves a collection from your Merchant Center account.
* [ContentCollectionsList](#contentcollectionslist) - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

## ContentCollectionsCreate

Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.

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
    res, err := s.Collections.ContentCollectionsCreate(ctx, operations.ContentCollectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Collection: &shared.Collection{
            CustomLabel0: sdk.String("quas"),
            CustomLabel1: sdk.String("hic"),
            CustomLabel2: sdk.String("nesciunt"),
            CustomLabel3: sdk.String("culpa"),
            CustomLabel4: sdk.String("corrupti"),
            FeaturedProduct: []shared.CollectionFeaturedProduct{
                shared.CollectionFeaturedProduct{
                    OfferID: sdk.String("totam"),
                    X: sdk.Float32(9402.1),
                    Y: sdk.Float32(3487.83),
                },
                shared.CollectionFeaturedProduct{
                    OfferID: sdk.String("nobis"),
                    X: sdk.Float32(246.19),
                    Y: sdk.Float32(6995.75),
                },
                shared.CollectionFeaturedProduct{
                    OfferID: sdk.String("sed"),
                    X: sdk.Float32(9679.66),
                    Y: sdk.Float32(1318.52),
                },
                shared.CollectionFeaturedProduct{
                    OfferID: sdk.String("asperiores"),
                    X: sdk.Float32(7079.18),
                    Y: sdk.Float32(4518.22),
                },
            },
            Headline: []string{
                "ab",
                "iste",
                "dolore",
            },
            ID: sdk.String("a276b269-16fe-41f0-8f42-94e3698f447f"),
            ImageLink: []string{
                "sit",
                "non",
            },
            Language: sdk.String("officiis"),
            Link: sdk.String("praesentium"),
            MobileLink: sdk.String("facilis"),
            ProductCountry: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("rem"),
        Key: sdk.String("sit"),
        MerchantID: "nobis",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.ContentCollectionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## ContentCollectionsDelete

Deletes a collection from your Merchant Center account.

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
    res, err := s.Collections.ContentCollectionsDelete(ctx, operations.ContentCollectionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aperiam"),
        CollectionID: "saepe",
        Fields: sdk.String("numquam"),
        Key: sdk.String("veniam"),
        MerchantID: "in",
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.ContentCollectionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ContentCollectionsGet

Retrieves a collection from your Merchant Center account.

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
    res, err := s.Collections.ContentCollectionsGet(ctx, operations.ContentCollectionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        CollectionID: "voluptatum",
        Fields: sdk.String("error"),
        Key: sdk.String("hic"),
        MerchantID: "expedita",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.ContentCollectionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## ContentCollectionsList

Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

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
    res, err := s.Collections.ContentCollectionsList(ctx, operations.ContentCollectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("atque"),
        MerchantID: "fugit",
        OauthToken: sdk.String("ut"),
        PageSize: sdk.Int64(856303),
        PageToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.ContentCollectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCollectionsResponse != nil {
        // handle response
    }
}
```
