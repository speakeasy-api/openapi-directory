package openapisdk.models.operations;



public class EndpointGetAnArtistsRelatedArtistsResponse {
    public openapisdk.models.shared.ArtistsObject artistsObject;
    public EndpointGetAnArtistsRelatedArtistsResponse withArtistsObject(openapisdk.models.shared.ArtistsObject artistsObject) {
        this.artistsObject = artistsObject;
        return this;
    }
    public String contentType;
    public EndpointGetAnArtistsRelatedArtistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnArtistsRelatedArtistsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnArtistsRelatedArtistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}