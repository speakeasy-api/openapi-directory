package openapisdk.models.operations;



public class GetEditorialVideoRequest {
    public GetEditorialVideoPathParams pathParams;
    public GetEditorialVideoRequest withPathParams(GetEditorialVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEditorialVideoQueryParams queryParams;
    public GetEditorialVideoRequest withQueryParams(GetEditorialVideoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialVideoSecurity security;
    public GetEditorialVideoRequest withSecurity(GetEditorialVideoSecurity security) {
        this.security = security;
        return this;
    }
}