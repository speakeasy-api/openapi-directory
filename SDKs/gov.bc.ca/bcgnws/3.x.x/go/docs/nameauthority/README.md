# NameAuthority

### Available Operations

* [GetNameAuthorities](#getnameauthorities) - Get all name authorities

## GetNameAuthorities

Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)

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
    res, err := s.NameAuthority.GetNameAuthorities(ctx, operations.GetNameAuthoritiesRequest{
        OutputFormat: operations.GetNameAuthoritiesOutputFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
