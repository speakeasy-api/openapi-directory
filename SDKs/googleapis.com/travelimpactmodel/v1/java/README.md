# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### flights

* `travelimpactmodelFlightsComputeFlightEmissions` - Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
