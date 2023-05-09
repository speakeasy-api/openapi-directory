# pulses

### Available Operations

* [getOfferingsOfferingIdAnalyticsPulses](#getofferingsofferingidanalyticspulses) - Find all pulse IDs in the specified offering
* [getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses](#getofferingsofferingidanalyticspulsespulseidresponses) - Find pulses by offeringId and pulseId

## getOfferingsOfferingIdAnalyticsPulses

Responds with the IDs of all pulses that learners have responded to in a specified offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsPulsesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsPulsesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsPulsesRequest req = new GetOfferingsOfferingIdAnalyticsPulsesRequest("iste");            

            GetOfferingsOfferingIdAnalyticsPulsesResponse res = sdk.pulses.getOfferingsOfferingIdAnalyticsPulses(req);

            if (res.getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses

Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest req = new GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest("deleniti", "pariatur");            

            GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse res = sdk.pulses.getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses(req);

            if (res.pulseResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
