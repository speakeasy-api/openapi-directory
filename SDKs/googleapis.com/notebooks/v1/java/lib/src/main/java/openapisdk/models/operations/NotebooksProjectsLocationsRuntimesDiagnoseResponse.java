package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesDiagnoseResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesDiagnoseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public NotebooksProjectsLocationsRuntimesDiagnoseResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesDiagnoseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}