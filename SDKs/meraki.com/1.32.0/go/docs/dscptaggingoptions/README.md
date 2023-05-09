# DscpTaggingOptions

### Available Operations

* [GetNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.

## GetNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DscpTaggingOptions.GetNetworkTrafficShapingDscpTaggingOptions(ctx, operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest{
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
