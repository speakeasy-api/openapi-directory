# GlobalPhoneNumberInformation

### Available Operations

* [Getglobalnumberinfo](#getglobalnumberinfo) - Get demographic information for a global telephone number

## Getglobalnumberinfo

Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

### Example Usage

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
        Intlnumber: "distinctio",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobalnumberinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
