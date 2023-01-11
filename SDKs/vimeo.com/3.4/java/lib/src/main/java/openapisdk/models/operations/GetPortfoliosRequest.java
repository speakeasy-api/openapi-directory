package openapisdk.models.operations;



public class GetPortfoliosRequest {
    public GetPortfoliosPathParams pathParams;
    public GetPortfoliosRequest withPathParams(GetPortfoliosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPortfoliosQueryParams queryParams;
    public GetPortfoliosRequest withQueryParams(GetPortfoliosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}