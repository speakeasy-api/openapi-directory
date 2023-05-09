# TimeCard

### Available Operations

* [GetMyTimeCard](#getmytimecard) - Get a specific my time cards
* [GetMyTimeCardList](#getmytimecardlist) - List my time cards
* [GetReceivedTimeCard](#getreceivedtimecard) - List a specific received time cards
* [GetReceivedTimeCardList](#getreceivedtimecardlist) - List received time cards

## GetMyTimeCard

Get a specific my time cards

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
    res, err := s.TimeCard.GetMyTimeCard(ctx, operations.GetMyTimeCardRequest{
        TimeCardID: "vero",
        WorkgroupID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMyTimeCardList

List my time cards

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
    res, err := s.TimeCard.GetMyTimeCardList(ctx, operations.GetMyTimeCardListRequest{
        WorkgroupID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetReceivedTimeCard

List a specific received time cards

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
    res, err := s.TimeCard.GetReceivedTimeCard(ctx, operations.GetReceivedTimeCardRequest{
        TimeCardID: "hic",
        WorkgroupID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetReceivedTimeCardList

List received time cards

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
    res, err := s.TimeCard.GetReceivedTimeCardList(ctx, operations.GetReceivedTimeCardListRequest{
        WorkgroupID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
