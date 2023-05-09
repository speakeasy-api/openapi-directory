# Quote

### Available Operations

* [GetQuote](#getquote) - Get a specific quote of project
* [GetQuoteList](#getquotelist) - List the quotes
* [GetQuoteStateList](#getquotestatelist) - List the quote states
* [GetV1WorkgroupsWorkgroupIDQuotes](#getv1workgroupsworkgroupidquotes) - List the quotes of workgroup level
* [PutQuoteJSON](#putquotejson) - Accept / Reject a Quote
* [PutQuoteRaw](#putquoteraw) - Accept / Reject a Quote

## GetQuote

Get a specific quote of project

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
    res, err := s.Quote.GetQuote(ctx, operations.GetQuoteRequest{
        ProjectID: "illum",
        QuoteID: "pariatur",
        WorkgroupID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuoteList

List the quotes

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
    res, err := s.Quote.GetQuoteList(ctx, operations.GetQuoteListRequest{
        ProjectID: "ea",
        QuoteStateIDUseFiltersEqualQuoteStateID111111: sdk.String("excepturi"),
        WorkgroupID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuoteStateList

List the quote states

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
    res, err := s.Quote.GetQuoteStateList(ctx, operations.GetQuoteStateListRequest{
        WorkgroupID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV1WorkgroupsWorkgroupIDQuotes

List the quotes of workgroup level

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
    res, err := s.Quote.GetV1WorkgroupsWorkgroupIDQuotes(ctx, operations.GetV1WorkgroupsWorkgroupIDQuotesRequest{
        QuoteStateIDUseFiltersEqualQuoteStateID111111: sdk.String("accusantium"),
        WorkgroupID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutQuoteJSON

Accept / Reject a Quote

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
    res, err := s.Quote.PutQuoteJSON(ctx, operations.PutQuoteJSONRequest{
        QuotePutPersistVO: &shared.QuotePutPersistVO{
            Action: sdk.String("sample action"),
            PoNumber: sdk.String("sample po_number"),
            QuoteID: sdk.Int64(1),
            StateChangeComments: sdk.String("sample state_change_comments"),
        },
        ProjectID: "maiores",
        QuoteID: "quidem",
        WorkgroupID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutQuoteRaw

Accept / Reject a Quote

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
    res, err := s.Quote.PutQuoteRaw(ctx, operations.PutQuoteRawRequest{
        RequestBody: []byte("voluptate"),
        ProjectID: "autem",
        QuoteID: "nam",
        WorkgroupID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
