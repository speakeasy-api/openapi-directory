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
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("dignissimos"),
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
