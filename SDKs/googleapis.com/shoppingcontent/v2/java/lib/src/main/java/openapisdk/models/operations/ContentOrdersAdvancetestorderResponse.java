package openapisdk.models.operations;



public class ContentOrdersAdvancetestorderResponse {
    public String contentType;
    public ContentOrdersAdvancetestorderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersAdvanceTestOrderResponse ordersAdvanceTestOrderResponse;
    public ContentOrdersAdvancetestorderResponse withOrdersAdvanceTestOrderResponse(openapisdk.models.shared.OrdersAdvanceTestOrderResponse ordersAdvanceTestOrderResponse) {
        this.ordersAdvanceTestOrderResponse = ordersAdvanceTestOrderResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersAdvancetestorderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}