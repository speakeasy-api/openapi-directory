package openapisdk.models.operations;



public class ContentOrdersReturnrefundlineitemResponse {
    public String contentType;
    public ContentOrdersReturnrefundlineitemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersReturnRefundLineItemResponse ordersReturnRefundLineItemResponse;
    public ContentOrdersReturnrefundlineitemResponse withOrdersReturnRefundLineItemResponse(openapisdk.models.shared.OrdersReturnRefundLineItemResponse ordersReturnRefundLineItemResponse) {
        this.ordersReturnRefundLineItemResponse = ordersReturnRefundLineItemResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersReturnrefundlineitemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}