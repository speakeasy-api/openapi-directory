# TwoStepVerification

### Available Operations

* [DirectoryTwoStepVerificationTurnOff](#directorytwostepverificationturnoff) - Turns off 2-Step Verification for user.

## DirectoryTwoStepVerificationTurnOff

Turns off 2-Step Verification for user.

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
    res, err := s.TwoStepVerification.DirectoryTwoStepVerificationTurnOff(ctx, operations.DirectoryTwoStepVerificationTurnOffRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("architecto"),
        UserKey: "aperiam",
    }, operations.DirectoryTwoStepVerificationTurnOffSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
