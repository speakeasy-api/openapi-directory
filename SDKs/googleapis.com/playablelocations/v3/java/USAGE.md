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

            PlayablelocationsLogImpressionsRequest req = new PlayablelocationsLogImpressionsRequest() {{
                queryParams = new PlayablelocationsLogImpressionsQueryParams() {{
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
                request = new GoogleMapsPlayablelocationsV3LogImpressionsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "rerum";
                        applicationId = "dicta";
                        applicationVersion = "debitis";
                        deviceModel = "voluptatum";
                        languageCode = "et";
                        operatingSystem = "ut";
                        operatingSystemBuild = "dolorem";
                        platform = "MAC_OS";
                    }};
                    impressions = new openapisdk.models.shared.GoogleMapsPlayablelocationsV3Impression[]() {{
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 3287288577352441706;
                            impressionType = "IMPRESSION_TYPE_UNSPECIFIED";
                            locationName = "totam";
                        }}),
                    }};
                    requestId = "dolores";
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