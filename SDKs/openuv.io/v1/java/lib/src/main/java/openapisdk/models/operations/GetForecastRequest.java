package openapisdk.models.operations;



public class GetForecastRequest {
    public GetForecastQueryParams queryParams;
    public GetForecastRequest withQueryParams(GetForecastQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetForecastHeaders headers;
    public GetForecastRequest withHeaders(GetForecastHeaders headers) {
        this.headers = headers;
        return this;
    }
}