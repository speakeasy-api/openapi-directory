package openapisdk.models.operations;



public class GetImagePerformancesRequest {
    public GetImagePerformancesPathParams pathParams;
    public GetImagePerformancesRequest withPathParams(GetImagePerformancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImagePerformancesQueryParams queryParams;
    public GetImagePerformancesRequest withQueryParams(GetImagePerformancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImagePerformancesHeaders headers;
    public GetImagePerformancesRequest withHeaders(GetImagePerformancesHeaders headers) {
        this.headers = headers;
        return this;
    }
}