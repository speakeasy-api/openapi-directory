package openapisdk.models.operations;



public class ContentOrdersUpdateshipmentResponse {
    public String contentType;
    public ContentOrdersUpdateshipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersUpdateShipmentResponse ordersUpdateShipmentResponse;
    public ContentOrdersUpdateshipmentResponse withOrdersUpdateShipmentResponse(openapisdk.models.shared.OrdersUpdateShipmentResponse ordersUpdateShipmentResponse) {
        this.ordersUpdateShipmentResponse = ordersUpdateShipmentResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersUpdateshipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}