# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/customsearch/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        C2coff: sdk.String("quibusdam"),
        Callback: sdk.String("unde"),
        Cr: sdk.String("nulla"),
        Cx: sdk.String("corrupti"),
        DateRestrict: sdk.String("illum"),
        ExactTerms: sdk.String("vel"),
        ExcludeTerms: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        FileType: sdk.String("suscipit"),
        Filter: sdk.String("iure"),
        Gl: sdk.String("magnam"),
        Googlehost: sdk.String("debitis"),
        HighRange: sdk.String("ipsa"),
        Hl: sdk.String("delectus"),
        Hq: sdk.String("tempora"),
        ImgColorType: operations.SearchCseListImgColorTypeEnumMono.ToPointer(),
        ImgDominantColor: operations.SearchCseListImgDominantColorEnumOrange.ToPointer(),
        ImgSize: operations.SearchCseListImgSizeEnumXlarge.ToPointer(),
        ImgType: operations.SearchCseListImgTypeEnumPhoto.ToPointer(),
        Key: sdk.String("voluptatum"),
        LinkSite: sdk.String("iusto"),
        LowRange: sdk.String("excepturi"),
        Lr: sdk.String("nisi"),
        Num: sdk.Int64(925597),
        OauthToken: sdk.String("temporibus"),
        OrTerms: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("quis"),
        QuotaUser: sdk.String("veritatis"),
        RelatedSite: sdk.String("deserunt"),
        Rights: sdk.String("perferendis"),
        Safe: operations.SearchCseListSafeEnumActive.ToPointer(),
        SearchType: operations.SearchCseListSearchTypeEnumImage.ToPointer(),
        SiteSearch: sdk.String("sapiente"),
        SiteSearchFilter: operations.SearchCseListSiteSearchFilterEnumI.ToPointer(),
        Sort: sdk.String("odit"),
        Start: sdk.Int64(870013),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Search != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Cse](docs/cse/README.md)

* [SearchCseList](docs/cse/README.md#searchcselist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* [SearchCseSiterestrictList](docs/cse/README.md#searchcsesiterestrictlist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
