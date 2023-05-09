# DetailedZipCodeInformation

### Available Operations

* [Getzipcodeinfo](#getzipcodeinfo) - Gets detailed zip code information

## Getzipcodeinfo

For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.

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
    res, err := s.DetailedZipCodeInformation.Getzipcodeinfo(ctx, operations.GetzipcodeinfoRequest{
        License: "distinctio",
        Zip: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getzipcodeinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
