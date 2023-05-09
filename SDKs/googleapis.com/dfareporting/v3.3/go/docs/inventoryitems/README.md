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
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("ut"),
        ID: "536e9035-1bb9-4763-9720-b77a5a5365a7",
        Key: sdk.String("unde"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ab",
        ProjectID: "ipsam",
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("ab"),
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
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("alias"),
        Ids: []string{
            "neque",
            "commodi",
            "veritatis",
            "reiciendis",
        },
        InPlan: sdk.Bool(false),
        Key: sdk.String("debitis"),
        MaxResults: sdk.Int64(863598),
        OauthToken: sdk.String("blanditiis"),
        OrderID: []string{
            "minus",
            "nemo",
            "voluptates",
            "a",
        },
        PageToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nobis",
        ProjectID: "quaerat",
        QuotaUser: sdk.String("ullam"),
        SiteID: []string{
            "officiis",
        },
        SortField: operations.DfareportingInventoryItemsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingInventoryItemsListSortOrderEnumAscending.ToPointer(),
        Type: operations.DfareportingInventoryItemsListTypeEnumPlanningPlacementTypeCredit.ToPointer(),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("necessitatibus"),
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
