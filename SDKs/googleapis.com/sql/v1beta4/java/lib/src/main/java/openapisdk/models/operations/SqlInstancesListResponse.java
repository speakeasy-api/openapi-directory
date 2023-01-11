package openapisdk.models.operations;



public class SqlInstancesListResponse {
    public String contentType;
    public SqlInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstancesListResponse instancesListResponse;
    public SqlInstancesListResponse withInstancesListResponse(openapisdk.models.shared.InstancesListResponse instancesListResponse) {
        this.instancesListResponse = instancesListResponse;
        return this;
    }
    public Long statusCode;
    public SqlInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}