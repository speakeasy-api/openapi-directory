package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesStopResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesStopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public NotebooksProjectsLocationsRuntimesStopResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesStopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}