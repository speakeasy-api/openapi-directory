package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsObjectsGetResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsObjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsObjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StreamObject streamObject;
    public DatastreamProjectsLocationsStreamsObjectsGetResponse withStreamObject(openapisdk.models.shared.StreamObject streamObject) {
        this.streamObject = streamObject;
        return this;
    }
}