package openapisdk.models.operations;



public class SecuritycenterOrganizationsAssetsListResponse {
    public String contentType;
    public SecuritycenterOrganizationsAssetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssetsResponse listAssetsResponse;
    public SecuritycenterOrganizationsAssetsListResponse withListAssetsResponse(openapisdk.models.shared.ListAssetsResponse listAssetsResponse) {
        this.listAssetsResponse = listAssetsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsAssetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}