package openapisdk.models.operations;



public class EndpointCheckUsersSavedAlbumsResponse {
    public String contentType;
    public EndpointCheckUsersSavedAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCheckUsersSavedAlbumsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointCheckUsersSavedAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean[] endpointCheckUsersSavedAlbums200ApplicationJSONBooleans;
    public EndpointCheckUsersSavedAlbumsResponse withEndpointCheckUsersSavedAlbums200ApplicationJsonBooleans(Boolean[] endpointCheckUsersSavedAlbums200ApplicationJSONBooleans) {
        this.endpointCheckUsersSavedAlbums200ApplicationJSONBooleans = endpointCheckUsersSavedAlbums200ApplicationJSONBooleans;
        return this;
    }
}