<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsRequest;
import org.openapis.openapi.models.operations.PlayablelocationsLogImpressionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfo;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfoPlatformEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayablelocationsLogImpressionsRequest req = new PlayablelocationsLogImpressionsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleMapsPlayablelocationsV3LogImpressionsRequest = new GoogleMapsPlayablelocationsV3LogImpressionsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "provident";
                        applicationId = "distinctio";
                        applicationVersion = "quibusdam";
                        deviceModel = "unde";
                        languageCode = "nulla";
                        operatingSystem = "corrupti";
                        operatingSystemBuild = "illum";
                        platform = GoogleMapsUnityClientInfoPlatformEnum.WINDOWS;
                    }};;
                    impressions = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression[]{{
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 645894;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.PRESENTED;
                            locationName = "iure";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 297534;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.INTERACTED;
                            locationName = "ipsa";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 963663;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.IMPRESSION_TYPE_UNSPECIFIED;
                            locationName = "suscipit";
                        }}),
                    }};
                    requestId = "molestiae";
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
            }};            

            PlayablelocationsLogImpressionsResponse res = sdk.v3.playablelocationsLogImpressions(req);

            if (res.googleMapsPlayablelocationsV3LogImpressionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->