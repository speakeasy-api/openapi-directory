package openapisdk.models.operations;



public class EndpointCheckUsersSavedShowsResponse {
    public String contentType;
    public EndpointCheckUsersSavedShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCheckUsersSavedShowsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointCheckUsersSavedShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean[] endpointCheckUsersSavedShows200ApplicationJSONBooleans;
    public EndpointCheckUsersSavedShowsResponse withEndpointCheckUsersSavedShows200ApplicationJsonBooleans(Boolean[] endpointCheckUsersSavedShows200ApplicationJSONBooleans) {
        this.endpointCheckUsersSavedShows200ApplicationJSONBooleans = endpointCheckUsersSavedShows200ApplicationJSONBooleans;
        return this;
    }
}