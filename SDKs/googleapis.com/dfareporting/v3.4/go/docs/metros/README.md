# Metros

### Available Operations

* [DfareportingMetrosList](#dfareportingmetroslist) - Retrieves a list of metros.

## DfareportingMetrosList

Retrieves a list of metros.

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
    res, err := s.Metros.DfareportingMetrosList(ctx, operations.DfareportingMetrosListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "labore",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.DfareportingMetrosListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetrosListResponse != nil {
        // handle response
    }
}
```
