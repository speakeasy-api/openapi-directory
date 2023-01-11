package openapisdk.models.operations;



public class ReportsIndexRequest {
    public ReportsIndexPathParams pathParams;
    public ReportsIndexRequest withPathParams(ReportsIndexPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportsIndexQueryParams queryParams;
    public ReportsIndexRequest withQueryParams(ReportsIndexQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}