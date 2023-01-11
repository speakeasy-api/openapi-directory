package openapisdk.models.operations;



public class GetPortfolioVideosRequest {
    public GetPortfolioVideosPathParams pathParams;
    public GetPortfolioVideosRequest withPathParams(GetPortfolioVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPortfolioVideosQueryParams queryParams;
    public GetPortfolioVideosRequest withQueryParams(GetPortfolioVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}