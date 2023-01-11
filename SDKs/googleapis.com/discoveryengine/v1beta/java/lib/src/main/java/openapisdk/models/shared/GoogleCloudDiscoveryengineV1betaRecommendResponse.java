package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaRecommendResponse
 * Response message for Recommend method.
**/
public class GoogleCloudDiscoveryengineV1betaRecommendResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionToken")
    public String attributionToken;
    public GoogleCloudDiscoveryengineV1betaRecommendResponse withAttributionToken(String attributionToken) {
        this.attributionToken = attributionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missingIds")
    public String[] missingIds;
    public GoogleCloudDiscoveryengineV1betaRecommendResponse withMissingIds(String[] missingIds) {
        this.missingIds = missingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[] results;
    public GoogleCloudDiscoveryengineV1betaRecommendResponse withResults(GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public GoogleCloudDiscoveryengineV1betaRecommendResponse withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}