package openapisdk.models.operations;



public class ItemImportResponse {
    public String contentType;
    public ItemImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> itemImportResponse;
    public ItemImportResponse withItemImportResponse(java.util.Map<String, Object> itemImportResponse) {
        this.itemImportResponse = itemImportResponse;
        return this;
    }
    public Long statusCode;
    public ItemImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}