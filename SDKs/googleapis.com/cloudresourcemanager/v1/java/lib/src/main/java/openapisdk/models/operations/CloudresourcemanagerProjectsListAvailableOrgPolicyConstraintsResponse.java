package openapisdk.models.operations;



public class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse {
    public String contentType;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAvailableOrgPolicyConstraintsResponse listAvailableOrgPolicyConstraintsResponse;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse withListAvailableOrgPolicyConstraintsResponse(openapisdk.models.shared.ListAvailableOrgPolicyConstraintsResponse listAvailableOrgPolicyConstraintsResponse) {
        this.listAvailableOrgPolicyConstraintsResponse = listAvailableOrgPolicyConstraintsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}