package openapisdk.models.operations;



public class GetImageRequest {
    public GetImagePathParams pathParams;
    public GetImageRequest withPathParams(GetImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImageQueryParams queryParams;
    public GetImageRequest withQueryParams(GetImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageSecurity security;
    public GetImageRequest withSecurity(GetImageSecurity security) {
        this.security = security;
        return this;
    }
}