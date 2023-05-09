# Generatedapks

### Available Operations

* [AndroidpublisherGeneratedapksDownload](#androidpublishergeneratedapksdownload) - Downloads a single signed APK generated from an app bundle.
* [AndroidpublisherGeneratedapksList](#androidpublishergeneratedapkslist) - Returns download metadata for all APKs that were generated from a given app bundle.

## AndroidpublisherGeneratedapksDownload

Downloads a single signed APK generated from an app bundle.

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
    res, err := s.Generatedapks.AndroidpublisherGeneratedapksDownload(ctx, operations.AndroidpublisherGeneratedapksDownloadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        DownloadID: "voluptas",
        Fields: sdk.String("numquam"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quos"),
        PackageName: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("nesciunt"),
        VersionCode: 681740,
    }, operations.AndroidpublisherGeneratedapksDownloadSecurity{
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

## AndroidpublisherGeneratedapksList

Returns download metadata for all APKs that were generated from a given app bundle.

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
    res, err := s.Generatedapks.AndroidpublisherGeneratedapksList(ctx, operations.AndroidpublisherGeneratedapksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nisi"),
        PackageName: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("cupiditate"),
        VersionCode: 970732,
    }, operations.AndroidpublisherGeneratedapksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneratedApksListResponse != nil {
        // handle response
    }
}
```
