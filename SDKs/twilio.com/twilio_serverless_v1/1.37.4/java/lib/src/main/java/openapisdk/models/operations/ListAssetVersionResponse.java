package openapisdk.models.operations;



public class ListAssetVersionResponse {
    public String contentType;
    public ListAssetVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAssetVersionListAssetVersionResponse listAssetVersionResponse;
    public ListAssetVersionResponse withListAssetVersionResponse(ListAssetVersionListAssetVersionResponse listAssetVersionResponse) {
        this.listAssetVersionResponse = listAssetVersionResponse;
        return this;
    }
    public Long statusCode;
    public ListAssetVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}