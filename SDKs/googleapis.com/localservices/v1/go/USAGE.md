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
    res, err := s.AccountReports.LocalservicesAccountReportsSearch(ctx, operations.LocalservicesAccountReportsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        EndDateDay: sdk.Int64(602763),
        EndDateMonth: sdk.Int64(857946),
        EndDateYear: sdk.Int64(544883),
        Fields: sdk.String("illum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        PageSize: sdk.Int64(645894),
        PageToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("iure"),
        QuotaUser: sdk.String("magnam"),
        StartDateDay: sdk.Int64(891773),
        StartDateMonth: sdk.Int64(56713),
        StartDateYear: sdk.Int64(963663),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.LocalservicesAccountReportsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->