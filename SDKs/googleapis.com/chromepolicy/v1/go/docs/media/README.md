# Media

### Available Operations

* [ChromepolicyMediaUpload](#chromepolicymediaupload) - Creates an enterprise file from the content provided by user. Returns a public download url for end user.

## ChromepolicyMediaUpload

Creates an enterprise file from the content provided by user. Returns a public download url for end user.

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
    res, err := s.Media.ChromepolicyMediaUpload(ctx, operations.ChromepolicyMediaUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("provident"),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Customer: "similique",
        Fields: sdk.String("alias"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("quod"),
    }, operations.ChromepolicyMediaUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1UploadPolicyFileResponse != nil {
        // handle response
    }
}
```
