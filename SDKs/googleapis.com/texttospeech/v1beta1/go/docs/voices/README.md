# Voices

### Available Operations

* [TexttospeechVoicesList](#texttospeechvoiceslist) - Returns a list of Voice supported for synthesis.

## TexttospeechVoicesList

Returns a list of Voice supported for synthesis.

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
    res, err := s.Voices.TexttospeechVoicesList(ctx, operations.TexttospeechVoicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        LanguageCode: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("animi"),
    }, operations.TexttospeechVoicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVoicesResponse != nil {
        // handle response
    }
}
```
