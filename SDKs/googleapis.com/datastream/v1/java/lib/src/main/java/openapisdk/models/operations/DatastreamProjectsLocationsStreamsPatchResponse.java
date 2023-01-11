package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsPatchResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DatastreamProjectsLocationsStreamsPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}