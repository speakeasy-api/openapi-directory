package openapisdk.models.operations;



public class ContentOrdersSetlineitemmetadataResponse {
    public String contentType;
    public ContentOrdersSetlineitemmetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersSetLineItemMetadataResponse ordersSetLineItemMetadataResponse;
    public ContentOrdersSetlineitemmetadataResponse withOrdersSetLineItemMetadataResponse(openapisdk.models.shared.OrdersSetLineItemMetadataResponse ordersSetLineItemMetadataResponse) {
        this.ordersSetLineItemMetadataResponse = ordersSetLineItemMetadataResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersSetlineitemmetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}