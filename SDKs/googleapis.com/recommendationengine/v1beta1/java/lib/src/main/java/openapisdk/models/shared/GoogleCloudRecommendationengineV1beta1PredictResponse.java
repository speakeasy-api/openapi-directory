package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1PredictResponse
 * Response message for predict method.
**/
public class GoogleCloudRecommendationengineV1beta1PredictResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dryRun")
    public Boolean dryRun;
    public GoogleCloudRecommendationengineV1beta1PredictResponse withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsMissingInCatalog")
    public String[] itemsMissingInCatalog;
    public GoogleCloudRecommendationengineV1beta1PredictResponse withItemsMissingInCatalog(String[] itemsMissingInCatalog) {
        this.itemsMissingInCatalog = itemsMissingInCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public GoogleCloudRecommendationengineV1beta1PredictResponse withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommendationengineV1beta1PredictResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationToken")
    public String recommendationToken;
    public GoogleCloudRecommendationengineV1beta1PredictResponse withRecommendationToken(String recommendationToken) {
        this.recommendationToken = recommendationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[] results;
    public GoogleCloudRecommendationengineV1beta1PredictResponse withResults(GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[] results) {
        this.results = results;
        return this;
    }
}