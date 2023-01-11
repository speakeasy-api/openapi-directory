package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}