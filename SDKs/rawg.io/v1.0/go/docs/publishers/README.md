# Publishers

### Available Operations

* [PublishersList](#publisherslist) - Get a list of video game publishers.
* [PublishersRead](#publishersread) - Get details of the publisher.

## PublishersList

Get a list of video game publishers.

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
    res, err := s.Publishers.PublishersList(ctx, operations.PublishersListRequest{
        Page: sdk.Int64(166847),
        PageSize: sdk.Int64(123820),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishersList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PublishersRead

Get details of the publisher.

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
    res, err := s.Publishers.PublishersRead(ctx, operations.PublishersReadRequest{
        ID: 779051,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublisherSingle != nil {
        // handle response
    }
}
```
