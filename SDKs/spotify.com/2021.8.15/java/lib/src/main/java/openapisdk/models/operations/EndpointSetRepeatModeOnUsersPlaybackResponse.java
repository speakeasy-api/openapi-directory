package openapisdk.models.operations;



public class EndpointSetRepeatModeOnUsersPlaybackResponse {
    public String contentType;
    public EndpointSetRepeatModeOnUsersPlaybackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSetRepeatModeOnUsersPlaybackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSetRepeatModeOnUsersPlaybackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}