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
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("voluptates"),
        ID: "3c2059c9-c3f5-467e-8e25-2765b1d62fcd",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "debitis",
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("consequatur"),
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
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("quod"),
        ID: "e2239e8f-25cd-40d1-9d95-9f439e39266c",
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "error",
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("molestiae"),
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
            AccountID: sdk.String("laborum"),
            ID: sdk.String("odit"),
            Kind: sdk.String("rerum"),
            Name: sdk.String("Mr. Megan Botsford"),
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("et"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquid",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("repellat"),
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
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("perspiciatis"),
        Ids: []string{
            "dolores",
            "dicta",
        },
        Key: sdk.String("molestiae"),
        MaxResults: sdk.Int64(804685),
        OauthToken: sdk.String("dolores"),
        PageToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("molestiae"),
        SearchString: sdk.String("aliquid"),
        SortField: operations.DfareportingContentCategoriesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingContentCategoriesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("velit"),
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
            AccountID: sdk.String("aspernatur"),
            ID: sdk.String("ad"),
            Kind: sdk.String("incidunt"),
            Name: sdk.String("Sylvia Littel"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("molestiae"),
        ID: "1e981905-5738-49ce-9bac-7fda39594d66",
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("aliquam"),
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
            AccountID: sdk.String("aut"),
            ID: sdk.String("autem"),
            Kind: sdk.String("dolorem"),
            Name: sdk.String("Luz Morar"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "explicabo",
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("nesciunt"),
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
