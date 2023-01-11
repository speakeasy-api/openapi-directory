package openapisdk.models.operations;



public class EndpointPauseAUsersPlaybackResponse {
    public String contentType;
    public EndpointPauseAUsersPlaybackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointPauseAUsersPlaybackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointPauseAUsersPlaybackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}