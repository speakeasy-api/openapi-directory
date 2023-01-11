package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesSetIamPolicyResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public SecuritycenterOrganizationsSourcesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}