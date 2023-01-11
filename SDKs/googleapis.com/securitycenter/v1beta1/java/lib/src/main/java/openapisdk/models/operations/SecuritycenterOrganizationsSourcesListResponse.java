package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesListResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSourcesResponse listSourcesResponse;
    public SecuritycenterOrganizationsSourcesListResponse withListSourcesResponse(openapisdk.models.shared.ListSourcesResponse listSourcesResponse) {
        this.listSourcesResponse = listSourcesResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}