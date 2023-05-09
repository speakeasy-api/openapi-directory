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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("est"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "beatae",
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("unde"),
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
