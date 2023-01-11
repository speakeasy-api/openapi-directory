package openapisdk.models.operations;



public class ContentOrdersCreatetestorderResponse {
    public String contentType;
    public ContentOrdersCreatetestorderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersCreateTestOrderResponse ordersCreateTestOrderResponse;
    public ContentOrdersCreatetestorderResponse withOrdersCreateTestOrderResponse(openapisdk.models.shared.OrdersCreateTestOrderResponse ordersCreateTestOrderResponse) {
        this.ordersCreateTestOrderResponse = ordersCreateTestOrderResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersCreatetestorderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}