package openapisdk.models.operations;



public class PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse {
    public String contentType;
    public PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}