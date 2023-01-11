package openapisdk.models.operations;



public class GetAllLocalTaxesRequest {
    public GetAllLocalTaxesPathParams pathParams;
    public GetAllLocalTaxesRequest withPathParams(GetAllLocalTaxesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllLocalTaxesSecurity security;
    public GetAllLocalTaxesRequest withSecurity(GetAllLocalTaxesSecurity security) {
        this.security = security;
        return this;
    }
}