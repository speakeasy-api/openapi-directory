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
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("quod"),
        ID: 231565,
        Key: sdk.String("quo"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tenetur",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("hic"),
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
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "veritatis",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("autem"),
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
