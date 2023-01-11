package openapisdk.models.operations;



public class EndpointGetRecentlyPlayedResponse {
    public String contentType;
    public EndpointGetRecentlyPlayedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetRecentlyPlayedResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetRecentlyPlayedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetRecentlyPlayed200ApplicationJson endpointGetRecentlyPlayed200ApplicationJSONObject;
    public EndpointGetRecentlyPlayedResponse withEndpointGetRecentlyPlayed200ApplicationJsonObject(EndpointGetRecentlyPlayed200ApplicationJson endpointGetRecentlyPlayed200ApplicationJSONObject) {
        this.endpointGetRecentlyPlayed200ApplicationJSONObject = endpointGetRecentlyPlayed200ApplicationJSONObject;
        return this;
    }
}