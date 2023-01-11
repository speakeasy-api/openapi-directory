package openapisdk.models.operations;



public class BatchProjectsLocationsOperationsGetResponse {
    public String contentType;
    public BatchProjectsLocationsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public BatchProjectsLocationsOperationsGetResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}