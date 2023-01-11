package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1RecommendationContent
 * Contains what resources are changing and how they are changing.
**/
public class GoogleCloudRecommenderV1RecommendationContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationGroups")
    public GoogleCloudRecommenderV1OperationGroup[] operationGroups;
    public GoogleCloudRecommenderV1RecommendationContent withOperationGroups(GoogleCloudRecommenderV1OperationGroup[] operationGroups) {
        this.operationGroups = operationGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public java.util.Map<String, Object> overview;
    public GoogleCloudRecommenderV1RecommendationContent withOverview(java.util.Map<String, Object> overview) {
        this.overview = overview;
        return this;
    }
}