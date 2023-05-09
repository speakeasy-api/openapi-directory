# Items

## Overview

The `items` resource contains data about things that can be tracked using the Brain.
When an item is detected for the first time by a device connected to the Brain, it will be added to this resource.
It will then be updated with information about where the item currently is, or where it has been seen for the last time.


<https://intellifi.zendesk.com/hc/en-us/articles/360007502554>
### Available Operations

* [AddItem](#additem) - Create item
* [DeleteItem](#deleteitem) - Delete item
* [GetItemByID](#getitembyid) - Get item
* [GetItems](#getitems) - Get all items
* [UpdateItem](#updateitem) - Update existing item

## AddItem

Create item

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Items.AddItem(ctx, shared.Item{})
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteItem

Delete item

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Items.DeleteItem(ctx, operations.DeleteItemRequest{
        ID: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetItemByID

Get item

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Items.GetItemByID(ctx, operations.GetItemByIDRequest{
        ID: "7dfb14cd-66ae-4395-afb9-ba88f3a66997",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Item != nil {
        // handle response
    }
}
```

## GetItems

Get all items

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Items.GetItems(ctx, operations.GetItemsRequest{
        After: types.MustTimeFromString("2022-07-13T09:38:30.777Z"),
        AfterCode: sdk.String("magnam"),
        AfterID: sdk.String("distinctio"),
        Before: sdk.String("id"),
        BeforeCode: sdk.String("labore"),
        BeforeID: sdk.String("labore"),
        CodeHex: sdk.String("deadbeef"),
        From: sdk.String("suscipit"),
        FromCode: sdk.String("natus"),
        FromID: sdk.String("nobis"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        IsPresent: sdk.Bool(false),
        Label: sdk.String("Foo Bar"),
        Limit: sdk.Int64(428769),
        Location: sdk.String("5b7d6cbd7503c445552a1664"),
        Metadata: sdk.String("vero"),
        MoveCount: sdk.Int64(4523),
        Populate: sdk.String("aspernatur"),
        Protocol: shared.ItemProtocolEnumEpcgen2.ToPointer(),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("architecto"),
        Sets: sdk.String("5b7d6cbd7503c445552a1664"),
        Sort: sdk.String("magnam"),
        Technology: shared.TechnologyEnumRfid.ToPointer(),
        Text: sdk.String("et"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeLastPresent: sdk.String("excepturi"),
        TimeMoved: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(3540.47),
        Type: shared.ItemTypeEnumTag.ToPointer(),
        Until: sdk.String("provident"),
        UntilCode: sdk.String("quos"),
        UntilID: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItems200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateItem

Update existing item

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Items.UpdateItem(ctx, operations.UpdateItemRequest{
        ItemUpdate: shared.ItemUpdate{
            ConfigRequest: map[string]interface{}{
                "mollitia": "reiciendis",
            },
            Custom: sdk.String("mollitia"),
            Label: sdk.String("Foo Bar"),
            LocationRequest: sdk.String("5b7d6cbd7503c445552a1664"),
            Metadata: map[string]interface{}{
                "eum": "dolor",
                "necessitatibus": "odit",
            },
        },
        ID: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
