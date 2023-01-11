package openapisdk.models.operations;



public class HealthResponse {
    public String contentType;
    public HealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OtoroshiHealth otoroshiHealth;
    public HealthResponse withOtoroshiHealth(openapisdk.models.shared.OtoroshiHealth otoroshiHealth) {
        this.otoroshiHealth = otoroshiHealth;
        return this;
    }
    public Long statusCode;
    public HealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}