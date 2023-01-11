package openapisdk.models.operations;



public class ContentOrdersListResponse {
    public String contentType;
    public ContentOrdersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersListResponse ordersListResponse;
    public ContentOrdersListResponse withOrdersListResponse(openapisdk.models.shared.OrdersListResponse ordersListResponse) {
        this.ordersListResponse = ordersListResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}