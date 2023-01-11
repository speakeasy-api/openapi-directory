package openapisdk.models.operations;



public class GetOrdersOrderIdResponse {
    public String contentType;
    public GetOrdersOrderIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrder getOrder;
    public GetOrdersOrderIdResponse withGetOrder(openapisdk.models.shared.GetOrder getOrder) {
        this.getOrder = getOrder;
        return this;
    }
    public Long statusCode;
    public GetOrdersOrderIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}