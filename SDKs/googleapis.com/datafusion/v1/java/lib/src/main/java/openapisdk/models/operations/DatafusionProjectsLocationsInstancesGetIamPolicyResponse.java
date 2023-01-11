package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesGetIamPolicyResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DatafusionProjectsLocationsInstancesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}