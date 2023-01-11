package openapisdk.models.operations;



public class EndpointGetInformationAboutTheUsersCurrentPlaybackResponse {
    public String contentType;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CurrentlyPlayingContextObject currentlyPlayingContextObject;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackResponse withCurrentlyPlayingContextObject(openapisdk.models.shared.CurrentlyPlayingContextObject currentlyPlayingContextObject) {
        this.currentlyPlayingContextObject = currentlyPlayingContextObject;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}