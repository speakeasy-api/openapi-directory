package openapisdk.models.operations;



public class SqlInstancesListServerCasResponse {
    public String contentType;
    public SqlInstancesListServerCasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstancesListServerCasResponse instancesListServerCasResponse;
    public SqlInstancesListServerCasResponse withInstancesListServerCasResponse(openapisdk.models.shared.InstancesListServerCasResponse instancesListServerCasResponse) {
        this.instancesListServerCasResponse = instancesListServerCasResponse;
        return this;
    }
    public Long statusCode;
    public SqlInstancesListServerCasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}