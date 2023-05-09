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
    res, err := s.Conversion.Convert(ctx, operations.ConvertRequestBody{
        Filename: sdk.String("corrupti"),
        Source: sdk.String("provident"),
        Validate: operations.ConvertRequestBodyValidateEnumOn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Convert200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->