# Cse

### Available Operations

* [SearchCseList](#searchcselist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* [SearchCseSiterestrictList](#searchcsesiterestrictlist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

## SearchCseList

Returns metadata about the search performed, metadata about the engine used for the search, and the search results.

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
    res, err := s.Cse.SearchCseList(ctx, operations.SearchCseListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        C2coff: sdk.String("esse"),
        Callback: sdk.String("totam"),
        Cr: sdk.String("porro"),
        Cx: sdk.String("dolorum"),
        DateRestrict: sdk.String("dicta"),
        ExactTerms: sdk.String("nam"),
        ExcludeTerms: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        FileType: sdk.String("fugit"),
        Filter: sdk.String("deleniti"),
        Gl: sdk.String("hic"),
        Googlehost: sdk.String("optio"),
        HighRange: sdk.String("totam"),
        Hl: sdk.String("beatae"),
        Hq: sdk.String("commodi"),
        ImgColorType: operations.SearchCseListImgColorTypeEnumGray.ToPointer(),
        ImgDominantColor: operations.SearchCseListImgDominantColorEnumBrown.ToPointer(),
        ImgSize: operations.SearchCseListImgSizeEnumHuge.ToPointer(),
        ImgType: operations.SearchCseListImgTypeEnumPhoto.ToPointer(),
        Key: sdk.String("cum"),
        LinkSite: sdk.String("esse"),
        LowRange: sdk.String("ipsum"),
        Lr: sdk.String("excepturi"),
        Num: sdk.Int64(135218),
        OauthToken: sdk.String("perferendis"),
        OrTerms: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("natus"),
        QuotaUser: sdk.String("sed"),
        RelatedSite: sdk.String("iste"),
        Rights: sdk.String("dolor"),
        Safe: operations.SearchCseListSafeEnumMedium.ToPointer(),
        SearchType: operations.SearchCseListSearchTypeEnumSearchTypeUndefined.ToPointer(),
        SiteSearch: sdk.String("hic"),
        SiteSearchFilter: operations.SearchCseListSiteSearchFilterEnumI.ToPointer(),
        Sort: sdk.String("fuga"),
        Start: sdk.Int64(449950),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Search != nil {
        // handle response
    }
}
```

## SearchCseSiterestrictList

Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

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
    res, err := s.Cse.SearchCseSiterestrictList(ctx, operations.SearchCseSiterestrictListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        C2coff: sdk.String("architecto"),
        Callback: sdk.String("ipsa"),
        Cr: sdk.String("reiciendis"),
        Cx: sdk.String("est"),
        DateRestrict: sdk.String("mollitia"),
        ExactTerms: sdk.String("laborum"),
        ExcludeTerms: sdk.String("dolores"),
        Fields: sdk.String("dolorem"),
        FileType: sdk.String("corporis"),
        Filter: sdk.String("explicabo"),
        Gl: sdk.String("nobis"),
        Googlehost: sdk.String("enim"),
        HighRange: sdk.String("omnis"),
        Hl: sdk.String("nemo"),
        Hq: sdk.String("minima"),
        ImgColorType: operations.SearchCseSiterestrictListImgColorTypeEnumGray.ToPointer(),
        ImgDominantColor: operations.SearchCseSiterestrictListImgDominantColorEnumImgDominantColorUndefined.ToPointer(),
        ImgSize: operations.SearchCseSiterestrictListImgSizeEnumLarge.ToPointer(),
        ImgType: operations.SearchCseSiterestrictListImgTypeEnumStock.ToPointer(),
        Key: sdk.String("doloribus"),
        LinkSite: sdk.String("sapiente"),
        LowRange: sdk.String("architecto"),
        Lr: sdk.String("mollitia"),
        Num: sdk.Int64(208876),
        OauthToken: sdk.String("culpa"),
        OrTerms: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("repellat"),
        QuotaUser: sdk.String("mollitia"),
        RelatedSite: sdk.String("occaecati"),
        Rights: sdk.String("numquam"),
        Safe: operations.SearchCseSiterestrictListSafeEnumHigh.ToPointer(),
        SearchType: operations.SearchCseSiterestrictListSearchTypeEnumSearchTypeUndefined.ToPointer(),
        SiteSearch: sdk.String("molestiae"),
        SiteSearchFilter: operations.SearchCseSiterestrictListSiteSearchFilterEnumSiteSearchFilterUndefined.ToPointer(),
        Sort: sdk.String("error"),
        Start: sdk.Int64(158969),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Search != nil {
        // handle response
    }
}
```
