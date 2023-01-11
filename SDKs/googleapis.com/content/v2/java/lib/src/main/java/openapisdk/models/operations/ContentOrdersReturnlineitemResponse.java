package openapisdk.models.operations;



public class ContentOrdersReturnlineitemResponse {
    public String contentType;
    public ContentOrdersReturnlineitemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersReturnLineItemResponse ordersReturnLineItemResponse;
    public ContentOrdersReturnlineitemResponse withOrdersReturnLineItemResponse(openapisdk.models.shared.OrdersReturnLineItemResponse ordersReturnLineItemResponse) {
        this.ordersReturnLineItemResponse = ordersReturnLineItemResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersReturnlineitemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}