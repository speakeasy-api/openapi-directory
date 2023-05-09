# Sizes

### Available Operations

* [DfareportingSizesGet](#dfareportingsizesget) - Gets one size by ID.
* [DfareportingSizesInsert](#dfareportingsizesinsert) - Inserts a new size.
* [DfareportingSizesList](#dfareportingsizeslist) - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

## DfareportingSizesGet

Gets one size by ID.

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
    res, err := s.Sizes.DfareportingSizesGet(ctx, operations.DfareportingSizesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("laborum"),
        ID: "ee9064a0-bdeb-444f-80aa-a8c22b908256",
        Key: sdk.String("libero"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iure",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DfareportingSizesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Size != nil {
        // handle response
    }
}
```

## DfareportingSizesInsert

Inserts a new size.

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
    res, err := s.Sizes.DfareportingSizesInsert(ctx, operations.DfareportingSizesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Size: &shared.Size{
            Height: sdk.Int(910670),
            Iab: sdk.Bool(false),
            ID: sdk.String("cum"),
            Kind: sdk.String("ea"),
            Width: sdk.Int(10600),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsam",
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.DfareportingSizesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Size != nil {
        // handle response
    }
}
```

## DfareportingSizesList

Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

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
    res, err := s.Sizes.DfareportingSizesList(ctx, operations.DfareportingSizesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("expedita"),
        Height: sdk.Int64(581133),
        IabStandard: sdk.Bool(false),
        Ids: []string{
            "doloremque",
            "recusandae",
        },
        Key: sdk.String("a"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "impedit",
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quasi"),
        Width: sdk.Int64(642770),
    }, operations.DfareportingSizesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SizesListResponse != nil {
        // handle response
    }
}
```
