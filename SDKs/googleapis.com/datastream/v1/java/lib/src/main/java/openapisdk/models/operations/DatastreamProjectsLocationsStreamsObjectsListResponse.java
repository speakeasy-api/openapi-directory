package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsObjectsListResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsObjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStreamObjectsResponse listStreamObjectsResponse;
    public DatastreamProjectsLocationsStreamsObjectsListResponse withListStreamObjectsResponse(openapisdk.models.shared.ListStreamObjectsResponse listStreamObjectsResponse) {
        this.listStreamObjectsResponse = listStreamObjectsResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsObjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}