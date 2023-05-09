# V1

### Available Operations

* [CreateTicket](#createticket) - Create a new abuse ticket
* [GetTicketInfo](#getticketinfo) - Return the abuse ticket data for a given ticket id
* [GetTickets](#gettickets) - List all abuse tickets ids that match user provided filters

## CreateTicket

Create a new abuse ticket

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CreateTicket(ctx, shared.AbuseTicketCreate{
        Info: sdk.String("corrupti"),
        InfoURL: sdk.String("illum"),
        Intentional: sdk.Bool(false),
        Proxy: sdk.String("vel"),
        Source: sdk.String("error"),
        Target: sdk.String("deserunt"),
        Type: shared.AbuseTicketCreateTypeEnumFraudWire.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTicketInfo

Return the abuse ticket data for a given ticket id

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
    res, err := s.V1.GetTicketInfo(ctx, operations.GetTicketInfoRequest{
        TicketID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTickets

List all abuse tickets ids that match user provided filters

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
    res, err := s.V1.GetTickets(ctx, operations.GetTicketsRequest{
        Closed: sdk.Bool(false),
        CreatedEnd: sdk.String("magnam"),
        CreatedStart: sdk.String("debitis"),
        Limit: sdk.Int64(56713),
        Offset: sdk.Int64(963663),
        SourceDomainOrIP: sdk.String("tempora"),
        Target: sdk.String("suscipit"),
        Type: operations.GetTicketsTypeEnumIPBlock.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
