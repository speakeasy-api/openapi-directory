package openapisdk.models.operations;



public class RunsForRouteRequest {
    public RunsForRoutePathParams pathParams;
    public RunsForRouteRequest withPathParams(RunsForRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunsForRouteQueryParams queryParams;
    public RunsForRouteRequest withQueryParams(RunsForRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}