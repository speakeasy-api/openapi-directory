package openapisdk.models.operations;



public class GetCallRequest {
    public GetCallPathParams pathParams;
    public GetCallRequest withPathParams(GetCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCallSecurity security;
    public GetCallRequest withSecurity(GetCallSecurity security) {
        this.security = security;
        return this;
    }
}