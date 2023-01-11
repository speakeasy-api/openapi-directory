package openapisdk.models.operations;



public class GetAllOptionsRequest {
    public GetAllOptionsPathParams pathParams;
    public GetAllOptionsRequest withPathParams(GetAllOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllOptionsSecurity security;
    public GetAllOptionsRequest withSecurity(GetAllOptionsSecurity security) {
        this.security = security;
        return this;
    }
}