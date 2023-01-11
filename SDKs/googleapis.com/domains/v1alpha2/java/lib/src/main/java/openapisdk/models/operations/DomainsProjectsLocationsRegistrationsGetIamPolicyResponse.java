package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsGetIamPolicyResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DomainsProjectsLocationsRegistrationsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}