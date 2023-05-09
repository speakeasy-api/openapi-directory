<!-- Start SDK Example Usage -->
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
    res, err := s.CreateSink(ctx, operations.CreateSinkCreateSinkRequest{
        Description: "corrupti",
        SinkConfiguration: "provident",
        SinkType: shared.SinkEnumSinkTypeEnumSegment,
    }, operations.CreateSinkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->