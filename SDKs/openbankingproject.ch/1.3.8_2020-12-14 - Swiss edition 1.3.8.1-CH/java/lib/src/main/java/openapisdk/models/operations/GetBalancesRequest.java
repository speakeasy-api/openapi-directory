package openapisdk.models.operations;



public class GetBalancesRequest {
    public GetBalancesPathParams pathParams;
    public GetBalancesRequest withPathParams(GetBalancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBalancesHeaders headers;
    public GetBalancesRequest withHeaders(GetBalancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetBalancesSecurity security;
    public GetBalancesRequest withSecurity(GetBalancesSecurity security) {
        this.security = security;
        return this;
    }
}