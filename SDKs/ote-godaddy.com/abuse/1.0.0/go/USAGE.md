<!-- Start SDK Example Usage -->
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
        InfoURL: sdk.String("provident"),
        Intentional: sdk.Bool(false),
        Proxy: sdk.String("distinctio"),
        Source: sdk.String("quibusdam"),
        Target: sdk.String("unde"),
        Type: shared.AbuseTicketCreateTypeEnumPhishing.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->