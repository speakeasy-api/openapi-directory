# ViolatingSites

### Available Operations

* [AbusiveexperiencereportViolatingSitesList](#abusiveexperiencereportviolatingsiteslist) - Lists sites that are failing in the Abusive Experience Report.

## AbusiveexperiencereportViolatingSitesList

Lists sites that are failing in the Abusive Experience Report.

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
    res, err := s.ViolatingSites.AbusiveexperiencereportViolatingSitesList(ctx, operations.AbusiveexperiencereportViolatingSitesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ViolatingSitesResponse != nil {
        // handle response
    }
}
```
