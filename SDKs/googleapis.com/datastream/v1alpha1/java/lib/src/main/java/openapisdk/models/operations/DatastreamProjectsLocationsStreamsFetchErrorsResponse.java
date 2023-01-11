package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsFetchErrorsResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsFetchErrorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DatastreamProjectsLocationsStreamsFetchErrorsResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsFetchErrorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}