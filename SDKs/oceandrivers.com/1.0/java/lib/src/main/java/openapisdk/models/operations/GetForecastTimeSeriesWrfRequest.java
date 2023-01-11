package openapisdk.models.operations;



public class GetForecastTimeSeriesWrfRequest {
    public GetForecastTimeSeriesWrfPathParams pathParams;
    public GetForecastTimeSeriesWrfRequest withPathParams(GetForecastTimeSeriesWrfPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetForecastTimeSeriesWrfQueryParams queryParams;
    public GetForecastTimeSeriesWrfRequest withQueryParams(GetForecastTimeSeriesWrfQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}