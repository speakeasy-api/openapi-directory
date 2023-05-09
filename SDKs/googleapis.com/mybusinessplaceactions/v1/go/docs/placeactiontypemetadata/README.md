# PlaceActionTypeMetadata

### Available Operations

* [MybusinessplaceactionsPlaceActionTypeMetadataList](#mybusinessplaceactionsplaceactiontypemetadatalist) - Returns the list of available place action types for a location or country.

## MybusinessplaceactionsPlaceActionTypeMetadataList

Returns the list of available place action types for a location or country.

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
    res, err := s.PlaceActionTypeMetadata.MybusinessplaceactionsPlaceActionTypeMetadataList(ctx, operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestiae"),
        Filter: sdk.String("velit"),
        Key: sdk.String("error"),
        LanguageCode: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PageSize: sdk.Int64(110375),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlaceActionTypeMetadataResponse != nil {
        // handle response
    }
}
```
