# journey

### Available Operations

* [journeyJourneyResults](#journeyjourneyresults) - Perform a Journey Planner search from the parameters specified in simple types
* [journeyMeta](#journeymeta) - Gets a list of all of the available journey planner modes

## journeyJourneyResults

Perform a Journey Planner search from the parameters specified in simple types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JourneyJourneyResultsAccessibilityPreferenceEnum;
import org.openapis.openapi.models.operations.JourneyJourneyResultsBikeProficiencyEnum;
import org.openapis.openapi.models.operations.JourneyJourneyResultsCyclePreferenceEnum;
import org.openapis.openapi.models.operations.JourneyJourneyResultsJourneyPreferenceEnum;
import org.openapis.openapi.models.operations.JourneyJourneyResultsRequest;
import org.openapis.openapi.models.operations.JourneyJourneyResultsResponse;
import org.openapis.openapi.models.operations.JourneyJourneyResultsTimeIsEnum;
import org.openapis.openapi.models.operations.JourneyJourneyResultsWalkingSpeedEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JourneyJourneyResultsRequest req = new JourneyJourneyResultsRequest("ipsa", "delectus") {{
                accessibilityPreference = new org.openapis.openapi.models.operations.JourneyJourneyResultsAccessibilityPreferenceEnum[]{{
                    add(JourneyJourneyResultsAccessibilityPreferenceEnum.NO_ESCALATORS),
                    add(JourneyJourneyResultsAccessibilityPreferenceEnum.NO_ESCALATORS),
                }};
                adjustment = "minus";
                alternativeCycle = false;
                alternativeWalking = false;
                applyHtmlMarkup = false;
                bikeProficiency = new org.openapis.openapi.models.operations.JourneyJourneyResultsBikeProficiencyEnum[]{{
                    add(JourneyJourneyResultsBikeProficiencyEnum.MODERATE),
                    add(JourneyJourneyResultsBikeProficiencyEnum.MODERATE),
                    add(JourneyJourneyResultsBikeProficiencyEnum.MODERATE),
                    add(JourneyJourneyResultsBikeProficiencyEnum.MODERATE),
                }};
                calcOneDirection = false;
                cyclePreference = JourneyJourneyResultsCyclePreferenceEnum.CYCLE_HIRE;
                date = "temporibus";
                fromName = "ab";
                journeyPreference = JourneyJourneyResultsJourneyPreferenceEnum.LEAST_TIME;
                maxTransferMinutes = "veritatis";
                maxWalkingMinutes = "deserunt";
                mode = new String[]{{
                    add("ipsam"),
                }};
                nationalSearch = false;
                routeBetweenEntrances = false;
                taxiOnlyTrip = false;
                time = "repellendus";
                timeIs = JourneyJourneyResultsTimeIsEnum.DEPARTING;
                toName = "quo";
                useMultiModalCall = false;
                useRealTimeLiveArrivals = false;
                via = "odit";
                viaName = "at";
                walkingOptimization = false;
                walkingSpeed = JourneyJourneyResultsWalkingSpeedEnum.FAST;
            }};            

            JourneyJourneyResultsResponse res = sdk.journey.journeyJourneyResults(req);

            if (res.tflApiPresentationEntitiesJourneyPlannerItineraryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## journeyMeta

Gets a list of all of the available journey planner modes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JourneyMetaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JourneyMetaResponse res = sdk.journey.journeyMeta();

            if (res.tflApiPresentationEntitiesModes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
