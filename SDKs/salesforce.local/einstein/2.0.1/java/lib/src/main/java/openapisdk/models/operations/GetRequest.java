package openapisdk.models.operations;



public class GetRequest {
    public GetPathParams pathParams;
    public GetRequest withPathParams(GetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSecurity security;
    public GetRequest withSecurity(GetSecurity security) {
        this.security = security;
        return this;
    }
}