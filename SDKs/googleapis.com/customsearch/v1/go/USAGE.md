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
        QueryParams: operations.SearchCseListQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            C2coff: "nulla",
            Callback: "id",
            Cr: "vero",
            Cx: "perspiciatis",
            DateRestrict: "nulla",
            ExactTerms: "nihil",
            ExcludeTerms: "fuga",
            Fields: "facilis",
            FileType: "eum",
            Filter: "iusto",
            Gl: "ullam",
            Googlehost: "saepe",
            HighRange: "inventore",
            Hl: "sapiente",
            Hq: "enim",
            ImgColorType: "mono",
            ImgDominantColor: "orange",
            ImgSize: "XLARGE",
            ImgType: "photo",
            Key: "non",
            LinkSite: "deleniti",
            LowRange: "similique",
            Lr: "reprehenderit",
            Num: 925597,
            OauthToken: "quo",
            OrTerms: "quasi",
            PrettyPrint: false,
            Q: "laboriosam",
            QuotaUser: "dicta",
            RelatedSite: "est",
            Rights: "voluptatem",
            Safe: "active",
            SearchType: "image",
            SiteSearch: "a",
            SiteSearchFilter: "i",
            Sort: "eos",
            Start: 870013,
            UploadType: "accusamus",
            UploadProtocol: "reiciendis",
        },
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