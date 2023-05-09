# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/recommender/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RecommenderProjectsLocationsInsightTypesInsightsList(ctx, operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1beta1ListInsightsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [RecommenderProjectsLocationsInsightTypesInsightsList](docs/projects/README.md#recommenderprojectslocationsinsighttypesinsightslist) - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
* [RecommenderProjectsLocationsInsightTypesInsightsMarkAccepted](docs/projects/README.md#recommenderprojectslocationsinsighttypesinsightsmarkaccepted) - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
* [RecommenderProjectsLocationsRecommendersRecommendationsGet](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsget) - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsList](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationslist) - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimed](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarkclaimed) - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissed](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarkdismissed) - Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkFailed](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarkfailed) - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded](docs/projects/README.md#recommenderprojectslocationsrecommendersrecommendationsmarksucceeded) - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [RecommenderProjectsLocationsRecommendersUpdateConfig](docs/projects/README.md#recommenderprojectslocationsrecommendersupdateconfig) - Updates a Recommender Config. This will create a new revision of the config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
