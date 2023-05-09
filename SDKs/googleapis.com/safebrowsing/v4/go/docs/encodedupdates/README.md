# EncodedUpdates

### Available Operations

* [SafebrowsingEncodedUpdatesGet](#safebrowsingencodedupdatesget)

## SafebrowsingEncodedUpdatesGet

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
    res, err := s.EncodedUpdates.SafebrowsingEncodedUpdatesGet(ctx, operations.SafebrowsingEncodedUpdatesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        ClientID: sdk.String("veritatis"),
        ClientVersion: sdk.String("deserunt"),
        EncodedRequest: "perferendis",
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse != nil {
        // handle response
    }
}
```
