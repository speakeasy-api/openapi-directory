package openapisdk.models.operations;



public class GetUpdatedEditorialImagesRequest {
    public GetUpdatedEditorialImagesQueryParams queryParams;
    public GetUpdatedEditorialImagesRequest withQueryParams(GetUpdatedEditorialImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdatedEditorialImagesSecurity security;
    public GetUpdatedEditorialImagesRequest withSecurity(GetUpdatedEditorialImagesSecurity security) {
        this.security = security;
        return this;
    }
}