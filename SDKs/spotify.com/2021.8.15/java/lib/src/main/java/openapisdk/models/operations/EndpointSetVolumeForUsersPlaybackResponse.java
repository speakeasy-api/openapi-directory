package openapisdk.models.operations;



public class EndpointSetVolumeForUsersPlaybackResponse {
    public String contentType;
    public EndpointSetVolumeForUsersPlaybackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSetVolumeForUsersPlaybackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSetVolumeForUsersPlaybackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}