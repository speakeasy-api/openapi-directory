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
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("assumenda"),
        ID: "daa30b7b-9144-49ae-a9c0-88d418bb7180",
        Key: sdk.String("ut"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "modi",
        ProjectID: "dolores",
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("ipsam"),
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
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("quis"),
        Ids: []string{
            "ratione",
            "in",
            "nihil",
            "dolorum",
        },
        InPlan: sdk.Bool(false),
        Key: sdk.String("quisquam"),
        MaxResults: sdk.Int64(374148),
        OauthToken: sdk.String("impedit"),
        OrderID: []string{
            "nam",
            "ducimus",
            "officiis",
        },
        PageToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "velit",
        ProjectID: "nam",
        QuotaUser: sdk.String("suscipit"),
        SiteID: []string{
            "sequi",
            "optio",
            "minima",
        },
        SortField: operations.DfareportingInventoryItemsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingInventoryItemsListSortOrderEnumAscending.ToPointer(),
        Type: operations.DfareportingInventoryItemsListTypeEnumPlanningPlacementTypeRegular.ToPointer(),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("quis"),
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
