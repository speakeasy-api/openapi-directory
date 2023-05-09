# AccountReports

### Available Operations

* [LocalservicesAccountReportsSearch](#localservicesaccountreportssearch) - Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

## LocalservicesAccountReportsSearch

Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

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
    res, err := s.AccountReports.LocalservicesAccountReportsSearch(ctx, operations.LocalservicesAccountReportsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        EndDateDay: sdk.Int64(479977),
        EndDateMonth: sdk.Int64(568045),
        EndDateYear: sdk.Int64(392785),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PageSize: sdk.Int64(337396),
        PageToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("deserunt"),
        QuotaUser: sdk.String("perferendis"),
        StartDateDay: sdk.Int64(368241),
        StartDateMonth: sdk.Int64(832620),
        StartDateYear: sdk.Int64(957156),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
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
