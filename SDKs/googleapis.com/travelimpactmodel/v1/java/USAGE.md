<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest;
import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ComputeFlightEmissionsRequest;
import org.openapis.openapi.models.shared.Flight;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelimpactmodelFlightsComputeFlightEmissionsRequest req = new TravelimpactmodelFlightsComputeFlightEmissionsRequest() {{
                dollarXgafv = "2";
                computeFlightEmissionsRequest = new ComputeFlightEmissionsRequest() {{
                    flights = new org.openapis.openapi.models.shared.Flight[]{{
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 715190;
                                month = 844266;
                                year = 602763;
                            }};
                            destination = "nulla";
                            flightNumber = 544883;
                            operatingCarrierCode = "illum";
                            origin = "vel";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 623564;
                                month = 645894;
                                year = 384382;
                            }};
                            destination = "iure";
                            flightNumber = 297534;
                            operatingCarrierCode = "debitis";
                            origin = "ipsa";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 963663;
                                month = 272656;
                                year = 383441;
                            }};
                            destination = "molestiae";
                            flightNumber = 791725;
                            operatingCarrierCode = "placeat";
                            origin = "voluptatum";
                        }}),
                    }};
                }};
                accessToken = "iusto";
                alt = "media";
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }}            

            TravelimpactmodelFlightsComputeFlightEmissionsResponse res = sdk.flights.travelimpactmodelFlightsComputeFlightEmissions(req);

            if (res.computeFlightEmissionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->