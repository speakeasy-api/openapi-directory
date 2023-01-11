package openapisdk.models.operations;



public class OrdersRequest {
    public OrdersPathParams pathParams;
    public OrdersRequest withPathParams(OrdersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrdersHeaders headers;
    public OrdersRequest withHeaders(OrdersHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OrdersSecurity security;
    public OrdersRequest withSecurity(OrdersSecurity security) {
        this.security = security;
        return this;
    }
}