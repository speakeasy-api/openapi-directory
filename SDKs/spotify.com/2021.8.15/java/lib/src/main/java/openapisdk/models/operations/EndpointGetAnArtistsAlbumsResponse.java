package openapisdk.models.operations;



public class EndpointGetAnArtistsAlbumsResponse {
    public String contentType;
    public EndpointGetAnArtistsAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnArtistsAlbumsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnArtistsAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetAnArtistsAlbums200ApplicationJson endpointGetAnArtistsAlbums200ApplicationJSONObject;
    public EndpointGetAnArtistsAlbumsResponse withEndpointGetAnArtistsAlbums200ApplicationJsonObject(EndpointGetAnArtistsAlbums200ApplicationJson endpointGetAnArtistsAlbums200ApplicationJSONObject) {
        this.endpointGetAnArtistsAlbums200ApplicationJSONObject = endpointGetAnArtistsAlbums200ApplicationJSONObject;
        return this;
    }
}