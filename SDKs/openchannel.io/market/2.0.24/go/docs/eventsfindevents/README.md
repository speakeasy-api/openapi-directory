# EventsFindEvents

### Available Operations

* [GetEventsEventID](#geteventseventid) - Returns an event

## GetEventsEventID

- Results are returned for the market provided within the basic authentication credentials


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.EventsFindEvents.GetEventsEventID(ctx, operations.GetEventsEventIDRequest{
        EventID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
