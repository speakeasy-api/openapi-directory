package openapisdk.models.operations;



public class GetAllImageUrlsRequest {
    public GetAllImageUrlsPathParams pathParams;
    public GetAllImageUrlsRequest withPathParams(GetAllImageUrlsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllImageUrlsSecurity security;
    public GetAllImageUrlsRequest withSecurity(GetAllImageUrlsSecurity security) {
        this.security = security;
        return this;
    }
}