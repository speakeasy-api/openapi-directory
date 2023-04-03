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

import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsRequest;
import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfoPlatformEnum;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayablelocationsLogImpressionsRequest req = new PlayablelocationsLogImpressionsRequest() {{
                dollarXgafv = "2";
                googleMapsPlayablelocationsV3LogImpressionsRequest = new GoogleMapsPlayablelocationsV3LogImpressionsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "provident";
                        applicationId = "distinctio";
                        applicationVersion = "quibusdam";
                        deviceModel = "unde";
                        languageCode = "nulla";
                        operatingSystem = "corrupti";
                        operatingSystemBuild = "illum";
                        platform = "WINDOWS";
                    }};
                    impressions = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression[]{{
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 645894;
                            impressionType = "PRESENTED";
                            locationName = "iure";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 297534;
                            impressionType = "INTERACTED";
                            locationName = "ipsa";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 963663;
                            impressionType = "IMPRESSION_TYPE_UNSPECIFIED";
                            locationName = "suscipit";
                        }}),
                    }};
                    requestId = "molestiae";
                }};
                accessToken = "minus";
                alt = "proto";
                callback = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
            }}            

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
## Available Resources and Operations


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
