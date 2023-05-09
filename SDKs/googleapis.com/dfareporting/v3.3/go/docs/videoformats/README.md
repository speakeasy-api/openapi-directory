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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("adipisci"),
        ID: 971176,
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "expedita",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quod"),
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
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "error",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("sequi"),
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
