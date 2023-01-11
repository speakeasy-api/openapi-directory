package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsSearchResponse {
    public String contentType;
    public CloudresourcemanagerOrganizationsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchOrganizationsResponse searchOrganizationsResponse;
    public CloudresourcemanagerOrganizationsSearchResponse withSearchOrganizationsResponse(openapisdk.models.shared.SearchOrganizationsResponse searchOrganizationsResponse) {
        this.searchOrganizationsResponse = searchOrganizationsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerOrganizationsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}