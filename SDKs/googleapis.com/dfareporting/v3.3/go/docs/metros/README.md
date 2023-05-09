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
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corporis",
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("neque"),
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
