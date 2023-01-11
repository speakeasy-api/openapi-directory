package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesPatchResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public NotebooksProjectsLocationsRuntimesPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}