package openapisdk.models.operations;



public class RedisProjectsLocationsInstancesFailoverResponse {
    public String contentType;
    public RedisProjectsLocationsInstancesFailoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public RedisProjectsLocationsInstancesFailoverResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public RedisProjectsLocationsInstancesFailoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}