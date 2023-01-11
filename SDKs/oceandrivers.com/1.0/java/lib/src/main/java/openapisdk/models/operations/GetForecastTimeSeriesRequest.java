package openapisdk.models.operations;



public class GetForecastTimeSeriesRequest {
    public GetForecastTimeSeriesPathParams pathParams;
    public GetForecastTimeSeriesRequest withPathParams(GetForecastTimeSeriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetForecastTimeSeriesQueryParams queryParams;
    public GetForecastTimeSeriesRequest withQueryParams(GetForecastTimeSeriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}