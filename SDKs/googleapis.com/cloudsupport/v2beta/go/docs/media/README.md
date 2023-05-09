# Media

### Available Operations

* [CloudsupportMediaDownload](#cloudsupportmediadownload) - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* [CloudsupportMediaUpload](#cloudsupportmediaupload) - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

## CloudsupportMediaDownload

Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.

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
    res, err := s.Media.CloudsupportMediaDownload(ctx, operations.CloudsupportMediaDownloadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        Name: "Elvira Herman",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.CloudsupportMediaDownloadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## CloudsupportMediaUpload

Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

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
    res, err := s.Media.CloudsupportMediaUpload(ctx, operations.CloudsupportMediaUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("accusantium"),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("magni"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("quo"),
        Parent: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("ea"),
    }, operations.CloudsupportMediaUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```
