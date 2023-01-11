package openapisdk.models.operations;



public class EndpointGetSeveralTracksResponse {
    public String contentType;
    public EndpointGetSeveralTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetSeveralTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetSeveralTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TracksObject tracksObject;
    public EndpointGetSeveralTracksResponse withTracksObject(openapisdk.models.shared.TracksObject tracksObject) {
        this.tracksObject = tracksObject;
        return this;
    }
}