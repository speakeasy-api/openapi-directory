package openapisdk.models.operations;



public class CloudresourcemanagerProjectsGetOrgPolicyResponse {
    public String contentType;
    public CloudresourcemanagerProjectsGetOrgPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrgPolicy orgPolicy;
    public CloudresourcemanagerProjectsGetOrgPolicyResponse withOrgPolicy(openapisdk.models.shared.OrgPolicy orgPolicy) {
        this.orgPolicy = orgPolicy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsGetOrgPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}