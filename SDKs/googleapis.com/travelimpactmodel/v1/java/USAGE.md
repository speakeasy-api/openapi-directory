<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsQueryParams;
import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest;
import org.openapis.openapi.models.operations.TravelimpactmodelFlightsComputeFlightEmissionsResponse;
import org.openapis.openapi.models.shared.ComputeFlightEmissionsRequest;
import org.openapis.openapi.models.shared.Flight;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelimpactmodelFlightsComputeFlightEmissionsRequest req = new TravelimpactmodelFlightsComputeFlightEmissionsRequest() {{
                queryParams = new TravelimpactmodelFlightsComputeFlightEmissionsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new ComputeFlightEmissionsRequest() {{
                    flights = new org.openapis.openapi.models.shared.Flight[]{{
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 384382;
                                month = 437587;
                                year = 297534;
                            }};
                            destination = "debitis";
                            flightNumber = 56713;
                            operatingCarrierCode = "delectus";
                            origin = "tempora";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 383441;
                                month = 477665;
                                year = 791725;
                            }};
                            destination = "placeat";
                            flightNumber = 528895;
                            operatingCarrierCode = "iusto";
                            origin = "excepturi";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 392785;
                                month = 925597;
                                year = 836079;
                            }};
                            destination = "ab";
                            flightNumber = 337396;
                            operatingCarrierCode = "veritatis";
                            origin = "deserunt";
                        }}),
                    }};
                }};
            }};            

            TravelimpactmodelFlightsComputeFlightEmissionsResponse res = sdk.flights.travelimpactmodelFlightsComputeFlightEmissions(req);

            if (res.computeFlightEmissionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->