package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesGetIamPolicyResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public SecuritycenterOrganizationsSourcesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}