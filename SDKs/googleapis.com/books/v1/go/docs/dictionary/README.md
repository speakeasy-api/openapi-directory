# Dictionary

### Available Operations

* [BooksDictionaryListOfflineMetadata](#booksdictionarylistofflinemetadata) - Returns a list of offline dictionary metadata available

## BooksDictionaryListOfflineMetadata

Returns a list of offline dictionary metadata available

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
    res, err := s.Dictionary.BooksDictionaryListOfflineMetadata(ctx, operations.BooksDictionaryListOfflineMetadataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Cpksver: "excepturi",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.BooksDictionaryListOfflineMetadataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Metadata != nil {
        // handle response
    }
}
```
