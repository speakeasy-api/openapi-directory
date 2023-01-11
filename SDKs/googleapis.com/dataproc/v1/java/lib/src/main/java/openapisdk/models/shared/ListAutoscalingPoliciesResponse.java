package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAutoscalingPoliciesResponse
 * A response to a request to list autoscaling policies in a project.
**/
public class ListAutoscalingPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAutoscalingPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public AutoscalingPolicy[] policies;
    public ListAutoscalingPoliciesResponse withPolicies(AutoscalingPolicy[] policies) {
        this.policies = policies;
        return this;
    }
}