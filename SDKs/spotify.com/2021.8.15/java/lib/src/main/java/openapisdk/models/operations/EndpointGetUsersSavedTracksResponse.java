package openapisdk.models.operations;



public class EndpointGetUsersSavedTracksResponse {
    public String contentType;
    public EndpointGetUsersSavedTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetUsersSavedTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetUsersSavedTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetUsersSavedTracks200ApplicationJson endpointGetUsersSavedTracks200ApplicationJSONObject;
    public EndpointGetUsersSavedTracksResponse withEndpointGetUsersSavedTracks200ApplicationJsonObject(EndpointGetUsersSavedTracks200ApplicationJson endpointGetUsersSavedTracks200ApplicationJSONObject) {
        this.endpointGetUsersSavedTracks200ApplicationJSONObject = endpointGetUsersSavedTracks200ApplicationJSONObject;
        return this;
    }
}