package openapisdk.models.operations;



public class ItemCreatePublicTokenResponse {
    public String contentType;
    public ItemCreatePublicTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> itemPublicTokenCreateResponse;
    public ItemCreatePublicTokenResponse withItemPublicTokenCreateResponse(java.util.Map<String, Object> itemPublicTokenCreateResponse) {
        this.itemPublicTokenCreateResponse = itemPublicTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public ItemCreatePublicTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}