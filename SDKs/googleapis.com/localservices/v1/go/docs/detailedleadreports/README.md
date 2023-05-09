# DetailedLeadReports

### Available Operations

* [LocalservicesDetailedLeadReportsSearch](#localservicesdetailedleadreportssearch) - Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

## LocalservicesDetailedLeadReportsSearch

Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

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
    res, err := s.DetailedLeadReports.LocalservicesDetailedLeadReportsSearch(ctx, operations.LocalservicesDetailedLeadReportsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        EndDateDay: sdk.Int64(799159),
        EndDateMonth: sdk.Int64(800911),
        EndDateYear: sdk.Int64(461479),
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(118274),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("officia"),
        QuotaUser: sdk.String("occaecati"),
        StartDateDay: sdk.Int64(143353),
        StartDateMonth: sdk.Int64(537373),
        StartDateYear: sdk.Int64(944669),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.LocalservicesDetailedLeadReportsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse != nil {
        // handle response
    }
}
```
