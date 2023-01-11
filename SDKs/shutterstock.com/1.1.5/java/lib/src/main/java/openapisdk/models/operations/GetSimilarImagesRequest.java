package openapisdk.models.operations;



public class GetSimilarImagesRequest {
    public GetSimilarImagesPathParams pathParams;
    public GetSimilarImagesRequest withPathParams(GetSimilarImagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSimilarImagesQueryParams queryParams;
    public GetSimilarImagesRequest withQueryParams(GetSimilarImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSimilarImagesSecurity security;
    public GetSimilarImagesRequest withSecurity(GetSimilarImagesSecurity security) {
        this.security = security;
        return this;
    }
}