# Detections

### Available Operations

* [LanguageDetectionsDetect](#languagedetectionsdetect) - Detects the language of text within a request.
* [LanguageDetectionsList](#languagedetectionslist) - Detects the language of text within a request.

## LanguageDetectionsDetect

Detects the language of text within a request.

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
    res, err := s.Detections.LanguageDetectionsDetect(ctx, operations.LanguageDetectionsDetectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DetectLanguageRequest: &shared.DetectLanguageRequest{
            Q: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BearerToken: sdk.String("iusto"),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("temporibus"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.LanguageDetectionsDetectSecurity{
        Option1: &operations.LanguageDetectionsDetectSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectionsListResponse != nil {
        // handle response
    }
}
```

## LanguageDetectionsList

Detects the language of text within a request.

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
    res, err := s.Detections.LanguageDetectionsList(ctx, operations.LanguageDetectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BearerToken: sdk.String("repellendus"),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        Q: []string{
            "maiores",
            "molestiae",
            "quod",
            "quod",
        },
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.LanguageDetectionsListSecurity{
        Option1: &operations.LanguageDetectionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectionsListResponse != nil {
        // handle response
    }
}
```
