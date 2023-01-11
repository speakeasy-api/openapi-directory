package openapisdk.models.operations;



public class EndpointStartAUsersPlaybackResponse {
    public String contentType;
    public EndpointStartAUsersPlaybackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointStartAUsersPlaybackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointStartAUsersPlaybackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}