package openapisdk.models.operations;



public class ContentOrdersInstorerefundlineitemResponse {
    public String contentType;
    public ContentOrdersInstorerefundlineitemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersInStoreRefundLineItemResponse ordersInStoreRefundLineItemResponse;
    public ContentOrdersInstorerefundlineitemResponse withOrdersInStoreRefundLineItemResponse(openapisdk.models.shared.OrdersInStoreRefundLineItemResponse ordersInStoreRefundLineItemResponse) {
        this.ordersInStoreRefundLineItemResponse = ordersInStoreRefundLineItemResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersInstorerefundlineitemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}