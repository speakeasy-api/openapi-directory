# Challenge

### Available Operations

* [VerifiedaccessChallengeGenerate](#verifiedaccesschallengegenerate) - Generates a new challenge.
* [VerifiedaccessChallengeVerify](#verifiedaccesschallengeverify) - Verifies the challenge response.

## VerifiedaccessChallengeGenerate

Generates a new challenge.

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
    res, err := s.Challenge.VerifiedaccessChallengeGenerate(ctx, operations.VerifiedaccessChallengeGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.VerifiedaccessChallengeGenerateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Challenge != nil {
        // handle response
    }
}
```

## VerifiedaccessChallengeVerify

Verifies the challenge response.

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
    res, err := s.Challenge.VerifiedaccessChallengeVerify(ctx, operations.VerifiedaccessChallengeVerifyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        VerifyChallengeResponseRequest: &shared.VerifyChallengeResponseRequest{
            ChallengeResponse: sdk.String("ipsam"),
            ExpectedIdentity: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.VerifiedaccessChallengeVerifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyChallengeResponseResult != nil {
        // handle response
    }
}
```
