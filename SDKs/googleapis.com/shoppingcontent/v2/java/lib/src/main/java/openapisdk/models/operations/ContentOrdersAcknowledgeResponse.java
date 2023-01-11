package openapisdk.models.operations;



public class ContentOrdersAcknowledgeResponse {
    public String contentType;
    public ContentOrdersAcknowledgeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersAcknowledgeResponse ordersAcknowledgeResponse;
    public ContentOrdersAcknowledgeResponse withOrdersAcknowledgeResponse(openapisdk.models.shared.OrdersAcknowledgeResponse ordersAcknowledgeResponse) {
        this.ordersAcknowledgeResponse = ordersAcknowledgeResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersAcknowledgeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}