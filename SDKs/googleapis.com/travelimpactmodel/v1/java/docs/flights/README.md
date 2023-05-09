# flights

### Available Operations

* [travelimpactmodelFlightsComputeFlightEmissions](#travelimpactmodelflightscomputeflightemissions) - Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.

## travelimpactmodelFlightsComputeFlightEmissions

Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest;
import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ComputeFlightEmissionsRequest;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.Flight;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelimpactmodelFlightsComputeFlightEmissionsRequest req = new TravelimpactmodelFlightsComputeFlightEmissionsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                computeFlightEmissionsRequest = new ComputeFlightEmissionsRequest() {{
                    flights = new org.openapis.openapi.models.shared.Flight[]{{
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 832620;
                                month = 957156;
                                year = 778157;
                            }};
                            destination = "odit";
                            flightNumber = 870013;
                            operatingCarrierCode = "at";
                            origin = "maiores";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 473608;
                                month = 799159;
                                year = 800911;
                            }};
                            destination = "esse";
                            flightNumber = 520478;
                            operatingCarrierCode = "porro";
                            origin = "dolorum";
                        }}),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "occaecati";
                key = "fugit";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            TravelimpactmodelFlightsComputeFlightEmissionsResponse res = sdk.flights.travelimpactmodelFlightsComputeFlightEmissions(req);

            if (res.computeFlightEmissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
