package openapisdk.models.operations;



public class SecuritycenterProjectsAssetsListResponse {
    public String contentType;
    public SecuritycenterProjectsAssetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssetsResponse listAssetsResponse;
    public SecuritycenterProjectsAssetsListResponse withListAssetsResponse(openapisdk.models.shared.ListAssetsResponse listAssetsResponse) {
        this.listAssetsResponse = listAssetsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsAssetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}