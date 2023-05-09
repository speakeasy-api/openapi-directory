# SavedColumns

### Available Operations

* [DoubleclicksearchSavedColumnsList](#doubleclicksearchsavedcolumnslist) - Retrieve the list of saved columns for a specified advertiser.

## DoubleclicksearchSavedColumnsList

Retrieve the list of saved columns for a specified advertiser.

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
    res, err := s.SavedColumns.DoubleclicksearchSavedColumnsList(ctx, operations.DoubleclicksearchSavedColumnsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        AdvertiserID: "deserunt",
        AgencyID: "molestiae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("eum"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.DoubleclicksearchSavedColumnsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedColumnList != nil {
        // handle response
    }
}
```
