package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult
 * RecommendationResult represents a generic recommendation result with associated metadata.
**/
public class GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public GoogleCloudDiscoveryengineV1alphaDocument document;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult withDocument(GoogleCloudDiscoveryengineV1alphaDocument document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
}