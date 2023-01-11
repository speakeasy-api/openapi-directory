package openapisdk.models.operations;



public class DfareportingOrdersListResponse {
    public String contentType;
    public DfareportingOrdersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersListResponse ordersListResponse;
    public DfareportingOrdersListResponse withOrdersListResponse(openapisdk.models.shared.OrdersListResponse ordersListResponse) {
        this.ordersListResponse = ordersListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingOrdersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}