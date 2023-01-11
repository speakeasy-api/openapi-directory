package openapisdk.models.operations;



public class GetWeatherDisplayRequest {
    public GetWeatherDisplayPathParams pathParams;
    public GetWeatherDisplayRequest withPathParams(GetWeatherDisplayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWeatherDisplayQueryParams queryParams;
    public GetWeatherDisplayRequest withQueryParams(GetWeatherDisplayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}