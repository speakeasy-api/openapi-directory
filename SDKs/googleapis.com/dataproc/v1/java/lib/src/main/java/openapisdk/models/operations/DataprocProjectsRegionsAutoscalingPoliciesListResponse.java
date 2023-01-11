package openapisdk.models.operations;



public class DataprocProjectsRegionsAutoscalingPoliciesListResponse {
    public String contentType;
    public DataprocProjectsRegionsAutoscalingPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAutoscalingPoliciesResponse listAutoscalingPoliciesResponse;
    public DataprocProjectsRegionsAutoscalingPoliciesListResponse withListAutoscalingPoliciesResponse(openapisdk.models.shared.ListAutoscalingPoliciesResponse listAutoscalingPoliciesResponse) {
        this.listAutoscalingPoliciesResponse = listAutoscalingPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsAutoscalingPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}