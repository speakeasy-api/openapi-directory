package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}