package openapisdk.models.operations;



public class EndpointGetPlaylistCoverResponse {
    public String contentType;
    public EndpointGetPlaylistCoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetPlaylistCoverResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.ImageObject[] imageObjects;
    public EndpointGetPlaylistCoverResponse withImageObjects(openapisdk.models.shared.ImageObject[] imageObjects) {
        this.imageObjects = imageObjects;
        return this;
    }
    public Long statusCode;
    public EndpointGetPlaylistCoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}