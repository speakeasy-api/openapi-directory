package openapisdk.models.operations;



public class PolyAssetsListResponse {
    public String contentType;
    public PolyAssetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssetsResponse listAssetsResponse;
    public PolyAssetsListResponse withListAssetsResponse(openapisdk.models.shared.ListAssetsResponse listAssetsResponse) {
        this.listAssetsResponse = listAssetsResponse;
        return this;
    }
    public Long statusCode;
    public PolyAssetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}