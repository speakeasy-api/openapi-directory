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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        LanguageCode: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("dicta"),
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
