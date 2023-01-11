<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            TravelimpactmodelFlightsComputeFlightEmissionsRequest req = new TravelimpactmodelFlightsComputeFlightEmissionsRequest() {{
                queryParams = new TravelimpactmodelFlightsComputeFlightEmissionsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new ComputeFlightEmissionsRequest() {{
                    flights = new openapisdk.models.shared.Flight[]() {{
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 7837839688282259259;
                                month = 2518412263346885298;
                                year = 5617773211005988520;
                            }};
                            destination = "et";
                            flightNumber = 7144924247938981575;
                            operatingCarrierCode = "dolorem";
                            origin = "et";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 7373105480197164748;
                                month = 3287288577352441706;
                                year = 3930927879439176946;
                            }};
                            destination = "totam";
                            flightNumber = 2217592893536642650;
                            operatingCarrierCode = "illum";
                            origin = "debitis";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 3706853784096366226;
                                month = 2627038740284806767;
                                year = 6303220950515014660;
                            }};
                            destination = "id";
                            flightNumber = 959367522974354090;
                            operatingCarrierCode = "accusantium";
                            origin = "totam";
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