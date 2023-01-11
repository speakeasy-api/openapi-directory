package openapisdk.models.operations;



public class EndpointGetUsersSavedEpisodesResponse {
    public String contentType;
    public EndpointGetUsersSavedEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetUsersSavedEpisodesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetUsersSavedEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetUsersSavedEpisodes200ApplicationJson endpointGetUsersSavedEpisodes200ApplicationJSONObject;
    public EndpointGetUsersSavedEpisodesResponse withEndpointGetUsersSavedEpisodes200ApplicationJsonObject(EndpointGetUsersSavedEpisodes200ApplicationJson endpointGetUsersSavedEpisodes200ApplicationJSONObject) {
        this.endpointGetUsersSavedEpisodes200ApplicationJSONObject = endpointGetUsersSavedEpisodes200ApplicationJSONObject;
        return this;
    }
}