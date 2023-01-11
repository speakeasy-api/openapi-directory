package openapisdk.models.operations;



public class TranslateProjectsLocationsOperationsWaitResponse {
    public String contentType;
    public TranslateProjectsLocationsOperationsWaitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public TranslateProjectsLocationsOperationsWaitResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsOperationsWaitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}