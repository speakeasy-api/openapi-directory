# Storelayoutpages

### Available Operations

* [AndroidenterpriseStorelayoutpagesDelete](#androidenterprisestorelayoutpagesdelete) - Deletes a store page.
* [AndroidenterpriseStorelayoutpagesGet](#androidenterprisestorelayoutpagesget) - Retrieves details of a store page.
* [AndroidenterpriseStorelayoutpagesInsert](#androidenterprisestorelayoutpagesinsert) - Inserts a new store page.
* [AndroidenterpriseStorelayoutpagesList](#androidenterprisestorelayoutpageslist) - Retrieves the details of all pages in the store.
* [AndroidenterpriseStorelayoutpagesUpdate](#androidenterprisestorelayoutpagesupdate) - Updates the content of a store page.

## AndroidenterpriseStorelayoutpagesDelete

Deletes a store page.

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
    res, err := s.Storelayoutpages.AndroidenterpriseStorelayoutpagesDelete(ctx, operations.AndroidenterpriseStorelayoutpagesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        EnterpriseID: "laborum",
        Fields: sdk.String("placeat"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("voluptatibus"),
        PageID: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.AndroidenterpriseStorelayoutpagesDeleteSecurity{
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

## AndroidenterpriseStorelayoutpagesGet

Retrieves details of a store page.

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
    res, err := s.Storelayoutpages.AndroidenterpriseStorelayoutpagesGet(ctx, operations.AndroidenterpriseStorelayoutpagesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        EnterpriseID: "inventore",
        Fields: sdk.String("fugit"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("quae"),
        PageID: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("eum"),
    }, operations.AndroidenterpriseStorelayoutpagesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StorePage != nil {
        // handle response
    }
}
```

## AndroidenterpriseStorelayoutpagesInsert

Inserts a new store page.

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
    res, err := s.Storelayoutpages.AndroidenterpriseStorelayoutpagesInsert(ctx, operations.AndroidenterpriseStorelayoutpagesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StorePage: &shared.StorePage{
            ID: sdk.String("8dc2f615-199e-4bfd-8e9f-e6c632ca3aed"),
            Link: []string{
                "quasi",
            },
            Name: []shared.LocalizedText{
                shared.LocalizedText{
                    Locale: sdk.String("ducimus"),
                    Text: sdk.String("natus"),
                },
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        EnterpriseID: "quasi",
        Fields: sdk.String("magni"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.AndroidenterpriseStorelayoutpagesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StorePage != nil {
        // handle response
    }
}
```

## AndroidenterpriseStorelayoutpagesList

Retrieves the details of all pages in the store.

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
    res, err := s.Storelayoutpages.AndroidenterpriseStorelayoutpagesList(ctx, operations.AndroidenterpriseStorelayoutpagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        EnterpriseID: "esse",
        Fields: sdk.String("praesentium"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.AndroidenterpriseStorelayoutpagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreLayoutPagesListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseStorelayoutpagesUpdate

Updates the content of a store page.

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
    res, err := s.Storelayoutpages.AndroidenterpriseStorelayoutpagesUpdate(ctx, operations.AndroidenterpriseStorelayoutpagesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StorePage: &shared.StorePage{
            ID: sdk.String("17476360-a15d-4b6a-a606-59a1adeaab58"),
            Link: []string{
                "vitae",
                "repellendus",
            },
            Name: []shared.LocalizedText{
                shared.LocalizedText{
                    Locale: sdk.String("quo"),
                    Text: sdk.String("ex"),
                },
                shared.LocalizedText{
                    Locale: sdk.String("ut"),
                    Text: sdk.String("ad"),
                },
            },
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestias"),
        EnterpriseID: "cum",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("voluptatum"),
        PageID: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("est"),
    }, operations.AndroidenterpriseStorelayoutpagesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StorePage != nil {
        // handle response
    }
}
```
