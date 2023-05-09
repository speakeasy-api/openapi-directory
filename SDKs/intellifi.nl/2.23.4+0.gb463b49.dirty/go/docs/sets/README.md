# Sets

## Overview

It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.
Sets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.


<https://intellifi.zendesk.com/hc/en-us/articles/360007824993>
### Available Operations

* [AddItemIdsList](#additemidslist) - Add items to an existing list
* [AddItemIdsSpotList](#additemidsspotlist) - Add spots to an existing list
* [AddItemList](#additemlist) - Create item list
* [AddSpotList](#addspotlist) - Create spot list
* [DeleteItemIDFromItemList](#deleteitemidfromitemlist) - Delete item from list
* [DeleteItemIDFromSpotList](#deleteitemidfromspotlist) - Delete spot from list
* [DeleteItemSet](#deleteitemset) - Delete item list
* [DeleteSpotList](#deletespotlist) - Delete spot list
* [GetItemListByID](#getitemlistbyid) - Get item list
* [GetItemListIdsByID](#getitemlistidsbyid) - Get item ids for this list
* [GetItemLists](#getitemlists) - Get all item lists
* [GetSpotListByID](#getspotlistbyid) - Info for a specific spot list
* [GetSpotListIdsByID](#getspotlistidsbyid) - Get spot ids for this list
* [GetSpotLists](#getspotlists) - Get all spot lists
* [UpdateItemList](#updateitemlist) - Update existing item list
* [UpdateSpotList](#updatespotlist) - Update existing spot list

## AddItemIdsList

Add items to an existing list

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
    res, err := s.Sets.AddItemIdsList(ctx, operations.AddItemIdsListRequest{
        RequestBody: []string{
            "5b7d6cbd7503c445552a1664",
            "5b7d6cbd7503c445552a1664",
            "5b7d6cbd7503c445552a1664",
            "5b7d6cbd7503c445552a1664",
        },
        ID: "b1ea4265-55ba-43c2-8744-ed53b88f3a8d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseListResource != nil {
        // handle response
    }
}
```

## AddItemIdsSpotList

Add spots to an existing list

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
    res, err := s.Sets.AddItemIdsSpotList(ctx, operations.AddItemIdsSpotListRequest{
        RequestBody: []string{
            "5b7d6cbd7503c445552a1664",
            "5b7d6cbd7503c445552a1664",
            "5b7d6cbd7503c445552a1664",
        },
        ID: "f5c0b2f2-fb7b-4194-a276-b26916fe1f08",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseListResource != nil {
        // handle response
    }
}
```

## AddItemList

Create item list

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
    res, err := s.Sets.AddItemList(ctx, shared.ItemListInput{
        Custom: sdk.String("maiores"),
        Label: sdk.String("Foo Bar"),
        Metadata: map[string]interface{}{
            "sed": "provident",
            "eius": "necessitatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## AddSpotList

Create spot list

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
    res, err := s.Sets.AddSpotList(ctx, shared.ItemListInput{
        Custom: sdk.String("ipsum"),
        Label: sdk.String("Foo Bar"),
        Metadata: map[string]interface{}{
            "occaecati": "quos",
            "voluptatibus": "tempora",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteItemIDFromItemList

Delete item from list

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
    res, err := s.Sets.DeleteItemIDFromItemList(ctx, operations.DeleteItemIDFromItemListRequest{
        ID: "47f603e8-b445-4e80-8a55-efd20e457e18",
        ItemID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseListResource != nil {
        // handle response
    }
}
```

## DeleteItemIDFromSpotList

Delete spot from list

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
    res, err := s.Sets.DeleteItemIDFromSpotList(ctx, operations.DeleteItemIDFromSpotListRequest{
        ID: "8b6a89fb-e3a5-4aa8-a482-4d0ab4075088",
        ItemID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseListResource != nil {
        // handle response
    }
}
```

## DeleteItemSet

Delete item list

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
    res, err := s.Sets.DeleteItemSet(ctx, operations.DeleteItemSetRequest{
        ID: "51862065-e904-4f3b-9194-b8abf603a79f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteSpotList

Delete spot list

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
    res, err := s.Sets.DeleteSpotList(ctx, operations.DeleteSpotListRequest{
        ID: "9dfe0ab7-da8a-450c-a187-f86bc173d689",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetItemListByID

Get item list

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
    res, err := s.Sets.GetItemListByID(ctx, operations.GetItemListByIDRequest{
        ID: "eee9526f-8d98-46e8-81ea-d4f0e1012563",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetItemListIdsByID

Get item ids for this list

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
    res, err := s.Sets.GetItemListIdsByID(ctx, operations.GetItemListIdsByIDRequest{
        ID: "f94e29e9-73e9-422a-97a1-5be3e060807e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfItemIds != nil {
        // handle response
    }
}
```

## GetItemLists

Get all item lists

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Sets.GetItemLists(ctx, operations.GetItemListsRequest{
        After: types.MustTimeFromString("2022-04-05T22:37:00.418Z"),
        AfterID: sdk.String("iure"),
        Before: sdk.String("necessitatibus"),
        BeforeID: sdk.String("ratione"),
        From: sdk.String("laborum"),
        FromID: sdk.String("distinctio"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Label: sdk.String("Foo Bar"),
        Limit: sdk.Int64(528940),
        Metadata: sdk.String("rem"),
        Populate: sdk.String("aliquam"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("ad"),
        Sha1: sdk.String("repellat"),
        Sort: sdk.String("alias"),
        Text: sdk.String("corporis"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(5973.03),
        Total: sdk.Int64(470649),
        Until: sdk.String("mollitia"),
        UntilID: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpotListByID

Info for a specific spot list

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
    res, err := s.Sets.GetSpotListByID(ctx, operations.GetSpotListByIDRequest{
        ID: "0ff2a54a-31e9-4476-8a3e-865e7956f925",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotList != nil {
        // handle response
    }
}
```

## GetSpotListIdsByID

Get spot ids for this list

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
    res, err := s.Sets.GetSpotListIdsByID(ctx, operations.GetSpotListIdsByIDRequest{
        ID: "1a5a9da6-60ff-457b-baad-4f9efc1b4512",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfItemIds != nil {
        // handle response
    }
}
```

## GetSpotLists

Get all spot lists

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Sets.GetSpotLists(ctx, operations.GetSpotListsRequest{
        After: types.MustTimeFromString("2022-10-24T09:55:31.770Z"),
        AfterID: sdk.String("perferendis"),
        Before: sdk.String("velit"),
        BeforeID: sdk.String("aspernatur"),
        From: sdk.String("eum"),
        FromID: sdk.String("eius"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Label: sdk.String("Foo Bar"),
        Limit: sdk.Int64(521996),
        Metadata: sdk.String("at"),
        Populate: sdk.String("impedit"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("eos"),
        Sort: sdk.String("sapiente"),
        Text: sdk.String("eum"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(1173.2),
        Total: sdk.Int64(325118),
        Until: sdk.String("beatae"),
        UntilID: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpotLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateItemList

Update existing item list

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
    res, err := s.Sets.UpdateItemList(ctx, operations.UpdateItemListRequest{
        ItemListInput: shared.ItemListInput{
            Custom: sdk.String("provident"),
            Label: sdk.String("Foo Bar"),
            Metadata: map[string]interface{}{
                "soluta": "hic",
                "illum": "eaque",
                "earum": "perspiciatis",
                "maiores": "debitis",
            },
        },
        ID: "6c632ca3-aed0-4117-9963-12fde0477177",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## UpdateSpotList

Update existing spot list

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
    res, err := s.Sets.UpdateSpotList(ctx, operations.UpdateSpotListRequest{
        SpotListInput: shared.SpotListInput{
            Custom: sdk.String("praesentium"),
            Label: sdk.String("Foo Bar"),
            Metadata: map[string]interface{}{
                "reiciendis": "vel",
                "architecto": "fugiat",
                "doloremque": "dicta",
                "odio": "tempora",
            },
        },
        ID: "76360a15-db6a-4660-a59a-1adeaab5851d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
