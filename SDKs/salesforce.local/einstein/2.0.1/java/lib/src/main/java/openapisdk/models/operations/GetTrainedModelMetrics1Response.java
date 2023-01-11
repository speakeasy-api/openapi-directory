package openapisdk.models.operations;



public class GetTrainedModelMetrics1Response {
    public String contentType;
    public GetTrainedModelMetrics1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Metrics metrics;
    public GetTrainedModelMetrics1Response withMetrics(openapisdk.models.shared.Metrics metrics) {
        this.metrics = metrics;
        return this;
    }
    public Long statusCode;
    public GetTrainedModelMetrics1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}