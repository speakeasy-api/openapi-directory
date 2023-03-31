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