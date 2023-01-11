package openapisdk.models.operations;



public class AnalyticsDataGaGetResponse {
    public String contentType;
    public AnalyticsDataGaGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GaData gaData;
    public AnalyticsDataGaGetResponse withGaData(openapisdk.models.shared.GaData gaData) {
        this.gaData = gaData;
        return this;
    }
    public Long statusCode;
    public AnalyticsDataGaGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}