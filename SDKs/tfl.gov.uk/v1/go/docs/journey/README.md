# Journey

### Available Operations

* [JourneyJourneyResults](#journeyjourneyresults) - Perform a Journey Planner search from the parameters specified in simple types
* [JourneyMeta](#journeymeta) - Gets a list of all of the available journey planner modes

## JourneyJourneyResults

Perform a Journey Planner search from the parameters specified in simple types

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
    res, err := s.Journey.JourneyJourneyResults(ctx, operations.JourneyJourneyResultsRequest{
        AccessibilityPreference: []JourneyJourneyResultsAccessibilityPreferenceEnum{
            operations.JourneyJourneyResultsAccessibilityPreferenceEnumStepFreeToVehicle,
            operations.JourneyJourneyResultsAccessibilityPreferenceEnumStepFreeToVehicle,
            operations.JourneyJourneyResultsAccessibilityPreferenceEnumNoRequirements,
        },
        Adjustment: sdk.String("nam"),
        AlternativeCycle: sdk.Bool(false),
        AlternativeWalking: sdk.Bool(false),
        ApplyHTMLMarkup: sdk.Bool(false),
        BikeProficiency: []JourneyJourneyResultsBikeProficiencyEnum{
            operations.JourneyJourneyResultsBikeProficiencyEnumModerate,
            operations.JourneyJourneyResultsBikeProficiencyEnumEasy,
            operations.JourneyJourneyResultsBikeProficiencyEnumModerate,
        },
        CalcOneDirection: sdk.Bool(false),
        CyclePreference: operations.JourneyJourneyResultsCyclePreferenceEnumCycleHire.ToPointer(),
        Date: sdk.String("optio"),
        From: "totam",
        FromName: sdk.String("beatae"),
        JourneyPreference: operations.JourneyJourneyResultsJourneyPreferenceEnumLeastTime.ToPointer(),
        MaxTransferMinutes: sdk.String("molestiae"),
        MaxWalkingMinutes: sdk.String("modi"),
        Mode: []string{
            "impedit",
        },
        NationalSearch: sdk.Bool(false),
        RouteBetweenEntrances: sdk.Bool(false),
        TaxiOnlyTrip: sdk.Bool(false),
        Time: sdk.String("cum"),
        TimeIs: operations.JourneyJourneyResultsTimeIsEnumArriving.ToPointer(),
        To: "ipsum",
        ToName: sdk.String("excepturi"),
        UseMultiModalCall: sdk.Bool(false),
        UseRealTimeLiveArrivals: sdk.Bool(false),
        Via: sdk.String("aspernatur"),
        ViaName: sdk.String("perferendis"),
        WalkingOptimization: sdk.Bool(false),
        WalkingSpeed: operations.JourneyJourneyResultsWalkingSpeedEnumSlow.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesJourneyPlannerItineraryResult != nil {
        // handle response
    }
}
```

## JourneyMeta

Gets a list of all of the available journey planner modes

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
    res, err := s.Journey.JourneyMeta(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesModes != nil {
        // handle response
    }
}
```
