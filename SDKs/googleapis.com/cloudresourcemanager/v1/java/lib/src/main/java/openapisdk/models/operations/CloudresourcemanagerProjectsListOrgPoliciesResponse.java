package openapisdk.models.operations;



public class CloudresourcemanagerProjectsListOrgPoliciesResponse {
    public String contentType;
    public CloudresourcemanagerProjectsListOrgPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOrgPoliciesResponse listOrgPoliciesResponse;
    public CloudresourcemanagerProjectsListOrgPoliciesResponse withListOrgPoliciesResponse(openapisdk.models.shared.ListOrgPoliciesResponse listOrgPoliciesResponse) {
        this.listOrgPoliciesResponse = listOrgPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsListOrgPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}