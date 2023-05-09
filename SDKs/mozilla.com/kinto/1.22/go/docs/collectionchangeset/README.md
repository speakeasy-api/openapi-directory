# CollectionChangeset

### Available Operations

* [GetCollectionChangeset](#getcollectionchangeset)

## GetCollectionChangeset

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
    res, err := s.CollectionChangeset.GetCollectionChangeset(ctx, operations.GetCollectionChangesetRequest{
        Expected: "et",
        Limit: sdk.Int64(569965),
        Since: sdk.String("ullam"),
        Bid: "provident",
        Bucket: sdk.String("quos"),
        Cid: "sint",
        Collection: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
