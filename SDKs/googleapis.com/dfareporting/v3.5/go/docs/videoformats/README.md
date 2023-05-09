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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("corporis"),
        ID: 485915,
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "numquam",
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("aperiam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "itaque",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("quo"),
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
