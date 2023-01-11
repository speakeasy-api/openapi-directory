package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsSetIamPolicyResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}