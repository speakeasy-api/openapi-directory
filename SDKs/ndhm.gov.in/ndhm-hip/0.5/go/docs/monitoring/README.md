# Monitoring

### Available Operations

* [GetV05Heartbeat](#getv05heartbeat) - Get consent request status

## GetV05Heartbeat

Get consent request status

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
    res, err := s.Monitoring.GetV05Heartbeat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.HeartbeatResponse != nil {
        // handle response
    }
}
```
