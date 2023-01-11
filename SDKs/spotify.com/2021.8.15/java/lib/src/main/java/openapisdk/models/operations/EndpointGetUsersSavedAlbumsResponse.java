package openapisdk.models.operations;



public class EndpointGetUsersSavedAlbumsResponse {
    public String contentType;
    public EndpointGetUsersSavedAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetUsersSavedAlbumsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetUsersSavedAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetUsersSavedAlbums200ApplicationJson endpointGetUsersSavedAlbums200ApplicationJSONObject;
    public EndpointGetUsersSavedAlbumsResponse withEndpointGetUsersSavedAlbums200ApplicationJsonObject(EndpointGetUsersSavedAlbums200ApplicationJson endpointGetUsersSavedAlbums200ApplicationJSONObject) {
        this.endpointGetUsersSavedAlbums200ApplicationJSONObject = endpointGetUsersSavedAlbums200ApplicationJSONObject;
        return this;
    }
}