package openapisdk.models.operations;



public class GetEditorialImageRequest {
    public GetEditorialImagePathParams pathParams;
    public GetEditorialImageRequest withPathParams(GetEditorialImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEditorialImageQueryParams queryParams;
    public GetEditorialImageRequest withQueryParams(GetEditorialImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialImageSecurity security;
    public GetEditorialImageRequest withSecurity(GetEditorialImageSecurity security) {
        this.security = security;
        return this;
    }
}