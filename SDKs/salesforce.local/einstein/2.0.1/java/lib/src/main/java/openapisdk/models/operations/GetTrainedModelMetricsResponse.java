package openapisdk.models.operations;



public class GetTrainedModelMetricsResponse {
    public String contentType;
    public GetTrainedModelMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Metrics metrics;
    public GetTrainedModelMetricsResponse withMetrics(openapisdk.models.shared.Metrics metrics) {
        this.metrics = metrics;
        return this;
    }
    public Long statusCode;
    public GetTrainedModelMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}