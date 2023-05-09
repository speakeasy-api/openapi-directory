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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsFormat(ctx, operations.GetMapVersionNumberCopyrightsFormatRequest{
        Callback: sdk.String("corrupti"),
        Format: operations.GetMapVersionNumberCopyrightsFormatFormatEnumJsonp,
        VersionNumber: operations.GetMapVersionNumberCopyrightsFormatVersionNumberEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->