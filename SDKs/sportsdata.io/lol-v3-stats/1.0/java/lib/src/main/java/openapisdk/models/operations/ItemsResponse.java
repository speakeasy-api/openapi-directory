package openapisdk.models.operations;



public class ItemsResponse {
    public String contentType;
    public ItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] items;
    public ItemsResponse withItems(Object[] items) {
        this.items = items;
        return this;
    }
    public Long statusCode;
    public ItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}