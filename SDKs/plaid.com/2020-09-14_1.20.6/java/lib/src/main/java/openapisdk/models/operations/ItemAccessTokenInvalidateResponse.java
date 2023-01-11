package openapisdk.models.operations;



public class ItemAccessTokenInvalidateResponse {
    public String contentType;
    public ItemAccessTokenInvalidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> itemAccessTokenInvalidateResponse;
    public ItemAccessTokenInvalidateResponse withItemAccessTokenInvalidateResponse(java.util.Map<String, Object> itemAccessTokenInvalidateResponse) {
        this.itemAccessTokenInvalidateResponse = itemAccessTokenInvalidateResponse;
        return this;
    }
    public Long statusCode;
    public ItemAccessTokenInvalidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}