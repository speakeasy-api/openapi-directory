package openapisdk.models.operations;



public class ItemApplicationListResponse {
    public String contentType;
    public ItemApplicationListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public ItemApplicationListResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ItemApplicationListResponse itemApplicationListResponse;
    public ItemApplicationListResponse withItemApplicationListResponse(openapisdk.models.shared.ItemApplicationListResponse itemApplicationListResponse) {
        this.itemApplicationListResponse = itemApplicationListResponse;
        return this;
    }
    public Long statusCode;
    public ItemApplicationListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}