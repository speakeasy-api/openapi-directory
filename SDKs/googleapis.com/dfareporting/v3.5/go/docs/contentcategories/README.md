# ContentCategories

### Available Operations

* [DfareportingContentCategoriesDelete](#dfareportingcontentcategoriesdelete) - Deletes an existing content category.
* [DfareportingContentCategoriesGet](#dfareportingcontentcategoriesget) - Gets one content category by ID.
* [DfareportingContentCategoriesInsert](#dfareportingcontentcategoriesinsert) - Inserts a new content category.
* [DfareportingContentCategoriesList](#dfareportingcontentcategorieslist) - Retrieves a list of content categories, possibly filtered. This method supports paging.
* [DfareportingContentCategoriesPatch](#dfareportingcontentcategoriespatch) - Updates an existing content category. This method supports patch semantics.
* [DfareportingContentCategoriesUpdate](#dfareportingcontentcategoriesupdate) - Updates an existing content category.

## DfareportingContentCategoriesDelete

Deletes an existing content category.

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
    res, err := s.ContentCategories.DfareportingContentCategoriesDelete(ctx, operations.DfareportingContentCategoriesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("perferendis"),
        ID: "fb387429-0d33-4656-9eca-16ef89451bd7",
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officiis",
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.DfareportingContentCategoriesDeleteSecurity{
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

## DfareportingContentCategoriesGet

Gets one content category by ID.

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
    res, err := s.ContentCategories.DfareportingContentCategoriesGet(ctx, operations.DfareportingContentCategoriesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("possimus"),
        ID: "a1fad355-12f0-46d4-a5b7-2f0f548568a0",
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "labore",
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.DfareportingContentCategoriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentCategory != nil {
        // handle response
    }
}
```

## DfareportingContentCategoriesInsert

Inserts a new content category.

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
    res, err := s.ContentCategories.DfareportingContentCategoriesInsert(ctx, operations.DfareportingContentCategoriesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ContentCategory: &shared.ContentCategory{
            AccountID: sdk.String("architecto"),
            ID: sdk.String("quibusdam"),
            Kind: sdk.String("autem"),
            Name: sdk.String("Randolph McGlynn"),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "amet",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.DfareportingContentCategoriesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentCategory != nil {
        // handle response
    }
}
```

## DfareportingContentCategoriesList

Retrieves a list of content categories, possibly filtered. This method supports paging.

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
    res, err := s.ContentCategories.DfareportingContentCategoriesList(ctx, operations.DfareportingContentCategoriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("quis"),
        Ids: []string{
            "cumque",
            "vero",
            "a",
            "tenetur",
        },
        Key: sdk.String("ipsam"),
        MaxResults: sdk.Int64(798122),
        OauthToken: sdk.String("facilis"),
        PageToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illo",
        QuotaUser: sdk.String("reiciendis"),
        SearchString: sdk.String("debitis"),
        SortField: operations.DfareportingContentCategoriesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingContentCategoriesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DfareportingContentCategoriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentCategoriesListResponse != nil {
        // handle response
    }
}
```

## DfareportingContentCategoriesPatch

Updates an existing content category. This method supports patch semantics.

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
    res, err := s.ContentCategories.DfareportingContentCategoriesPatch(ctx, operations.DfareportingContentCategoriesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ContentCategory: &shared.ContentCategory{
            AccountID: sdk.String("atque"),
            ID: sdk.String("animi"),
            Kind: sdk.String("eius"),
            Name: sdk.String("Iris Schimmel MD"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("corrupti"),
        ID: "bc2caba8-da41-427d-9597-ff4711aa1bc7",
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "atque",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DfareportingContentCategoriesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentCategory != nil {
        // handle response
    }
}
```

## DfareportingContentCategoriesUpdate

Updates an existing content category.

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
    res, err := s.ContentCategories.DfareportingContentCategoriesUpdate(ctx, operations.DfareportingContentCategoriesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ContentCategory: &shared.ContentCategory{
            AccountID: sdk.String("impedit"),
            ID: sdk.String("ducimus"),
            Kind: sdk.String("incidunt"),
            Name: sdk.String("Javier Kuphal"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "mollitia",
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DfareportingContentCategoriesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentCategory != nil {
        // handle response
    }
}
```
