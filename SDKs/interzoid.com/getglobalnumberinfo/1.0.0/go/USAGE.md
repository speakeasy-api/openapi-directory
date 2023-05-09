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
    res, err := s.GlobalPhoneNumberInformation.Getglobalnumberinfo(ctx, operations.GetglobalnumberinfoRequest{
        Intlnumber: "corrupti",
        License: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobalnumberinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->