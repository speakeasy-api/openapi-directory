package openapisdk.models.operations;



public class ContentOrdersRejectreturnlineitemResponse {
    public String contentType;
    public ContentOrdersRejectreturnlineitemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersRejectReturnLineItemResponse ordersRejectReturnLineItemResponse;
    public ContentOrdersRejectreturnlineitemResponse withOrdersRejectReturnLineItemResponse(openapisdk.models.shared.OrdersRejectReturnLineItemResponse ordersRejectReturnLineItemResponse) {
        this.ordersRejectReturnLineItemResponse = ordersRejectReturnLineItemResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersRejectreturnlineitemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}