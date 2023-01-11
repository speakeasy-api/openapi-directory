package openapisdk.models.operations;



public class ContentOrdersShiplineitemsResponse {
    public String contentType;
    public ContentOrdersShiplineitemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersShipLineItemsResponse ordersShipLineItemsResponse;
    public ContentOrdersShiplineitemsResponse withOrdersShipLineItemsResponse(openapisdk.models.shared.OrdersShipLineItemsResponse ordersShipLineItemsResponse) {
        this.ordersShipLineItemsResponse = ordersShipLineItemsResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersShiplineitemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}