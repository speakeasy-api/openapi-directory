package openapisdk.models.operations;



public class GetForecastResponse {
    public String contentType;
    public GetForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Forecast[][] forecastResults;
    public GetForecastResponse withForecastResults(openapisdk.models.shared.Forecast[][] forecastResults) {
        this.forecastResults = forecastResults;
        return this;
    }
}