# InventoryItems

### Available Operations

* [DfareportingInventoryItemsGet](#dfareportinginventoryitemsget) - Gets one inventory item by ID.
* [DfareportingInventoryItemsList](#dfareportinginventoryitemslist) - Retrieves a list of inventory items, possibly filtered. This method supports paging.

## DfareportingInventoryItemsGet

Gets one inventory item by ID.

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
    res, err := s.InventoryItems.DfareportingInventoryItemsGet(ctx, operations.DfareportingInventoryItemsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("quo"),
        ID: "58d67d63-e4aa-4568-8645-79cfc6c0e503",
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vel",
        ProjectID: "praesentium",
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DfareportingInventoryItemsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryItem != nil {
        // handle response
    }
}
```

## DfareportingInventoryItemsList

Retrieves a list of inventory items, possibly filtered. This method supports paging.

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
    res, err := s.InventoryItems.DfareportingInventoryItemsList(ctx, operations.DfareportingInventoryItemsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("at"),
        Ids: []string{
            "quam",
            "nobis",
            "qui",
        },
        InPlan: sdk.Bool(false),
        Key: sdk.String("totam"),
        MaxResults: sdk.Int64(927771),
        OauthToken: sdk.String("atque"),
        OrderID: []string{
            "a",
            "culpa",
            "cum",
        },
        PageToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        ProjectID: "laudantium",
        QuotaUser: sdk.String("nisi"),
        SiteID: []string{
            "consequuntur",
            "aliquam",
            "dicta",
            "earum",
        },
        SortField: operations.DfareportingInventoryItemsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingInventoryItemsListSortOrderEnumAscending.ToPointer(),
        Type: operations.DfareportingInventoryItemsListTypeEnumPlanningPlacementTypeCredit.ToPointer(),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("ratione"),
    }, operations.DfareportingInventoryItemsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryItemsListResponse != nil {
        // handle response
    }
}
```
