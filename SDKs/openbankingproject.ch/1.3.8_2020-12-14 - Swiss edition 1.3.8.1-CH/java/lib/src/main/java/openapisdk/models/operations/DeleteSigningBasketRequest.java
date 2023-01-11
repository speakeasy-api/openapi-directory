package openapisdk.models.operations;



public class DeleteSigningBasketRequest {
    public DeleteSigningBasketPathParams pathParams;
    public DeleteSigningBasketRequest withPathParams(DeleteSigningBasketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSigningBasketHeaders headers;
    public DeleteSigningBasketRequest withHeaders(DeleteSigningBasketHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteSigningBasketSecurity security;
    public DeleteSigningBasketRequest withSecurity(DeleteSigningBasketSecurity security) {
        this.security = security;
        return this;
    }
}