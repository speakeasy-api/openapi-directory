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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
