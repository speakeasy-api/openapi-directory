package openapisdk.models.operations;



public class EndpointGetMultipleArtistsResponse {
    public openapisdk.models.shared.ArtistsObject artistsObject;
    public EndpointGetMultipleArtistsResponse withArtistsObject(openapisdk.models.shared.ArtistsObject artistsObject) {
        this.artistsObject = artistsObject;
        return this;
    }
    public String contentType;
    public EndpointGetMultipleArtistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetMultipleArtistsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetMultipleArtistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}