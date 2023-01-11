package openapisdk.models.operations;



public class ContentOrdersUpdatelineitemshippingdetailsResponse {
    public String contentType;
    public ContentOrdersUpdatelineitemshippingdetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersUpdateLineItemShippingDetailsResponse ordersUpdateLineItemShippingDetailsResponse;
    public ContentOrdersUpdatelineitemshippingdetailsResponse withOrdersUpdateLineItemShippingDetailsResponse(openapisdk.models.shared.OrdersUpdateLineItemShippingDetailsResponse ordersUpdateLineItemShippingDetailsResponse) {
        this.ordersUpdateLineItemShippingDetailsResponse = ordersUpdateLineItemShippingDetailsResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersUpdatelineitemshippingdetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}