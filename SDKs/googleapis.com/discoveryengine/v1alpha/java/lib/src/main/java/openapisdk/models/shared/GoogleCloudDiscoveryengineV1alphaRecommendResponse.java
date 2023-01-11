package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaRecommendResponse
 * Response message for Recommend method.
**/
public class GoogleCloudDiscoveryengineV1alphaRecommendResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionToken")
    public String attributionToken;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponse withAttributionToken(String attributionToken) {
        this.attributionToken = attributionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missingIds")
    public String[] missingIds;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponse withMissingIds(String[] missingIds) {
        this.missingIds = missingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult[] results;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponse withResults(GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public GoogleCloudDiscoveryengineV1alphaRecommendResponse withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}