package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsListResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStreamsResponse listStreamsResponse;
    public DatastreamProjectsLocationsStreamsListResponse withListStreamsResponse(openapisdk.models.shared.ListStreamsResponse listStreamsResponse) {
        this.listStreamsResponse = listStreamsResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}