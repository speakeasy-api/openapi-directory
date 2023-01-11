package openapisdk.models.operations;



public class ContentOrdersCancellineitemResponse {
    public String contentType;
    public ContentOrdersCancellineitemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersCancelLineItemResponse ordersCancelLineItemResponse;
    public ContentOrdersCancellineitemResponse withOrdersCancelLineItemResponse(openapisdk.models.shared.OrdersCancelLineItemResponse ordersCancelLineItemResponse) {
        this.ordersCancelLineItemResponse = ordersCancelLineItemResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersCancellineitemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}