package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsSetIamPolicyResponse {
    public String contentType;
    public CloudresourcemanagerOrganizationsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudresourcemanagerOrganizationsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerOrganizationsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}