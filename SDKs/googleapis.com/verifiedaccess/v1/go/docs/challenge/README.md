# Challenge

### Available Operations

* [VerifiedaccessChallengeCreate](#verifiedaccesschallengecreate) - CreateChallenge API
* [VerifiedaccessChallengeVerify](#verifiedaccesschallengeverify) - VerifyChallengeResponse API

## VerifiedaccessChallengeCreate

CreateChallenge API

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
    res, err := s.Challenge.VerifiedaccessChallengeCreate(ctx, operations.VerifiedaccessChallengeCreateRequest{
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
    }, operations.VerifiedaccessChallengeCreateSecurity{
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

VerifyChallengeResponse API

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
            ChallengeResponse: &shared.SignedData{
                Data: sdk.String("ipsam"),
                Signature: sdk.String("repellendus"),
            },
            ExpectedIdentity: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
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
