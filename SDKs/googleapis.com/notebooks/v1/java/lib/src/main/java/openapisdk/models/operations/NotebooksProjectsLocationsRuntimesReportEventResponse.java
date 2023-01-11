package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesReportEventResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesReportEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public NotebooksProjectsLocationsRuntimesReportEventResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesReportEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}