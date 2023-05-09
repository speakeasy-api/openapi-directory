# Country

### Available Operations

* [GetCountryList](#getcountrylist) - List all countries

## GetCountryList

List all countries

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Country.GetCountryList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
