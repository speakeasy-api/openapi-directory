package openapisdk.models.operations;



public class GetIterationPerformanceRequest {
    public GetIterationPerformancePathParams pathParams;
    public GetIterationPerformanceRequest withPathParams(GetIterationPerformancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIterationPerformanceQueryParams queryParams;
    public GetIterationPerformanceRequest withQueryParams(GetIterationPerformanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIterationPerformanceHeaders headers;
    public GetIterationPerformanceRequest withHeaders(GetIterationPerformanceHeaders headers) {
        this.headers = headers;
        return this;
    }
}