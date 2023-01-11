package openapisdk.models.operations;



public class EndpointGetAnAlbumResponse {
    public openapisdk.models.shared.AlbumObject albumObject;
    public EndpointGetAnAlbumResponse withAlbumObject(openapisdk.models.shared.AlbumObject albumObject) {
        this.albumObject = albumObject;
        return this;
    }
    public String contentType;
    public EndpointGetAnAlbumResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnAlbumResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnAlbumResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}