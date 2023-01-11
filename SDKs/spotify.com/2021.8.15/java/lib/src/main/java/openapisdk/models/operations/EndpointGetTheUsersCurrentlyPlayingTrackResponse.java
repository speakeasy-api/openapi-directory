package openapisdk.models.operations;



public class EndpointGetTheUsersCurrentlyPlayingTrackResponse {
    public String contentType;
    public EndpointGetTheUsersCurrentlyPlayingTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CurrentlyPlayingObject currentlyPlayingObject;
    public EndpointGetTheUsersCurrentlyPlayingTrackResponse withCurrentlyPlayingObject(openapisdk.models.shared.CurrentlyPlayingObject currentlyPlayingObject) {
        this.currentlyPlayingObject = currentlyPlayingObject;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetTheUsersCurrentlyPlayingTrackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetTheUsersCurrentlyPlayingTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}