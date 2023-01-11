package openapisdk.models.operations;



public class ContentOrdersGetResponse {
    public String contentType;
    public ContentOrdersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Order order;
    public ContentOrdersGetResponse withOrder(openapisdk.models.shared.Order order) {
        this.order = order;
        return this;
    }
    public Long statusCode;
    public ContentOrdersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}