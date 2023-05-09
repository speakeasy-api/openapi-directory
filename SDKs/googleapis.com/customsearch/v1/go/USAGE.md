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