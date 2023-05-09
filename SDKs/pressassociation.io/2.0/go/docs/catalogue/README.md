# Catalogue

### Available Operations

* [GetCatalogue](#getcatalogue) - Catalogue Detail
* [GetCatalogueAsset](#getcatalogueasset) - Catalogue Asset Collection
* [GetCatalogueAssetDetail](#getcatalogueassetdetail) - Catalogue Asset Detail
* [ListCatalogues](#listcatalogues) - Catalogue Collection

## GetCatalogue

Return the content of the selected catalogue.

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
    res, err := s.Catalogue.GetCatalogue(ctx, operations.GetCatalogueRequest{
        CatalogueID: "nulla",
    }, operations.GetCatalogueSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCatalogue200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCatalogueAsset

Return the content of the selected catalogue.

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
    res, err := s.Catalogue.GetCatalogueAsset(ctx, operations.GetCatalogueAssetRequest{
        Aliases: sdk.Bool(false),
        CatalogueID: "corrupti",
        End: sdk.String("illum"),
        Limit: sdk.Float64(4236.55),
        Start: sdk.String("error"),
        Title: sdk.String("Miss"),
        UpdatedAfter: sdk.String("suscipit"),
    }, operations.GetCatalogueAssetSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCatalogueAsset200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCatalogueAssetDetail

Return the content of the selected catalogue asset.

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
    res, err := s.Catalogue.GetCatalogueAssetDetail(ctx, operations.GetCatalogueAssetDetailRequest{
        AssetID: "iure",
        CatalogueID: "magnam",
    }, operations.GetCatalogueAssetDetailSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCatalogueAssetDetail200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListCatalogues

Return a collection of Catalogues.

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
    res, err := s.Catalogue.ListCatalogues(ctx, operations.ListCataloguesSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCatalogues200ApplicationJSONObject != nil {
        // handle response
    }
}
```
