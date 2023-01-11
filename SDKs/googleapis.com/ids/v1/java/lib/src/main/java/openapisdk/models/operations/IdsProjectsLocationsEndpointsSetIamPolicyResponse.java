package openapisdk.models.operations;



public class IdsProjectsLocationsEndpointsSetIamPolicyResponse {
    public String contentType;
    public IdsProjectsLocationsEndpointsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public IdsProjectsLocationsEndpointsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public IdsProjectsLocationsEndpointsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}