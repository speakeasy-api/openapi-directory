package openapisdk.models.operations;



public class RedisProjectsLocationsInstancesGetAuthStringResponse {
    public String contentType;
    public RedisProjectsLocationsInstancesGetAuthStringResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstanceAuthString instanceAuthString;
    public RedisProjectsLocationsInstancesGetAuthStringResponse withInstanceAuthString(openapisdk.models.shared.InstanceAuthString instanceAuthString) {
        this.instanceAuthString = instanceAuthString;
        return this;
    }
    public Long statusCode;
    public RedisProjectsLocationsInstancesGetAuthStringResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}