# CustomerSegments

### Available Operations

* [ListCustomerSegments](#listcustomersegments) - ListCustomerSegments
* [RetrieveCustomerSegment](#retrievecustomersegment) - RetrieveCustomerSegment

## ListCustomerSegments

Retrieves the list of customer segments of a business.

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
    res, err := s.CustomerSegments.ListCustomerSegments(ctx, operations.ListCustomerSegmentsRequest{
        Cursor: sdk.String("sed"),
        Limit: sdk.Int64(758366),
    }, operations.ListCustomerSegmentsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerSegmentsResponse != nil {
        // handle response
    }
}
```

## RetrieveCustomerSegment

Retrieves a specific customer segment as identified by the `segment_id` value.

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
    res, err := s.CustomerSegments.RetrieveCustomerSegment(ctx, operations.RetrieveCustomerSegmentRequest{
        SegmentID: "nulla",
    }, operations.RetrieveCustomerSegmentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveCustomerSegmentResponse != nil {
        // handle response
    }
}
```
