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