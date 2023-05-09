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

            RecommenderProjectsLocationsInsightTypesInsightsListRequest req = new RecommenderProjectsLocationsInsightTypesInsightsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            RecommenderProjectsLocationsInsightTypesInsightsListResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsList(req, new RecommenderProjectsLocationsInsightTypesInsightsListSecurity("debitis", "ipsa") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [recommenderProjectsLocationsInsightTypesInsightsList](docs/projects/README.md#recommenderprojectslocationsinsighttypesinsightslist) - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
* [recommenderProjectsLocationsInsightTypesInsightsMarkAccepted](docs/projects/README.md#recommenderprojectslocationsinsighttypesinsightsmarkaccepted) - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
* [recommenderProjectsLocationsRecommendersRecommendationsGet](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsget) - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsList](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationslist) - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarkclaimed) - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarkdismissed) - Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkFailed](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarkfailed) - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarksucceeded) - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersUpdateConfig](docs/projects/README.md#recommenderprojectslocationsrecommendersupdateconfig) - Updates a Recommender Config. This will create a new revision of the config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
