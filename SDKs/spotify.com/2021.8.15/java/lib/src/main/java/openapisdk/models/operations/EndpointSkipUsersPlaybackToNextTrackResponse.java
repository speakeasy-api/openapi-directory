package openapisdk.models.operations;



public class EndpointSkipUsersPlaybackToNextTrackResponse {
    public String contentType;
    public EndpointSkipUsersPlaybackToNextTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSkipUsersPlaybackToNextTrackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSkipUsersPlaybackToNextTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}