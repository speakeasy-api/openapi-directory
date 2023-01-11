package openapisdk.models.operations;



public class ContentOrdersCustombatchResponse {
    public String contentType;
    public ContentOrdersCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersCustomBatchResponse ordersCustomBatchResponse;
    public ContentOrdersCustombatchResponse withOrdersCustomBatchResponse(openapisdk.models.shared.OrdersCustomBatchResponse ordersCustomBatchResponse) {
        this.ordersCustomBatchResponse = ordersCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}