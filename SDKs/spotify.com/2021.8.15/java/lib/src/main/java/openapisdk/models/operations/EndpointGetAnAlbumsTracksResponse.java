package openapisdk.models.operations;



public class EndpointGetAnAlbumsTracksResponse {
    public String contentType;
    public EndpointGetAnAlbumsTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnAlbumsTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnAlbumsTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetAnAlbumsTracks200ApplicationJson endpointGetAnAlbumsTracks200ApplicationJSONObject;
    public EndpointGetAnAlbumsTracksResponse withEndpointGetAnAlbumsTracks200ApplicationJsonObject(EndpointGetAnAlbumsTracks200ApplicationJson endpointGetAnAlbumsTracks200ApplicationJSONObject) {
        this.endpointGetAnAlbumsTracks200ApplicationJSONObject = endpointGetAnAlbumsTracks200ApplicationJSONObject;
        return this;
    }
}