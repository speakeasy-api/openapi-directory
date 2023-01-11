package openapisdk.models.operations;



public class ContentOrdersRefundResponse {
    public String contentType;
    public ContentOrdersRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersRefundResponse ordersRefundResponse;
    public ContentOrdersRefundResponse withOrdersRefundResponse(openapisdk.models.shared.OrdersRefundResponse ordersRefundResponse) {
        this.ordersRefundResponse = ordersRefundResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}