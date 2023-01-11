package openapisdk.models.operations;



public class CloudresourcemanagerProjectsSetOrgPolicyResponse {
    public String contentType;
    public CloudresourcemanagerProjectsSetOrgPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrgPolicy orgPolicy;
    public CloudresourcemanagerProjectsSetOrgPolicyResponse withOrgPolicy(openapisdk.models.shared.OrgPolicy orgPolicy) {
        this.orgPolicy = orgPolicy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsSetOrgPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}