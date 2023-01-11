package openapisdk.models.operations;



public class ItemGetResponse {
    public String contentType;
    public ItemGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public ItemGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> itemGetResponse;
    public ItemGetResponse withItemGetResponse(java.util.Map<String, Object> itemGetResponse) {
        this.itemGetResponse = itemGetResponse;
        return this;
    }
    public Long statusCode;
    public ItemGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}