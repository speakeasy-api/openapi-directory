# v3

### Available Operations

* [playablelocationsLogImpressions](#playablelocationslogimpressions) - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* [playablelocationsLogPlayerReports](#playablelocationslogplayerreports) - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* [playablelocationsSamplePlayableLocations](#playablelocationssampleplayablelocations) - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

## playablelocationsLogImpressions

Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                googleMapsPlayablelocationsV3LogImpressionsRequest = new GoogleMapsPlayablelocationsV3LogImpressionsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "veritatis";
                        applicationId = "deserunt";
                        applicationVersion = "perferendis";
                        deviceModel = "ipsam";
                        languageCode = "repellendus";
                        operatingSystem = "sapiente";
                        operatingSystemBuild = "quo";
                        platform = GoogleMapsUnityClientInfoPlatformEnum.EDITOR;
                    }};;
                    impressions = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3Impression[]{{
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 870088;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.INTERACTED;
                            locationName = "molestiae";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 799159;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.INTERACTED;
                            locationName = "esse";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 520478;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.INTERACTED;
                            locationName = "dolorum";
                        }}),
                        add(new GoogleMapsPlayablelocationsV3Impression() {{
                            gameObjectType = 118274;
                            impressionType = GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum.INTERACTED;
                            locationName = "officia";
                        }}),
                    }};
                    requestId = "occaecati";
                }};;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "molestiae";
                uploadProtocol = "modi";
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

## playablelocationsLogPlayerReports

Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayablelocationsLogPlayerReportsRequest;
import org.openapis.openapi.models.operations.PlayablelocationsLogPlayerReportsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3LogPlayerReportsRequest;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3PlayerReport;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfo;
import org.openapis.openapi.models.shared.GoogleMapsUnityClientInfoPlatformEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayablelocationsLogPlayerReportsRequest req = new PlayablelocationsLogPlayerReportsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleMapsPlayablelocationsV3LogPlayerReportsRequest = new GoogleMapsPlayablelocationsV3LogPlayerReportsRequest() {{
                    clientInfo = new GoogleMapsUnityClientInfo() {{
                        apiClient = "impedit";
                        applicationId = "cum";
                        applicationVersion = "esse";
                        deviceModel = "ipsum";
                        languageCode = "excepturi";
                        operatingSystem = "aspernatur";
                        operatingSystemBuild = "perferendis";
                        platform = GoogleMapsUnityClientInfoPlatformEnum.MAC_OS;
                    }};;
                    playerReports = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3PlayerReport[]{{
                        add(new GoogleMapsPlayablelocationsV3PlayerReport() {{
                            languageCode = "sed";
                            locationName = "iste";
                            reasonDetails = "dolor";
                            reasons = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[]{{
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.NOT_PEDESTRIAN_ACCESSIBLE),
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.TEMPORARILY_INACCESSIBLE),
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.TEMPORARILY_INACCESSIBLE),
                            }};
                        }}),
                        add(new GoogleMapsPlayablelocationsV3PlayerReport() {{
                            languageCode = "fuga";
                            locationName = "in";
                            reasonDetails = "corporis";
                            reasons = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[]{{
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.NOT_PEDESTRIAN_ACCESSIBLE),
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.TEMPORARILY_INACCESSIBLE),
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.PERMANENTLY_CLOSED),
                            }};
                        }}),
                        add(new GoogleMapsPlayablelocationsV3PlayerReport() {{
                            languageCode = "architecto";
                            locationName = "ipsa";
                            reasonDetails = "reiciendis";
                            reasons = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[]{{
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.NOT_OPEN_TO_PUBLIC),
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.PERMANENTLY_CLOSED),
                                add(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum.OTHER),
                            }};
                        }}),
                    }};
                    requestId = "dolorem";
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            PlayablelocationsLogPlayerReportsResponse res = sdk.v3.playablelocationsLogPlayerReports(req);

            if (res.googleMapsPlayablelocationsV3LogPlayerReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playablelocationsSamplePlayableLocations

Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayablelocationsSamplePlayableLocationsRequest;
import org.openapis.openapi.models.operations.PlayablelocationsSamplePlayableLocationsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SampleAreaFilter;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SampleCriterion;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SampleFilter;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SampleSpacingOptions;
import org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayablelocationsSamplePlayableLocationsRequest req = new PlayablelocationsSamplePlayableLocationsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleMapsPlayablelocationsV3SamplePlayableLocationsRequest = new GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest() {{
                    areaFilter = new GoogleMapsPlayablelocationsV3SampleAreaFilter() {{
                        s2CellId = "culpa";
                    }};;
                    criteria = new org.openapis.openapi.models.shared.GoogleMapsPlayablelocationsV3SampleCriterion[]{{
                        add(new GoogleMapsPlayablelocationsV3SampleCriterion() {{
                            fieldsToReturn = "sapiente";
                            filter = new GoogleMapsPlayablelocationsV3SampleFilter() {{
                                includedTypes = new String[]{{
                                    add("mollitia"),
                                }};
                                maxLocationCount = 208876;
                                spacing = new GoogleMapsPlayablelocationsV3SampleSpacingOptions() {{
                                    minSpacingMeters = 6350.59;
                                    pointType = GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum.POINT_TYPE_UNSPECIFIED;
                                }};
                            }};
                            gameObjectType = 995300;
                        }}),
                        add(new GoogleMapsPlayablelocationsV3SampleCriterion() {{
                            fieldsToReturn = "mollitia";
                            filter = new GoogleMapsPlayablelocationsV3SampleFilter() {{
                                includedTypes = new String[]{{
                                    add("numquam"),
                                    add("commodi"),
                                    add("quam"),
                                }};
                                maxLocationCount = 474697;
                                spacing = new GoogleMapsPlayablelocationsV3SampleSpacingOptions() {{
                                    minSpacingMeters = 2444.25;
                                    pointType = GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum.CENTER_POINT;
                                }};
                            }};
                            gameObjectType = 158969;
                        }}),
                        add(new GoogleMapsPlayablelocationsV3SampleCriterion() {{
                            fieldsToReturn = "quis";
                            filter = new GoogleMapsPlayablelocationsV3SampleFilter() {{
                                includedTypes = new String[]{{
                                    add("laborum"),
                                }};
                                maxLocationCount = 656330;
                                spacing = new GoogleMapsPlayablelocationsV3SampleSpacingOptions() {{
                                    minSpacingMeters = 3172.02;
                                    pointType = GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum.POINT_TYPE_UNSPECIFIED;
                                }};
                            }};
                            gameObjectType = 778346;
                        }}),
                        add(new GoogleMapsPlayablelocationsV3SampleCriterion() {{
                            fieldsToReturn = "sequi";
                            filter = new GoogleMapsPlayablelocationsV3SampleFilter() {{
                                includedTypes = new String[]{{
                                    add("ipsam"),
                                    add("id"),
                                    add("possimus"),
                                    add("aut"),
                                }};
                                maxLocationCount = 97101;
                                spacing = new GoogleMapsPlayablelocationsV3SampleSpacingOptions() {{
                                    minSpacingMeters = 6228.46;
                                    pointType = GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum.SNAPPED_POINT;
                                }};
                            }};
                            gameObjectType = 673660;
                        }}),
                    }};
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            PlayablelocationsSamplePlayableLocationsResponse res = sdk.v3.playablelocationsSamplePlayableLocations(req);

            if (res.googleMapsPlayablelocationsV3SamplePlayableLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
