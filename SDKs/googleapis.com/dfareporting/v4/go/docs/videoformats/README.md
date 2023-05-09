# VideoFormats

### Available Operations

* [DfareportingVideoFormatsGet](#dfareportingvideoformatsget) - Gets one video format by ID.
* [DfareportingVideoFormatsList](#dfareportingvideoformatslist) - Lists available video formats.

## DfareportingVideoFormatsGet

Gets one video format by ID.

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
    res, err := s.VideoFormats.DfareportingVideoFormatsGet(ctx, operations.DfareportingVideoFormatsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("consequatur"),
        ID: 923816,
        Key: sdk.String("quia"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corporis",
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("modi"),
    }, operations.DfareportingVideoFormatsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoFormat != nil {
        // handle response
    }
}
```

## DfareportingVideoFormatsList

Lists available video formats.

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
    res, err := s.VideoFormats.DfareportingVideoFormatsList(ctx, operations.DfareportingVideoFormatsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eos",
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.DfareportingVideoFormatsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoFormatsListResponse != nil {
        // handle response
    }
}
```
