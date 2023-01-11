package openapisdk.models.operations;



public class EndpointGetAnArtistResponse {
    public openapisdk.models.shared.ArtistObject artistObject;
    public EndpointGetAnArtistResponse withArtistObject(openapisdk.models.shared.ArtistObject artistObject) {
        this.artistObject = artistObject;
        return this;
    }
    public String contentType;
    public EndpointGetAnArtistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnArtistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnArtistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}