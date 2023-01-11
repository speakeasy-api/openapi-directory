package openapisdk.models.operations;



public class GetHealthCheckResponse {
    public String contentType;
    public GetHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHealthCheckResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.HealthCheck healthCheck;
    public GetHealthCheckResponse withHealthCheck(openapisdk.models.shared.HealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    public Long statusCode;
    public GetHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}