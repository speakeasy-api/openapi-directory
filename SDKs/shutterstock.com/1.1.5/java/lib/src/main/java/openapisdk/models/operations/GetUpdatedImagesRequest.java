package openapisdk.models.operations;



public class GetUpdatedImagesRequest {
    public GetUpdatedImagesQueryParams queryParams;
    public GetUpdatedImagesRequest withQueryParams(GetUpdatedImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdatedImagesSecurity security;
    public GetUpdatedImagesRequest withSecurity(GetUpdatedImagesSecurity security) {
        this.security = security;
        return this;
    }
}