package openapisdk.models.operations;



public class EndpointGetUsersTopArtistsAndTracksResponse {
    public String contentType;
    public EndpointGetUsersTopArtistsAndTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetUsersTopArtistsAndTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetUsersTopArtistsAndTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetUsersTopArtistsAndTracks200ApplicationJson endpointGetUsersTopArtistsAndTracks200ApplicationJSONObject;
    public EndpointGetUsersTopArtistsAndTracksResponse withEndpointGetUsersTopArtistsAndTracks200ApplicationJsonObject(EndpointGetUsersTopArtistsAndTracks200ApplicationJson endpointGetUsersTopArtistsAndTracks200ApplicationJSONObject) {
        this.endpointGetUsersTopArtistsAndTracks200ApplicationJSONObject = endpointGetUsersTopArtistsAndTracks200ApplicationJSONObject;
        return this;
    }
}