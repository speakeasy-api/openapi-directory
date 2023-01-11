package openapisdk.models.operations;



public class HealthCheckResponse {
    public String contentType;
    public HealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public HealthCheck200ApplicationJson healthCheck200ApplicationJSONObject;
    public HealthCheckResponse withHealthCheck200ApplicationJsonObject(HealthCheck200ApplicationJson healthCheck200ApplicationJSONObject) {
        this.healthCheck200ApplicationJSONObject = healthCheck200ApplicationJSONObject;
        return this;
    }
}