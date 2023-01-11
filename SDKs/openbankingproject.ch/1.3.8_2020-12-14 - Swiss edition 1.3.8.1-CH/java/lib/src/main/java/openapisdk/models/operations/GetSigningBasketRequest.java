package openapisdk.models.operations;



public class GetSigningBasketRequest {
    public GetSigningBasketPathParams pathParams;
    public GetSigningBasketRequest withPathParams(GetSigningBasketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSigningBasketHeaders headers;
    public GetSigningBasketRequest withHeaders(GetSigningBasketHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetSigningBasketSecurity security;
    public GetSigningBasketRequest withSecurity(GetSigningBasketSecurity security) {
        this.security = security;
        return this;
    }
}