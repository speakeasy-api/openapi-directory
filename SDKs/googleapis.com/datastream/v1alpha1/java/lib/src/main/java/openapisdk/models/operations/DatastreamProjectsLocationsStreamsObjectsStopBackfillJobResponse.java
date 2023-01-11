package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopBackfillJobResponse stopBackfillJobResponse;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse withStopBackfillJobResponse(openapisdk.models.shared.StopBackfillJobResponse stopBackfillJobResponse) {
        this.stopBackfillJobResponse = stopBackfillJobResponse;
        return this;
    }
}