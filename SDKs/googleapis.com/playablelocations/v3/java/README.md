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

import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsQueryParams;
import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsRequest;
import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsResponse;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfoPlatformEnum;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayablelocationsLogImpressionsRequest req = new PlayablelocationsLogImpressionsRequest() {{
                queryParams = new PlayablelocationsLogImpressionsQueryParams() {{
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
                request = new GoogleMapsPlayablelocationsV3LogImpressionsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "deserunt";
                        applicationId = "suscipit";
                        applicationVersion = "iure";
                        deviceModel = "magnam";
                        languageCode = "debitis";
                        operatingSystem = "ipsa";
                        operatingSystemBuild = "delectus";
                        platform = "MAC_OS";
                    }};
                    impressions = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression[]{{
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 477665;
                            impressionType = "INTERACTED";
                            locationName = "placeat";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 528895;
                            impressionType = "PRESENTED";
                            locationName = "excepturi";
                        }}),
                    }};
                    requestId = "nisi";
                }};
            }};            

            PlayablelocationsLogImpressionsResponse res = sdk.v3.playablelocationsLogImpressions(req);

            if (res.googleMapsPlayablelocationsV3LogImpressionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### v3

* `playablelocationsLogImpressions` - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* `playablelocationsLogPlayerReports` - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* `playablelocationsSamplePlayableLocations` - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
