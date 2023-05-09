# Kvpairs

## Overview

The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `blobs` resource.


### Available Operations

* [AddKvPairs](#addkvpairs) - Create key-value pair
* [DeleteKvPair](#deletekvpair) - Delete key-value pair
* [GetKvPairs](#getkvpairs) - Get all key-value pairs
* [GetKvPairsByID](#getkvpairsbyid) - Get key-value pair
* [UpdateKvPair](#updatekvpair) - Update existing Key-value pair

## AddKvPairs

Create key-value pair

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
    res, err := s.Kvpairs.AddKvPairs(ctx, shared.KeyValuePairInput{
        KvKey: sdk.String("foo"),
        KvValue: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteKvPair

Delete key-value pair

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
    res, err := s.Kvpairs.DeleteKvPair(ctx, operations.DeleteKvPairRequest{
        ID: "e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetKvPairs

Get all key-value pairs

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
    res, err := s.Kvpairs.GetKvPairs(ctx, operations.GetKvPairsRequest{
        After: types.MustTimeFromString("2022-04-24T18:16:06.669Z"),
        AfterID: sdk.String("tempore"),
        Before: sdk.String("accusamus"),
        BeforeID: sdk.String("numquam"),
        From: sdk.String("enim"),
        FromID: sdk.String("dolorem"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        KvKey: sdk.String("sapiente"),
        Limit: sdk.Int64(518201),
        Populate: sdk.String("nihil"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("sit"),
        Sort: sdk.String("expedita"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(2074.7),
        Until: sdk.String("sed"),
        UntilID: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetKvPairs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetKvPairsByID

Get key-value pair

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
    res, err := s.Kvpairs.GetKvPairsByID(ctx, operations.GetKvPairsByIDRequest{
        ID: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyValuePair != nil {
        // handle response
    }
}
```

## UpdateKvPair

Update existing Key-value pair

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
    res, err := s.Kvpairs.UpdateKvPair(ctx, operations.UpdateKvPairRequest{
        KeyValuePairUpdate: shared.KeyValuePairUpdate{
            KvValue: sdk.String("hic"),
        },
        ID: "0cbb1e31-b8b9-40f3-843a-1108e0adcf4b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
