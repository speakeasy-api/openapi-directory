# Systemapks

### Available Operations

* [AndroidpublisherSystemapksVariantsCreate](#androidpublishersystemapksvariantscreate) - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* [AndroidpublisherSystemapksVariantsDownload](#androidpublishersystemapksvariantsdownload) - Downloads a previously created system APK which is suitable for inclusion in a system image.
* [AndroidpublisherSystemapksVariantsGet](#androidpublishersystemapksvariantsget) - Returns a previously created system APK variant.
* [AndroidpublisherSystemapksVariantsList](#androidpublishersystemapksvariantslist) - Returns the list of previously created system APK variants.

## AndroidpublisherSystemapksVariantsCreate

Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.

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
    res, err := s.Systemapks.AndroidpublisherSystemapksVariantsCreate(ctx, operations.AndroidpublisherSystemapksVariantsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VariantInput: &shared.VariantInput{
            DeviceSpec: &shared.DeviceSpec{
                ScreenDensity: sdk.Int64(344856),
                SupportedAbis: []string{
                    "architecto",
                    "est",
                    "enim",
                },
                SupportedLocales: []string{
                    "magni",
                    "quae",
                    "quas",
                },
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("delectus"),
        PackageName: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("natus"),
        VersionCode: "quaerat",
    }, operations.AndroidpublisherSystemapksVariantsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variant != nil {
        // handle response
    }
}
```

## AndroidpublisherSystemapksVariantsDownload

Downloads a previously created system APK which is suitable for inclusion in a system image.

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
    res, err := s.Systemapks.AndroidpublisherSystemapksVariantsDownload(ctx, operations.AndroidpublisherSystemapksVariantsDownloadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("enim"),
        PackageName: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("nesciunt"),
        VariantID: 22331,
        VersionCode: "odio",
    }, operations.AndroidpublisherSystemapksVariantsDownloadSecurity{
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

## AndroidpublisherSystemapksVariantsGet

Returns a previously created system APK variant.

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
    res, err := s.Systemapks.AndroidpublisherSystemapksVariantsGet(ctx, operations.AndroidpublisherSystemapksVariantsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("fugit"),
        PackageName: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sed"),
        VariantID: 537170,
        VersionCode: "sunt",
    }, operations.AndroidpublisherSystemapksVariantsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variant != nil {
        // handle response
    }
}
```

## AndroidpublisherSystemapksVariantsList

Returns the list of previously created system APK variants.

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
    res, err := s.Systemapks.AndroidpublisherSystemapksVariantsList(ctx, operations.AndroidpublisherSystemapksVariantsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("sunt"),
        PackageName: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("ipsa"),
        VersionCode: "at",
    }, operations.AndroidpublisherSystemapksVariantsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemApksListResponse != nil {
        // handle response
    }
}
```
