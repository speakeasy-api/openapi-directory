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
        Addon: []GetAddonEnum{
            operations.GetAddonEnumGeotargeting,
            operations.GetAddonEnumCountryGroupings,
            operations.GetAddonEnumCountryGroupings,
        },
        Format: operations.GetFormatEnumXML.ToPointer(),
        IP: "8.8.8.8",
        Key: "nulla",
        Lang: operations.GetLangEnumJa.ToPointer(),
        Package: operations.GetPackageEnumWs22.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->