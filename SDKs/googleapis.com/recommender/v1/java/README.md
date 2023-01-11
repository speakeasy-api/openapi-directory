# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

            RecommenderProjectsLocationsInsightTypesInsightsListRequest req = new RecommenderProjectsLocationsInsightTypesInsightsListRequest() {{
                security = new RecommenderProjectsLocationsInsightTypesInsightsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RecommenderProjectsLocationsInsightTypesInsightsListPathParams() {{
                    parent = "sit";
                }};
                queryParams = new RecommenderProjectsLocationsInsightTypesInsightsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    filter = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    pageSize = 1543572285742637646;
                    pageToken = "nihil";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
            }};

            RecommenderProjectsLocationsInsightTypesInsightsListResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsList(req);

            if (res.googleCloudRecommenderV1ListInsightsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `recommenderProjectsLocationsInsightTypesInsightsList` - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
* `recommenderProjectsLocationsInsightTypesInsightsMarkAccepted` - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
* `recommenderProjectsLocationsRecommendersRecommendationsGet` - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
* `recommenderProjectsLocationsRecommendersRecommendationsList` - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
* `recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed` - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* `recommenderProjectsLocationsRecommendersRecommendationsMarkFailed` - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* `recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded` - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* `recommenderProjectsLocationsRecommendersUpdateConfig` - Updates a Recommender Config. This will create a new revision of the config.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
