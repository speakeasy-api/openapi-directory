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
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("quod"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("officia"),
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
