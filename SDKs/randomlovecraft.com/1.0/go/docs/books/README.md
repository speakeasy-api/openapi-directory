# Books

### Available Operations

* [GetBooks](#getbooks) - List all books

## GetBooks

List all books

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
    res, err := s.Books.GetBooks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBooks200ApplicationJSONObject != nil {
        // handle response
    }
}
```
