package openapisdk.models.operations;



public class GetUserResponsivityRequest {
    public GetUserResponsivityPathParams pathParams;
    public GetUserResponsivityRequest withPathParams(GetUserResponsivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserResponsivityQueryParams queryParams;
    public GetUserResponsivityRequest withQueryParams(GetUserResponsivityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserResponsivitySecurity security;
    public GetUserResponsivityRequest withSecurity(GetUserResponsivitySecurity security) {
        this.security = security;
        return this;
    }
}