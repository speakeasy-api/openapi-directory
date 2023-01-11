package openapisdk.models.operations;



public class CloudassetAssetsListResponse {
    public String contentType;
    public CloudassetAssetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssetsResponse listAssetsResponse;
    public CloudassetAssetsListResponse withListAssetsResponse(openapisdk.models.shared.ListAssetsResponse listAssetsResponse) {
        this.listAssetsResponse = listAssetsResponse;
        return this;
    }
    public Long statusCode;
    public CloudassetAssetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}