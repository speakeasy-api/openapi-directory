package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartBackfillJobResponse startBackfillJobResponse;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse withStartBackfillJobResponse(openapisdk.models.shared.StartBackfillJobResponse startBackfillJobResponse) {
        this.startBackfillJobResponse = startBackfillJobResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}