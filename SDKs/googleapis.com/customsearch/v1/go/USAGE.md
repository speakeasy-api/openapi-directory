<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.SearchCseListRequest{
        QueryParams: operations.SearchCseListQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            C2coff: "expedita",
            Callback: "consequuntur",
            Cr: "dolor",
            Cx: "expedita",
            DateRestrict: "voluptas",
            ExactTerms: "fugit",
            ExcludeTerms: "et",
            Fields: "nihil",
            FileType: "rerum",
            Filter: "dicta",
            Gl: "debitis",
            Googlehost: "voluptatum",
            HighRange: "et",
            Hl: "ut",
            Hq: "dolorem",
            ImgColorType: "imgColorTypeUndefined",
            ImgDominantColor: "blue",
            ImgSize: "LARGE",
            ImgType: "face",
            Key: "totam",
            LinkSite: "dolores",
            LowRange: "illum",
            Lr: "debitis",
            Num: 3706853784096366226,
            OauthToken: "odio",
            OrTerms: "dolore",
            PrettyPrint: false,
            Q: "aspernatur",
            QuotaUser: "accusantium",
            RelatedSite: "totam",
            Rights: "commodi",
            Safe: "medium",
            SearchType: "image",
            SiteSearch: "aut",
            SiteSearchFilter: "e",
            Sort: "non",
            Start: 167566062957544642,
            UploadType: "omnis",
            UploadProtocol: "aut",
        },
    }
    
    res, err := s.Cse.SearchCseList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Search != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->