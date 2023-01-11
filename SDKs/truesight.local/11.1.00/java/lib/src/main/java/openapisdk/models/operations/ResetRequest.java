package openapisdk.models.operations;



public class ResetRequest {
    public ResetPathParams pathParams;
    public ResetRequest withPathParams(ResetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetQueryParams queryParams;
    public ResetRequest withQueryParams(ResetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}