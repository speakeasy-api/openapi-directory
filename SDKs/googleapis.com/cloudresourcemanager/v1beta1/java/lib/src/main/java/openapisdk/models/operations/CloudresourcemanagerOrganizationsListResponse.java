package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsListResponse {
    public String contentType;
    public CloudresourcemanagerOrganizationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOrganizationsResponse listOrganizationsResponse;
    public CloudresourcemanagerOrganizationsListResponse withListOrganizationsResponse(openapisdk.models.shared.ListOrganizationsResponse listOrganizationsResponse) {
        this.listOrganizationsResponse = listOrganizationsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerOrganizationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}