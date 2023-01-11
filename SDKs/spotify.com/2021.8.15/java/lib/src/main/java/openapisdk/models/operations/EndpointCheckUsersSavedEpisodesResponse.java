package openapisdk.models.operations;



public class EndpointCheckUsersSavedEpisodesResponse {
    public String contentType;
    public EndpointCheckUsersSavedEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCheckUsersSavedEpisodesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointCheckUsersSavedEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean[] endpointCheckUsersSavedEpisodes200ApplicationJSONBooleans;
    public EndpointCheckUsersSavedEpisodesResponse withEndpointCheckUsersSavedEpisodes200ApplicationJsonBooleans(Boolean[] endpointCheckUsersSavedEpisodes200ApplicationJSONBooleans) {
        this.endpointCheckUsersSavedEpisodes200ApplicationJSONBooleans = endpointCheckUsersSavedEpisodes200ApplicationJSONBooleans;
        return this;
    }
}