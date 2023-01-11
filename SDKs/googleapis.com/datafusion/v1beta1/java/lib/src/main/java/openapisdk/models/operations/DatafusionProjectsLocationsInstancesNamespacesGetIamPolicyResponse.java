package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}