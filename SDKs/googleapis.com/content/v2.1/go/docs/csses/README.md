# Csses

### Available Operations

* [ContentCssesGet](#contentcssesget) - Retrieves a single CSS domain by ID.
* [ContentCssesList](#contentcsseslist) - Lists CSS domains affiliated with a CSS group.
* [ContentCssesUpdatelabels](#contentcssesupdatelabels) - Updates labels that are assigned to a CSS domain by its CSS group.

## ContentCssesGet

Retrieves a single CSS domain by ID.

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
    res, err := s.Csses.ContentCssesGet(ctx, operations.ContentCssesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        CSSDomainID: "vero",
        CSSGroupID: "doloremque",
        Fields: sdk.String("iure"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.ContentCssesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CSS != nil {
        // handle response
    }
}
```

## ContentCssesList

Lists CSS domains affiliated with a CSS group.

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
    res, err := s.Csses.ContentCssesList(ctx, operations.ContentCssesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        CSSGroupID: "ratione",
        Fields: sdk.String("laborum"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("voluptatum"),
        PageSize: sdk.Int64(523006),
        PageToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("alias"),
    }, operations.ContentCssesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCssesResponse != nil {
        // handle response
    }
}
```

## ContentCssesUpdatelabels

Updates labels that are assigned to a CSS domain by its CSS group.

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
    res, err := s.Csses.ContentCssesUpdatelabels(ctx, operations.ContentCssesUpdatelabelsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LabelIds: &shared.LabelIds{
            LabelIds: []string{
                "nihil",
                "mollitia",
                "voluptas",
            },
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        CSSDomainID: "dolores",
        CSSGroupID: "id",
        Fields: sdk.String("minima"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.ContentCssesUpdatelabelsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CSS != nil {
        // handle response
    }
}
```
