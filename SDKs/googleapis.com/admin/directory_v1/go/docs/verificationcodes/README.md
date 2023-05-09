# VerificationCodes

### Available Operations

* [DirectoryVerificationCodesGenerate](#directoryverificationcodesgenerate) - Generates new backup verification codes for the user.
* [DirectoryVerificationCodesInvalidate](#directoryverificationcodesinvalidate) - Invalidates the current backup verification codes for the user.
* [DirectoryVerificationCodesList](#directoryverificationcodeslist) - Returns the current set of valid backup verification codes for the specified user.

## DirectoryVerificationCodesGenerate

Generates new backup verification codes for the user.

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
    res, err := s.VerificationCodes.DirectoryVerificationCodesGenerate(ctx, operations.DirectoryVerificationCodesGenerateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("neque"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("ipsam"),
        UserKey: "officiis",
    }, operations.DirectoryVerificationCodesGenerateSecurity{
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

## DirectoryVerificationCodesInvalidate

Invalidates the current backup verification codes for the user.

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
    res, err := s.VerificationCodes.DirectoryVerificationCodesInvalidate(ctx, operations.DirectoryVerificationCodesInvalidateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("amet"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("rerum"),
        UserKey: "dolorum",
    }, operations.DirectoryVerificationCodesInvalidateSecurity{
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

## DirectoryVerificationCodesList

Returns the current set of valid backup verification codes for the specified user.

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
    res, err := s.VerificationCodes.DirectoryVerificationCodesList(ctx, operations.DirectoryVerificationCodesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("aliquid"),
        UserKey: "nihil",
    }, operations.DirectoryVerificationCodesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerificationCodes != nil {
        // handle response
    }
}
```
