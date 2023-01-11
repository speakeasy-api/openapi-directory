package openapisdk.models.operations;



public class EndpointSkipUsersPlaybackToPreviousTrackResponse {
    public String contentType;
    public EndpointSkipUsersPlaybackToPreviousTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSkipUsersPlaybackToPreviousTrackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSkipUsersPlaybackToPreviousTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}