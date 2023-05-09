# Rfq

### Available Operations

* [GetRfq](#getrfq) - Get a specific Rfq
* [GetRfqList](#getrfqlist) - List the rfqs

## GetRfq

Get a specific Rfq

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
    res, err := s.Rfq.GetRfq(ctx, operations.GetRfqRequest{
        ProjectID: "eaque",
        RfqID: "quis",
        WorkgroupID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetRfqList

List the rfqs

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
    res, err := s.Rfq.GetRfqList(ctx, operations.GetRfqListRequest{
        ProjectID: "eos",
        WorkgroupID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
