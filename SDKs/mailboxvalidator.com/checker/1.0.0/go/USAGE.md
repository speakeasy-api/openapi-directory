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
    res, err := s.GetV1EmailFree(ctx, operations.GetV1EmailFreeRequest{
        Email: "Larue_Rau85@yahoo.com",
        Format: operations.GetV1EmailFreeFormatEnumXML.ToPointer(),
        Key: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1EmailFree200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->