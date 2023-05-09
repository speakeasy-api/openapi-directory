<!-- Start SDK Example Usage -->
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
    res, err := s.Developers.GetEvents(ctx, operations.GetEventsRequest{
        Company: sdk.String("Medhurst - Rau"),
        Deal: sdk.String("quibusdam"),
        Nexttoken: sdk.String("unde"),
        Queryexecutionid: sdk.String("nulla"),
        Site: sdk.String("corrupti"),
        Type: operations.GetEventsTypeEnumContacts.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRecords != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->