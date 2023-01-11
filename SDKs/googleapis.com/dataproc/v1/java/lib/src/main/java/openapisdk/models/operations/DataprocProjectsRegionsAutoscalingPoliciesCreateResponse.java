package openapisdk.models.operations;



public class DataprocProjectsRegionsAutoscalingPoliciesCreateResponse {
    public openapisdk.models.shared.AutoscalingPolicy autoscalingPolicy;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateResponse withAutoscalingPolicy(openapisdk.models.shared.AutoscalingPolicy autoscalingPolicy) {
        this.autoscalingPolicy = autoscalingPolicy;
        return this;
    }
    public String contentType;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}