# Media

### Available Operations

* [DisplayvideoMediaDownload](#displayvideomediadownload) - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* [DisplayvideoMediaUpload](#displayvideomediaupload) - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

## DisplayvideoMediaDownload

Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.

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
    res, err := s.Media.DisplayvideoMediaDownload(ctx, operations.DisplayvideoMediaDownloadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("natus"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        ResourceName: "facere",
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.DisplayvideoMediaDownloadSecurity{
        Option1: &operations.DisplayvideoMediaDownloadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleBytestreamMedia != nil {
        // handle response
    }
}
```

## DisplayvideoMediaUpload

Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

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
    res, err := s.Media.DisplayvideoMediaUpload(ctx, operations.DisplayvideoMediaUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: []byte("provident"),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        ResourceName: "quo",
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("in"),
    }, operations.DisplayvideoMediaUploadSecurity{
        Option1: &operations.DisplayvideoMediaUploadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleBytestreamMedia != nil {
        // handle response
    }
}
```
