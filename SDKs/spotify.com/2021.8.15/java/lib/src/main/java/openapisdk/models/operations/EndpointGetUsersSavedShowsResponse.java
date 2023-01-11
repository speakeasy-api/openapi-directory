package openapisdk.models.operations;



public class EndpointGetUsersSavedShowsResponse {
    public String contentType;
    public EndpointGetUsersSavedShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetUsersSavedShowsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetUsersSavedShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetUsersSavedShows200ApplicationJson endpointGetUsersSavedShows200ApplicationJSONObject;
    public EndpointGetUsersSavedShowsResponse withEndpointGetUsersSavedShows200ApplicationJsonObject(EndpointGetUsersSavedShows200ApplicationJson endpointGetUsersSavedShows200ApplicationJSONObject) {
        this.endpointGetUsersSavedShows200ApplicationJSONObject = endpointGetUsersSavedShows200ApplicationJSONObject;
        return this;
    }
}