# Pulses

### Available Operations

* [GetOfferingsOfferingIDAnalyticsPulses](#getofferingsofferingidanalyticspulses) - Find all pulse IDs in the specified offering
* [GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponses](#getofferingsofferingidanalyticspulsespulseidresponses) - Find pulses by offeringId and pulseId

## GetOfferingsOfferingIDAnalyticsPulses

Responds with the IDs of all pulses that learners have responded to in a specified offering.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pulses.GetOfferingsOfferingIDAnalyticsPulses(ctx, operations.GetOfferingsOfferingIDAnalyticsPulsesRequest{
        OfferingID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOfferingsOfferingIDAnalyticsPulses200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponses

Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pulses.GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponses(ctx, operations.GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesRequest{
        OfferingID: "in",
        PulseID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PulseResponses != nil {
        // handle response
    }
}
```
