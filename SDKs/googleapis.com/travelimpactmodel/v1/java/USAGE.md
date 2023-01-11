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
                    dollarXgafv = "2";
                    accessToken = "repellendus";
                    alt = "media";
                    callback = "exercitationem";
                    fields = "facere";
                    key = "voluptate";
                    oauthToken = "quia";
                    prettyPrint = false;
                    quotaUser = "aliquam";
                    uploadType = "magni";
                    uploadProtocol = "ducimus";
                }};
                request = new ComputeFlightEmissionsRequest() {{
                    flights = new openapisdk.models.shared.Flight[]() {{
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 2724799249571066120;
                                month = 1120866788222661821;
                                year = 6761780401062793173;
                            }};
                            destination = "asperiores";
                            flightNumber = 6516298809618562673;
                            operatingCarrierCode = "maiores";
                            origin = "quia";
                        }}),
                        add(new Flight() {{
                            departureDate = new Date() {{
                                day = 901874405537358488;
                                month = 8324195147635486689;
                                year = 7992565744974070129;
                            }};
                            destination = "ex";
                            flightNumber = 435995984853509626;
                            operatingCarrierCode = "velit";
                            origin = "quos";
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