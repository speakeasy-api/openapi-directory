package openapisdk.models.operations;



public class ListAssetResponse {
    public String contentType;
    public ListAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAssetListAssetResponse listAssetResponse;
    public ListAssetResponse withListAssetResponse(ListAssetListAssetResponse listAssetResponse) {
        this.listAssetResponse = listAssetResponse;
        return this;
    }
    public Long statusCode;
    public ListAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}