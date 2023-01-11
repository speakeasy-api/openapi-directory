package openapisdk.models.operations;



public class SqlInstancesStopReplicaResponse {
    public String contentType;
    public SqlInstancesStopReplicaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesStopReplicaResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesStopReplicaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}