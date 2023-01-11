package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult
 * RecommendationResult represents a generic recommendation result with associated metadata.
**/
public class GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public GoogleCloudDiscoveryengineV1betaDocument document;
    public GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult withDocument(GoogleCloudDiscoveryengineV1betaDocument document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
}