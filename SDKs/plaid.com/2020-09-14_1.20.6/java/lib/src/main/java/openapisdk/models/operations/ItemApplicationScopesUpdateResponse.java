package openapisdk.models.operations;



public class ItemApplicationScopesUpdateResponse {
    public String contentType;
    public ItemApplicationScopesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public ItemApplicationScopesUpdateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ItemApplicationScopesUpdateResponse itemApplicationScopesUpdateResponse;
    public ItemApplicationScopesUpdateResponse withItemApplicationScopesUpdateResponse(openapisdk.models.shared.ItemApplicationScopesUpdateResponse itemApplicationScopesUpdateResponse) {
        this.itemApplicationScopesUpdateResponse = itemApplicationScopesUpdateResponse;
        return this;
    }
    public Long statusCode;
    public ItemApplicationScopesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}