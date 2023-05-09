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
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("molestiae"),
        ID: "aa2b2411-3695-4d1e-a698-fcc4596217c2",
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestiae",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("eum"),
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
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("ad"),
        ID: "4038bfb5-971e-4981-9055-7389cedbac7f",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolor",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("unde"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ContentCategory: &shared.ContentCategory{
            AccountID: sdk.String("pariatur"),
            ID: sdk.String("vel"),
            Kind: sdk.String("laboriosam"),
            Name: sdk.String("Roosevelt Cummings"),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("autem"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rerum",
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("id"),
        Ids: []string{
            "explicabo",
        },
        Key: sdk.String("accusantium"),
        MaxResults: sdk.Int64(432280),
        OauthToken: sdk.String("nesciunt"),
        PageToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestias",
        QuotaUser: sdk.String("atque"),
        SearchString: sdk.String("explicabo"),
        SortField: operations.DfareportingContentCategoriesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingContentCategoriesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("sequi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ContentCategory: &shared.ContentCategory{
            AccountID: sdk.String("libero"),
            ID: sdk.String("ab"),
            Kind: sdk.String("alias"),
            Name: sdk.String("Michelle Johnston"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("dolores"),
        ID: "1ec2053b-7493-466a-88ee-0f2bf19588d4",
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("neque"),
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
            AccountID: sdk.String("saepe"),
            ID: sdk.String("nobis"),
            Kind: sdk.String("est"),
            Name: sdk.String("Faye Kreiger"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "numquam",
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("doloribus"),
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
