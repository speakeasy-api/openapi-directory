package openapisdk.models.operations;



public class SqlInstancesPromoteReplicaResponse {
    public String contentType;
    public SqlInstancesPromoteReplicaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesPromoteReplicaResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesPromoteReplicaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}