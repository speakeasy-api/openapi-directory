package openapisdk.models.operations;



public class ContentOrdersCreatetestreturnResponse {
    public String contentType;
    public ContentOrdersCreatetestreturnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersCreateTestReturnResponse ordersCreateTestReturnResponse;
    public ContentOrdersCreatetestreturnResponse withOrdersCreateTestReturnResponse(openapisdk.models.shared.OrdersCreateTestReturnResponse ordersCreateTestReturnResponse) {
        this.ordersCreateTestReturnResponse = ordersCreateTestReturnResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersCreatetestreturnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}