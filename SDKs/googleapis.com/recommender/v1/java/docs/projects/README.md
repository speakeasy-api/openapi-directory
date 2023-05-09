# projects

### Available Operations

* [recommenderProjectsLocationsInsightTypesInsightsList](#recommenderprojectslocationsinsighttypesinsightslist) - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
* [recommenderProjectsLocationsInsightTypesInsightsMarkAccepted](#recommenderprojectslocationsinsighttypesinsightsmarkaccepted) - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
* [recommenderProjectsLocationsRecommendersRecommendationsGet](#recommenderprojectslocationsrecommendersrecommendationsget) - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsList](#recommenderprojectslocationsrecommendersrecommendationslist) - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed](#recommenderprojectslocationsrecommendersrecommendationsmarkclaimed) - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed](#recommenderprojectslocationsrecommendersrecommendationsmarkdismissed) - Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkFailed](#recommenderprojectslocationsrecommendersrecommendationsmarkfailed) - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded](#recommenderprojectslocationsrecommendersrecommendationsmarksucceeded) - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersUpdateConfig](#recommenderprojectslocationsrecommendersupdateconfig) - Updates a Recommender Config. This will create a new revision of the config.

## recommenderProjectsLocationsInsightTypesInsightsList

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsInsightTypesInsightsListRequest req = new RecommenderProjectsLocationsInsightTypesInsightsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            RecommenderProjectsLocationsInsightTypesInsightsListResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsList(req, new RecommenderProjectsLocationsInsightTypesInsightsListSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1ListInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsInsightTypesInsightsMarkAccepted

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1MarkInsightAcceptedRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest req = new RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommenderV1MarkInsightAcceptedRequest = new GoogleCloudRecommenderV1MarkInsightAcceptedRequest() {{
                    etag = "repellendus";
                    stateMetadata = new java.util.HashMap<String, String>() {{
                        put("quo", "odit");
                        put("at", "at");
                        put("maiores", "molestiae");
                        put("quod", "quod");
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsMarkAccepted(req, new RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity("deleniti", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1Insight != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersRecommendationsGet

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersRecommendationsGetRequest req = new RecommenderProjectsLocationsRecommendersRecommendationsGetRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "modi";
                key = "qui";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            RecommenderProjectsLocationsRecommendersRecommendationsGetResponse res = sdk.projects.recommenderProjectsLocationsRecommendersRecommendationsGet(req, new RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity("excepturi", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1Recommendation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersRecommendationsList

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersRecommendationsListRequest req = new RecommenderProjectsLocationsRecommendersRecommendationsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                filter = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                pageSize = 902599L;
                pageToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            RecommenderProjectsLocationsRecommendersRecommendationsListResponse res = sdk.projects.recommenderProjectsLocationsRecommendersRecommendationsList(req, new RecommenderProjectsLocationsRecommendersRecommendationsListSecurity("iure", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1ListRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1MarkRecommendationClaimedRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest req = new RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommenderV1MarkRecommendationClaimedRequest = new GoogleCloudRecommenderV1MarkRecommendationClaimedRequest() {{
                    etag = "ipsa";
                    stateMetadata = new java.util.HashMap<String, String>() {{
                        put("est", "mollitia");
                        put("laborum", "dolores");
                        put("dolorem", "corporis");
                        put("explicabo", "nobis");
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "culpa";
                uploadProtocol = "doloribus";
            }};            

            RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse res = sdk.projects.recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed(req, new RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity("sapiente", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1Recommendation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1MarkRecommendationDismissedRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedRequest req = new RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommenderV1MarkRecommendationDismissedRequest = new GoogleCloudRecommenderV1MarkRecommendationDismissedRequest() {{
                    etag = "culpa";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "molestiae";
                uploadProtocol = "velit";
            }};            

            RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedResponse res = sdk.projects.recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed(req, new RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedSecurity("error", "quia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1Recommendation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkFailed

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1MarkRecommendationFailedRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest req = new RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommenderV1MarkRecommendationFailedRequest = new GoogleCloudRecommenderV1MarkRecommendationFailedRequest() {{
                    etag = "laborum";
                    stateMetadata = new java.util.HashMap<String, String>() {{
                        put("enim", "odit");
                        put("quo", "sequi");
                        put("tenetur", "ipsam");
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "quasi";
                uploadProtocol = "reiciendis";
            }};            

            RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse res = sdk.projects.recommenderProjectsLocationsRecommendersRecommendationsMarkFailed(req, new RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity("voluptatibus", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1Recommendation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1MarkRecommendationSucceededRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest req = new RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommenderV1MarkRecommendationSucceededRequest = new GoogleCloudRecommenderV1MarkRecommendationSucceededRequest() {{
                    etag = "voluptatibus";
                    stateMetadata = new java.util.HashMap<String, String>() {{
                        put("omnis", "voluptate");
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse res = sdk.projects.recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded(req, new RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity("iusto", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1Recommendation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommenderProjectsLocationsRecommendersUpdateConfig

Updates a Recommender Config. This will create a new revision of the config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1RecommenderConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRecommenderV1RecommenderGenerationConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsRecommendersUpdateConfigRequest req = new RecommenderProjectsLocationsRecommendersUpdateConfigRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommenderV1RecommenderConfigInput = new GoogleCloudRecommenderV1RecommenderConfigInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("commodi", "repudiandae");
                        put("quae", "ipsum");
                        put("quidem", "molestias");
                        put("excepturi", "pariatur");
                    }};
                    displayName = "modi";
                    etag = "praesentium";
                    name = "Grady Botsford";
                    recommenderGenerationConfig = new GoogleCloudRecommenderV1RecommenderGenerationConfig() {{
                        params = new java.util.HashMap<String, Object>() {{
                            put("itaque", "incidunt");
                        }};
                    }};;
                    updateTime = "enim";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                updateMask = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
                validateOnly = false;
            }};            

            RecommenderProjectsLocationsRecommendersUpdateConfigResponse res = sdk.projects.recommenderProjectsLocationsRecommendersUpdateConfig(req, new RecommenderProjectsLocationsRecommendersUpdateConfigSecurity("aliquid", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1RecommenderConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
