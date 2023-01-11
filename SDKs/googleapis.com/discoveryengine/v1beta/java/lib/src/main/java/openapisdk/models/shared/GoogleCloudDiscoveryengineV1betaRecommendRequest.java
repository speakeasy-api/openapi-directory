package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaRecommendRequest
 * Request message for Recommend method.
**/
public class GoogleCloudDiscoveryengineV1betaRecommendRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudDiscoveryengineV1betaRecommendRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudDiscoveryengineV1betaRecommendRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public GoogleCloudDiscoveryengineV1betaRecommendRequest withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvent")
    public GoogleCloudDiscoveryengineV1betaUserEvent userEvent;
    public GoogleCloudDiscoveryengineV1betaRecommendRequest withUserEvent(GoogleCloudDiscoveryengineV1betaUserEvent userEvent) {
        this.userEvent = userEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public GoogleCloudDiscoveryengineV1betaRecommendRequest withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public GoogleCloudDiscoveryengineV1betaRecommendRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}