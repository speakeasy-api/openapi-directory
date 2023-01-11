package openapisdk.models.operations;



public class GetReviewsFormatRequest {
    public GetReviewsFormatPathParams pathParams;
    public GetReviewsFormatRequest withPathParams(GetReviewsFormatPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetReviewsFormatQueryParams queryParams;
    public GetReviewsFormatRequest withQueryParams(GetReviewsFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReviewsFormatSecurity security;
    public GetReviewsFormatRequest withSecurity(GetReviewsFormatSecurity security) {
        this.security = security;
        return this;
    }
}