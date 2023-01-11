package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsObjectsLookupResponse {
    public String contentType;
    public DatastreamProjectsLocationsStreamsObjectsLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsStreamsObjectsLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StreamObject streamObject;
    public DatastreamProjectsLocationsStreamsObjectsLookupResponse withStreamObject(openapisdk.models.shared.StreamObject streamObject) {
        this.streamObject = streamObject;
        return this;
    }
}