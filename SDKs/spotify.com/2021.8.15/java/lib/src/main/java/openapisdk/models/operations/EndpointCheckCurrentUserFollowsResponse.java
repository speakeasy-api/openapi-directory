package openapisdk.models.operations;



public class EndpointCheckCurrentUserFollowsResponse {
    public String contentType;
    public EndpointCheckCurrentUserFollowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCheckCurrentUserFollowsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointCheckCurrentUserFollowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean[] endpointCheckCurrentUserFollows200ApplicationJSONBooleans;
    public EndpointCheckCurrentUserFollowsResponse withEndpointCheckCurrentUserFollows200ApplicationJsonBooleans(Boolean[] endpointCheckCurrentUserFollows200ApplicationJSONBooleans) {
        this.endpointCheckCurrentUserFollows200ApplicationJSONBooleans = endpointCheckCurrentUserFollows200ApplicationJSONBooleans;
        return this;
    }
}