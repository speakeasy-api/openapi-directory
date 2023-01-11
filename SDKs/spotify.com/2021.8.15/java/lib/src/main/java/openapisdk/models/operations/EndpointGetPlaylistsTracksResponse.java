package openapisdk.models.operations;



public class EndpointGetPlaylistsTracksResponse {
    public String contentType;
    public EndpointGetPlaylistsTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetPlaylistsTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetPlaylistsTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetPlaylistsTracks200ApplicationJson endpointGetPlaylistsTracks200ApplicationJSONObject;
    public EndpointGetPlaylistsTracksResponse withEndpointGetPlaylistsTracks200ApplicationJsonObject(EndpointGetPlaylistsTracks200ApplicationJson endpointGetPlaylistsTracks200ApplicationJSONObject) {
        this.endpointGetPlaylistsTracks200ApplicationJSONObject = endpointGetPlaylistsTracks200ApplicationJSONObject;
        return this;
    }
}