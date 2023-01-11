package openapisdk.models.operations;



public class RunsForRunRequest {
    public RunsForRunPathParams pathParams;
    public RunsForRunRequest withPathParams(RunsForRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunsForRunQueryParams queryParams;
    public RunsForRunRequest withQueryParams(RunsForRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}