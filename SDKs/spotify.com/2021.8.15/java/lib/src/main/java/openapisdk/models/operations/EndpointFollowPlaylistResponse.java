package openapisdk.models.operations;



public class EndpointFollowPlaylistResponse {
    public String contentType;
    public EndpointFollowPlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointFollowPlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointFollowPlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}