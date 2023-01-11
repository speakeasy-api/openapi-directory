package openapisdk.models.operations;



public class GetUserContentUserJsonRequest {
    public GetUserContentUserJsonQueryParams queryParams;
    public GetUserContentUserJsonRequest withQueryParams(GetUserContentUserJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserContentUserJsonSecurity security;
    public GetUserContentUserJsonRequest withSecurity(GetUserContentUserJsonSecurity security) {
        this.security = security;
        return this;
    }
}