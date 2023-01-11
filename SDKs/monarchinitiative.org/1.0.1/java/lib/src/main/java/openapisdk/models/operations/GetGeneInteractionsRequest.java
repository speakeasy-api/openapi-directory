package openapisdk.models.operations;



public class GetGeneInteractionsRequest {
    public GetGeneInteractionsPathParams pathParams;
    public GetGeneInteractionsRequest withPathParams(GetGeneInteractionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGeneInteractionsQueryParams queryParams;
    public GetGeneInteractionsRequest withQueryParams(GetGeneInteractionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}