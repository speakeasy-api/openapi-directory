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
    res, err := s.Claims.FactchecktoolsClaimsSearch(ctx, operations.FactchecktoolsClaimsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        LanguageCode: sdk.String("corrupti"),
        MaxAgeDays: sdk.Int64(847252),
        OauthToken: sdk.String("vel"),
        Offset: sdk.Int64(623564),
        PageSize: sdk.Int64(645894),
        PageToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("iure"),
        QuotaUser: sdk.String("magnam"),
        ReviewPublisherSiteFilter: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->