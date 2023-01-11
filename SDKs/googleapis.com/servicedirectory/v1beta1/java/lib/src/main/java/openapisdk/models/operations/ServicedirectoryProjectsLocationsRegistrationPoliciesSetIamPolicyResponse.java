package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}