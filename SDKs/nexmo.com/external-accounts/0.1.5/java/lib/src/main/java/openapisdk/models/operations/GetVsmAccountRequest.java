package openapisdk.models.operations;



public class GetVsmAccountRequest {
    public GetVsmAccountPathParams pathParams;
    public GetVsmAccountRequest withPathParams(GetVsmAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVsmAccountSecurity security;
    public GetVsmAccountRequest withSecurity(GetVsmAccountSecurity security) {
        this.security = security;
        return this;
    }
}