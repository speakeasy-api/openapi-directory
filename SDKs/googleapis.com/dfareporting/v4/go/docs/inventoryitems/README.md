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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("mollitia"),
        ID: "a30b7b91-449a-4e69-8088-d418bb71804f",
        Key: sdk.String("modi"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ratione",
        ProjectID: "pariatur",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("adipisci"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("ratione"),
        Ids: []string{
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
