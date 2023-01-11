package openapisdk.models.operations;



public class EndpointGetMultipleAlbumsResponse {
    public openapisdk.models.shared.AlbumsObject albumsObject;
    public EndpointGetMultipleAlbumsResponse withAlbumsObject(openapisdk.models.shared.AlbumsObject albumsObject) {
        this.albumsObject = albumsObject;
        return this;
    }
    public String contentType;
    public EndpointGetMultipleAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetMultipleAlbumsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetMultipleAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}