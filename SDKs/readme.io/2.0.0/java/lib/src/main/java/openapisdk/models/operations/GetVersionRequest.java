package openapisdk.models.operations;



public class GetVersionRequest {
    public GetVersionPathParams pathParams;
    public GetVersionRequest withPathParams(GetVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVersionSecurity security;
    public GetVersionRequest withSecurity(GetVersionSecurity security) {
        this.security = security;
        return this;
    }
}