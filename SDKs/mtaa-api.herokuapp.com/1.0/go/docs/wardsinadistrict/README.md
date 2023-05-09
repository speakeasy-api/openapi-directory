# WardsInADistrict

### Available Operations

* [WardsInADistrict](#wardsinadistrict) - Returns all wards in a district

## WardsInADistrict

Returns all wards in a  specified district and district postcode

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
    res, err := s.WardsInADistrict.WardsInADistrict(ctx, operations.WardsInADistrictRequest{
        Country: "Netherlands Antilles",
        District: "deserunt",
        Region: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
