package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesSetIamPolicyResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DatafusionProjectsLocationsInstancesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}