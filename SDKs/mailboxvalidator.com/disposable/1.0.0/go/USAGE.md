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
    res, err := s.GetV1EmailDisposable(ctx, operations.GetV1EmailDisposableRequest{
        Email: "Larue_Rau85@yahoo.com",
        Format: operations.GetV1EmailDisposableFormatEnumXML.ToPointer(),
        Key: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1EmailDisposable200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->