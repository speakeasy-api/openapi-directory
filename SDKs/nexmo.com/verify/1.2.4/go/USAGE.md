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
    res, err := s.VerifyCheck(ctx, operations.VerifyCheckRequest{
        CheckRequest: shared.CheckRequest{
            APIKey: "abcd1234",
            APISecret: "Sup3rS3cr3t!!",
            Code: "1234",
            IPAddress: sdk.String("123.0.0.255"),
            RequestID: "abcdef0123456789abcdef0123456789",
        },
        Format: shared.FormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyCheck200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->