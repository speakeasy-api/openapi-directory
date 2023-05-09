# EmailHistory

## Overview

Email history represents a single email that was sent using Fitbit Plus.

### Available Operations

* [FetchEmailHistories](#fetchemailhistories) - List email histories
* [FetchEmailHistory](#fetchemailhistory) - Get an email history

## FetchEmailHistories

Get a list of email histories

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
    res, err := s.EmailHistory.FetchEmailHistories(ctx, operations.FetchEmailHistoriesRequest{
        FilterEmailType: sdk.String("veritatis"),
        FilterReceiver: sdk.String("tempora"),
        FilterSender: sdk.String("dolor"),
        Sort: operations.FetchEmailHistoriesSortEnumSendTime.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchEmailHistoriesResponse != nil {
        // handle response
    }
}
```

## FetchEmailHistory

Get an email history by id

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
    res, err := s.EmailHistory.FetchEmailHistory(ctx, operations.FetchEmailHistoryRequest{
        ID: "10421813-d520-48ec-a7e2-53b668451c6c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchEmailHistoryResponse != nil {
        // handle response
    }
}
```
