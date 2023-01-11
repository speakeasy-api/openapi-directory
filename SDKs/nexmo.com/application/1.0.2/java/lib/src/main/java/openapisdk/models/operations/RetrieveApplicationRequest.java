package openapisdk.models.operations;



public class RetrieveApplicationRequest {
    public RetrieveApplicationPathParams pathParams;
    public RetrieveApplicationRequest withPathParams(RetrieveApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveApplicationQueryParams queryParams;
    public RetrieveApplicationRequest withQueryParams(RetrieveApplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}