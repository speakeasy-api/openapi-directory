# Catalog

### Available Operations

* [AddToCollection](#addtocollection) - Add items to catalog collections
* [CreateCollection](#createcollection) - Create catalog collections
* [DeleteCollection](#deletecollection) - Delete catalog collections
* [DeleteFromCollection](#deletefromcollection) - Remove items from catalog collection
* [GetCollections](#getcollections) - List catalog collections
* [SearchCatalog](#searchcatalog) - Search catalogs for assets
* [UpdateCollection](#updatecollection) - Update collection metadata

## AddToCollection

This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.

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
    res, err := s.Catalog.AddToCollection(ctx, operations.AddToCollectionRequest{
        CreateCatalogCollectionItems: shared.CreateCatalogCollectionItems{
            Items: []shared.CreateCatalogCollectionItem{
                shared.CreateCatalogCollectionItem{
                    Asset: shared.CreateCatalogCollectionItemAsset{
                        ID: sdk.String("429cdb1a-8422-4bb6-b9d2-322715bf0cbb"),
                        Type: "et",
                    },
                },
            },
        },
        CollectionID: "saepe",
    }, operations.AddToCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogCollection != nil {
        // handle response
    }
}
```

## CreateCollection

This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Catalog.CreateCollection(ctx, shared.CreateCatalogCollection{
        Items: []shared.CreateCatalogCollectionItem{
            shared.CreateCatalogCollectionItem{
                Asset: shared.CreateCatalogCollectionItemAsset{
                    ID: sdk.String("1b8b90f3-443a-4110-8e0a-dcf4b921879f"),
                    Type: "quisquam",
                },
            },
        },
        Name: "Arturo Hauck",
        Visibility: shared.CreateCatalogCollectionVisibilityEnumPrivate.ToPointer(),
    }, operations.CreateCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogCollection != nil {
        // handle response
    }
}
```

## DeleteCollection

This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Catalog.DeleteCollection(ctx, operations.DeleteCollectionRequest{
        CollectionID: "consectetur",
    }, operations.DeleteCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFromCollection

This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.

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
    res, err := s.Catalog.DeleteFromCollection(ctx, operations.DeleteFromCollectionRequest{
        RemoveCatalogCollectionItems: shared.RemoveCatalogCollectionItems{
            Items: []shared.RemoveCatalogCollectionItem{
                shared.RemoveCatalogCollectionItem{
                    ID: "f7fbc7ab-d74d-4d39-80f5-d2cff7c70a45",
                },
                shared.RemoveCatalogCollectionItem{
                    ID: "626d4368-13f1-46d9-b5fc-e6c556146c3e",
                },
                shared.RemoveCatalogCollectionItem{
                    ID: "250fb008-c42e-4141-aac3-66c8dd6b1442",
                },
                shared.RemoveCatalogCollectionItem{
                    ID: "90747477-8a7b-4d46-ad28-c10ab3cdca42",
                },
            },
        },
        CollectionID: "voluptas",
    }, operations.DeleteFromCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogCollection != nil {
        // handle response
    }
}
```

## GetCollections

This endpoint returns a list of catalog collections.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Catalog.GetCollections(ctx, operations.GetCollectionsRequest{
        Page: sdk.Int64(69859),
        PerPage: sdk.Int64(587600),
        Shared: sdk.Bool(false),
        Sort: operations.GetCollectionsSortEnumNewest.ToPointer(),
    }, operations.GetCollectionsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogCollectionDataList != nil {
        // handle response
    }
}
```

## SearchCatalog

This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Catalog.SearchCatalog(ctx, operations.SearchCatalogRequest{
        AssetType: []SearchCatalogAssetTypeEnum{
            operations.SearchCatalogAssetTypeEnumEditorialVideo,
            operations.SearchCatalogAssetTypeEnumAudio,
        },
        CollectionID: []string{
            "sequi",
        },
        Page: sdk.Int64(779192),
        PerPage: sdk.Int64(459856),
        Query: sdk.String("recusandae"),
        Sort: operations.SearchCatalogSortEnumNewest.ToPointer(),
    }, operations.SearchCatalogSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogCollectionItemDataList != nil {
        // handle response
    }
}
```

## UpdateCollection

This endpoint updates the metadata of a catalog collection.

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
    res, err := s.Catalog.UpdateCollection(ctx, operations.UpdateCollectionRequest{
        UpdateCatalogCollection: shared.UpdateCatalogCollection{
            CoverAsset: &shared.UpdateCatalogCollectionCoverAsset{
                ID: "bc7178e4-796f-42a7-8c68-8282aa482562",
            },
            Name: sdk.String("Eugene Dibbert"),
            Visibility: shared.UpdateCatalogCollectionVisibilityEnumPublic.ToPointer(),
        },
        CollectionID: "atque",
    }, operations.UpdateCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogCollection != nil {
        // handle response
    }
}
```
