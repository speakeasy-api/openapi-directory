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

import org.openapis.openapi.models.operations.GetApiV2ListFederationsHeaders;
import org.openapis.openapi.models.operations.GetApiV2ListFederationsRequest;
import org.openapis.openapi.models.operations.GetApiV2ListFederationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2ListFederationsRequest req = new GetApiV2ListFederationsRequest() {{
                headers = new GetApiV2ListFederationsHeaders() {{
                    xRapidApiKey = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
            }};            

            GetApiV2ListFederationsResponse res = sdk.getApiV2ListFederations(req);

            if (res.getApiV2ListFederations200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getApiV2ListFederations` - Returns an array of all the available federations.
* `getApiV2ListMarkets` - Returns an array of all the supported prediction markets
* `getApiV2PerformanceStats` - Returns predictions accuracy in the last 1, 7, 14, 30 days.
* `getApiV2Predictions` - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
* `getApiV2PredictionsId` - Returns all predictions available for a match id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
