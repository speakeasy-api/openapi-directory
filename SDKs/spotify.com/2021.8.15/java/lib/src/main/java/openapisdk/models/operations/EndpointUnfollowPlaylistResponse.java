package openapisdk.models.operations;



public class EndpointUnfollowPlaylistResponse {
    public String contentType;
    public EndpointUnfollowPlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointUnfollowPlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointUnfollowPlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}