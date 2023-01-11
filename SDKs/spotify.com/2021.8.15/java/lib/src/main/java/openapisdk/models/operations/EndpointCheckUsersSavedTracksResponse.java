package openapisdk.models.operations;



public class EndpointCheckUsersSavedTracksResponse {
    public String contentType;
    public EndpointCheckUsersSavedTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCheckUsersSavedTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointCheckUsersSavedTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean[] endpointCheckUsersSavedTracks200ApplicationJSONBooleans;
    public EndpointCheckUsersSavedTracksResponse withEndpointCheckUsersSavedTracks200ApplicationJsonBooleans(Boolean[] endpointCheckUsersSavedTracks200ApplicationJSONBooleans) {
        this.endpointCheckUsersSavedTracks200ApplicationJSONBooleans = endpointCheckUsersSavedTracks200ApplicationJSONBooleans;
        return this;
    }
}