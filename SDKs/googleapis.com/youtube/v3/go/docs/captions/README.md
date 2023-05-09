# Captions

### Available Operations

* [YoutubeCaptionsDelete](#youtubecaptionsdelete) - Deletes a resource.
* [YoutubeCaptionsDownload](#youtubecaptionsdownload) - Downloads a caption track.
* [YoutubeCaptionsInsert](#youtubecaptionsinsert) - Inserts a new resource into this collection.
* [YoutubeCaptionsList](#youtubecaptionslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeCaptionsUpdate](#youtubecaptionsupdate) - Updates an existing resource.

## YoutubeCaptionsDelete

Deletes a resource.

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
    res, err := s.Captions.YoutubeCaptionsDelete(ctx, operations.YoutubeCaptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("cupiditate"),
        ID: "21879fce-953f-473e-b7fb-c7abd74dd39c",
        Key: sdk.String("aut"),
        OauthToken: sdk.String("voluptatibus"),
        OnBehalfOf: sdk.String("exercitationem"),
        OnBehalfOfContentOwner: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.YoutubeCaptionsDeleteSecurity{
        Option1: &operations.YoutubeCaptionsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeCaptionsDownload

Downloads a caption track.

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
    res, err := s.Captions.YoutubeCaptionsDownload(ctx, operations.YoutubeCaptionsDownloadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("alias"),
        ID: "a45626d4-3681-43f1-ad9f-5fce6c556146",
        Key: sdk.String("quo"),
        OauthToken: sdk.String("consectetur"),
        OnBehalfOf: sdk.String("recusandae"),
        OnBehalfOfContentOwner: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        Tfmt: sdk.String("eaque"),
        Tlang: sdk.String("a"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("aut"),
    }, operations.YoutubeCaptionsDownloadSecurity{
        Option1: &operations.YoutubeCaptionsDownloadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeCaptionsInsert

Inserts a new resource into this collection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Captions.YoutubeCaptionsInsert(ctx, operations.YoutubeCaptionsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: []byte("deleniti"),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("non"),
        OnBehalfOf: sdk.String("et"),
        OnBehalfOfContentOwner: sdk.String("dolorum"),
        Part: []string{
            "placeat",
            "velit",
            "eum",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        Sync: sdk.Bool(false),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("quas"),
    }, operations.YoutubeCaptionsInsertSecurity{
        Option1: &operations.YoutubeCaptionsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Caption != nil {
        // handle response
    }
}
```

## YoutubeCaptionsList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.Captions.YoutubeCaptionsList(ctx, operations.YoutubeCaptionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("quasi"),
        ID: []string{
            "numquam",
            "explicabo",
        },
        Key: sdk.String("provident"),
        OauthToken: sdk.String("ipsa"),
        OnBehalfOf: sdk.String("molestiae"),
        OnBehalfOfContentOwner: sdk.String("magnam"),
        Part: []string{
            "eius",
            "esse",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("fuga"),
        VideoID: "reprehenderit",
    }, operations.YoutubeCaptionsListSecurity{
        Option1: &operations.YoutubeCaptionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CaptionListResponse != nil {
        // handle response
    }
}
```

## YoutubeCaptionsUpdate

Updates an existing resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Captions.YoutubeCaptionsUpdate(ctx, operations.YoutubeCaptionsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("fugiat"),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("praesentium"),
        OnBehalfOf: sdk.String("quisquam"),
        OnBehalfOfContentOwner: sdk.String("veritatis"),
        Part: []string{
            "id",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        Sync: sdk.Bool(false),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("quo"),
    }, operations.YoutubeCaptionsUpdateSecurity{
        Option1: &operations.YoutubeCaptionsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Caption != nil {
        // handle response
    }
}
```
