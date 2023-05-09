# ThirdPartyLinks

### Available Operations

* [YoutubeThirdPartyLinksDelete](#youtubethirdpartylinksdelete) - Deletes a resource.
* [YoutubeThirdPartyLinksInsert](#youtubethirdpartylinksinsert) - Inserts a new resource into this collection.
* [YoutubeThirdPartyLinksList](#youtubethirdpartylinkslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeThirdPartyLinksUpdate](#youtubethirdpartylinksupdate) - Updates an existing resource.

## YoutubeThirdPartyLinksDelete

Deletes a resource.

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
    res, err := s.ThirdPartyLinks.YoutubeThirdPartyLinksDelete(ctx, operations.YoutubeThirdPartyLinksDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        ExternalChannelID: sdk.String("perspiciatis"),
        Fields: sdk.String("quam"),
        Key: sdk.String("atque"),
        LinkingToken: "officia",
        OauthToken: sdk.String("ex"),
        Part: []string{
            "a",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        Type: operations.YoutubeThirdPartyLinksDeleteTypeEnumLinkUnspecified,
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeThirdPartyLinksInsert

Inserts a new resource into this collection.

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
    res, err := s.ThirdPartyLinks.YoutubeThirdPartyLinksInsert(ctx, operations.YoutubeThirdPartyLinksInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ThirdPartyLink: &shared.ThirdPartyLink{
            Etag: sdk.String("accusantium"),
            Kind: sdk.String("commodi"),
            LinkingToken: sdk.String("atque"),
            Snippet: &shared.ThirdPartyLinkSnippet{
                ChannelToStoreLink: &shared.ChannelToStoreLinkDetails{
                    MerchantID: sdk.String("totam"),
                    StoreName: sdk.String("tenetur"),
                    StoreURL: sdk.String("voluptate"),
                },
                Type: shared.ThirdPartyLinkSnippetTypeEnumLinkUnspecified.ToPointer(),
            },
            Status: &shared.ThirdPartyLinkStatus{
                LinkStatus: shared.ThirdPartyLinkStatusLinkStatusEnumLinked.ToPointer(),
            },
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ExternalChannelID: sdk.String("quod"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("facere"),
        Part: []string{
            "fuga",
            "ab",
            "ex",
            "consectetur",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThirdPartyLink != nil {
        // handle response
    }
}
```

## YoutubeThirdPartyLinksList

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
    res, err := s.ThirdPartyLinks.YoutubeThirdPartyLinksList(ctx, operations.YoutubeThirdPartyLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        ExternalChannelID: sdk.String("laborum"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nihil"),
        LinkingToken: sdk.String("tenetur"),
        OauthToken: sdk.String("sapiente"),
        Part: []string{
            "adipisci",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        Type: operations.YoutubeThirdPartyLinksListTypeEnumChannelToStoreLink.ToPointer(),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThirdPartyLinkListResponse != nil {
        // handle response
    }
}
```

## YoutubeThirdPartyLinksUpdate

Updates an existing resource.

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
    res, err := s.ThirdPartyLinks.YoutubeThirdPartyLinksUpdate(ctx, operations.YoutubeThirdPartyLinksUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ThirdPartyLink: &shared.ThirdPartyLink{
            Etag: sdk.String("molestias"),
            Kind: sdk.String("ipsam"),
            LinkingToken: sdk.String("esse"),
            Snippet: &shared.ThirdPartyLinkSnippet{
                ChannelToStoreLink: &shared.ChannelToStoreLinkDetails{
                    MerchantID: sdk.String("laborum"),
                    StoreName: sdk.String("perspiciatis"),
                    StoreURL: sdk.String("voluptates"),
                },
                Type: shared.ThirdPartyLinkSnippetTypeEnumLinkUnspecified.ToPointer(),
            },
            Status: &shared.ThirdPartyLinkStatus{
                LinkStatus: shared.ThirdPartyLinkStatusLinkStatusEnumUnknown.ToPointer(),
            },
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        ExternalChannelID: sdk.String("porro"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("quidem"),
        Part: []string{
            "et",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThirdPartyLink != nil {
        // handle response
    }
}
```
