package openapisdk.models.operations;



public class GetSimilarVideosRequest {
    public GetSimilarVideosPathParams pathParams;
    public GetSimilarVideosRequest withPathParams(GetSimilarVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSimilarVideosQueryParams queryParams;
    public GetSimilarVideosRequest withQueryParams(GetSimilarVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSimilarVideosSecurity security;
    public GetSimilarVideosRequest withSecurity(GetSimilarVideosSecurity security) {
        this.security = security;
        return this;
    }
}