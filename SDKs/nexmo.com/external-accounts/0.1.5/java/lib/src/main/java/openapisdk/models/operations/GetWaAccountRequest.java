package openapisdk.models.operations;



public class GetWaAccountRequest {
    public GetWaAccountPathParams pathParams;
    public GetWaAccountRequest withPathParams(GetWaAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWaAccountSecurity security;
    public GetWaAccountRequest withSecurity(GetWaAccountSecurity security) {
        this.security = security;
        return this;
    }
}