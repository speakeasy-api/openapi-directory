package openapisdk.models.operations;



public class EndpointGetAnArtistsTopTracksResponse {
    public String contentType;
    public EndpointGetAnArtistsTopTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnArtistsTopTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnArtistsTopTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TracksObject tracksObject;
    public EndpointGetAnArtistsTopTracksResponse withTracksObject(openapisdk.models.shared.TracksObject tracksObject) {
        this.tracksObject = tracksObject;
        return this;
    }
}