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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SearchCseListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        C2coff: "quibusdam",
        Callback: "unde",
        Cr: "nulla",
        Cx: "corrupti",
        DateRestrict: "illum",
        ExactTerms: "vel",
        ExcludeTerms: "error",
        Fields: "deserunt",
        FileType: "suscipit",
        Filter: "iure",
        Gl: "magnam",
        Googlehost: "debitis",
        HighRange: "ipsa",
        Hl: "delectus",
        Hq: "tempora",
        ImgColorType: "mono",
        ImgDominantColor: "orange",
        ImgSize: "XLARGE",
        ImgType: "photo",
        Key: "voluptatum",
        LinkSite: "iusto",
        LowRange: "excepturi",
        Lr: "nisi",
        Num: 925597,
        OauthToken: "temporibus",
        OrTerms: "ab",
        PrettyPrint: false,
        Q: "quis",
        QuotaUser: "veritatis",
        RelatedSite: "deserunt",
        Rights: "perferendis",
        Safe: "active",
        SearchType: "image",
        SiteSearch: "sapiente",
        SiteSearchFilter: "i",
        Sort: "odit",
        Start: 870013,
        UploadType: "at",
        UploadProtocol: "maiores",
    }

    ctx := context.Background()
    res, err := s.Cse.SearchCseList(ctx, req)
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


### Cse

* `SearchCseList` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* `SearchCseSiterestrictList` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
