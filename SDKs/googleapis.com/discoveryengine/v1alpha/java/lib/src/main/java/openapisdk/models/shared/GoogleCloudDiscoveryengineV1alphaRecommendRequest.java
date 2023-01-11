package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaRecommendRequest
 * Request message for Recommend method.
**/
public class GoogleCloudDiscoveryengineV1alphaRecommendRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudDiscoveryengineV1alphaRecommendRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudDiscoveryengineV1alphaRecommendRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public GoogleCloudDiscoveryengineV1alphaRecommendRequest withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvent")
    public GoogleCloudDiscoveryengineV1alphaUserEvent userEvent;
    public GoogleCloudDiscoveryengineV1alphaRecommendRequest withUserEvent(GoogleCloudDiscoveryengineV1alphaUserEvent userEvent) {
        this.userEvent = userEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public GoogleCloudDiscoveryengineV1alphaRecommendRequest withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public GoogleCloudDiscoveryengineV1alphaRecommendRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}