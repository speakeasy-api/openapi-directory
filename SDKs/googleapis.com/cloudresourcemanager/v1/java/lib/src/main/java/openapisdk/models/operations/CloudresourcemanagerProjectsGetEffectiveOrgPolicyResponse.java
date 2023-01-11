package openapisdk.models.operations;



public class CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse {
    public String contentType;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrgPolicy orgPolicy;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse withOrgPolicy(openapisdk.models.shared.OrgPolicy orgPolicy) {
        this.orgPolicy = orgPolicy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}