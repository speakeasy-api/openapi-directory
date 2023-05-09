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
    res, err := s.Get(ctx, operations.GetRequest{
        Format: operations.GetFormatEnumXML.ToPointer(),
        IP: "provident",
        Key: "distinctio",
        Package: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200TextHTMLString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->