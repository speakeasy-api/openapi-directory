package openapisdk.models.operations;



public class IdsProjectsLocationsEndpointsGetIamPolicyResponse {
    public String contentType;
    public IdsProjectsLocationsEndpointsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public IdsProjectsLocationsEndpointsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public IdsProjectsLocationsEndpointsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}