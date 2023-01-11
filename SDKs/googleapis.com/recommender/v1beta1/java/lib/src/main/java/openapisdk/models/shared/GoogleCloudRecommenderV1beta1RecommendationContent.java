package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1RecommendationContent
 * Contains what resources are changing and how they are changing.
**/
public class GoogleCloudRecommenderV1beta1RecommendationContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationGroups")
    public GoogleCloudRecommenderV1beta1OperationGroup[] operationGroups;
    public GoogleCloudRecommenderV1beta1RecommendationContent withOperationGroups(GoogleCloudRecommenderV1beta1OperationGroup[] operationGroups) {
        this.operationGroups = operationGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public java.util.Map<String, Object> overview;
    public GoogleCloudRecommenderV1beta1RecommendationContent withOverview(java.util.Map<String, Object> overview) {
        this.overview = overview;
        return this;
    }
}