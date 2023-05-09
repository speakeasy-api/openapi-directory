# SignupUrls

### Available Operations

* [AndroidmanagementSignupUrlsCreate](#androidmanagementsignupurlscreate) - Creates an enterprise signup URL.

## AndroidmanagementSignupUrlsCreate

Creates an enterprise signup URL.

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
    res, err := s.SignupUrls.AndroidmanagementSignupUrlsCreate(ctx, operations.AndroidmanagementSignupUrlsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        CallbackURL: sdk.String("maxime"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("laborum"),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.AndroidmanagementSignupUrlsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignupURL != nil {
        // handle response
    }
}
```
