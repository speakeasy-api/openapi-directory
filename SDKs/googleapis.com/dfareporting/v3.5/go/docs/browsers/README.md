# Browsers

### Available Operations

* [DfareportingBrowsersList](#dfareportingbrowserslist) - Retrieves a list of browsers.

## DfareportingBrowsersList

Retrieves a list of browsers.

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
    res, err := s.Browsers.DfareportingBrowsersList(ctx, operations.DfareportingBrowsersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "in",
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.DfareportingBrowsersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrowsersListResponse != nil {
        // handle response
    }
}
```
