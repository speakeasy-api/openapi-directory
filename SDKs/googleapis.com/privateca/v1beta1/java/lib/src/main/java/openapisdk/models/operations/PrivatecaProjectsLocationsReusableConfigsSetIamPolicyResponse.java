package openapisdk.models.operations;



public class PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse {
    public String contentType;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}