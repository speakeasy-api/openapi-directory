package openapisdk.models.operations;



public class TopOndRequest {
    public TopOndQueryParams queryParams;
    public TopOndRequest withQueryParams(TopOndQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TopOndHeaders headers;
    public TopOndRequest withHeaders(TopOndHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TopOndSecurity security;
    public TopOndRequest withSecurity(TopOndSecurity security) {
        this.security = security;
        return this;
    }
}