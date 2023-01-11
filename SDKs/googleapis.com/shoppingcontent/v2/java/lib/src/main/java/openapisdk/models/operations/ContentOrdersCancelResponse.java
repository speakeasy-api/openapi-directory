package openapisdk.models.operations;



public class ContentOrdersCancelResponse {
    public String contentType;
    public ContentOrdersCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersCancelResponse ordersCancelResponse;
    public ContentOrdersCancelResponse withOrdersCancelResponse(openapisdk.models.shared.OrdersCancelResponse ordersCancelResponse) {
        this.ordersCancelResponse = ordersCancelResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}