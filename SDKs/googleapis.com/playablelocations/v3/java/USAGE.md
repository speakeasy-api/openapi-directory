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
                    accessToken = "assumenda";
                    alt = "json";
                    callback = "quia";
                    fields = "sint";
                    key = "porro";
                    oauthToken = "fuga";
                    prettyPrint = true;
                    quotaUser = "voluptatibus";
                    uploadType = "et";
                    uploadProtocol = "voluptatum";
                }};
                request = new GoogleMapsPlayablelocationsV3LogImpressionsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "dignissimos";
                        applicationId = "est";
                        applicationVersion = "vel";
                        deviceModel = "ut";
                        languageCode = "quo";
                        operatingSystem = "nulla";
                        operatingSystemBuild = "in";
                        platform = "ANDROID";
                    }};
                    impressions = new openapisdk.models.shared.GoogleMapsPlayablelocationsV3Impression[]() {{
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 9090477704237377771;
                            impressionType = "PRESENTED";
                            locationName = "delectus";
                        }}),
                    }};
                    requestId = "impedit";
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