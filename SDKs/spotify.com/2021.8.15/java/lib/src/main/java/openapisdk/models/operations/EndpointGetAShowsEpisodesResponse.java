package openapisdk.models.operations;



public class EndpointGetAShowsEpisodesResponse {
    public String contentType;
    public EndpointGetAShowsEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAShowsEpisodesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAShowsEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetAShowsEpisodes200ApplicationJson endpointGetAShowsEpisodes200ApplicationJSONObject;
    public EndpointGetAShowsEpisodesResponse withEndpointGetAShowsEpisodes200ApplicationJsonObject(EndpointGetAShowsEpisodes200ApplicationJson endpointGetAShowsEpisodes200ApplicationJSONObject) {
        this.endpointGetAShowsEpisodes200ApplicationJSONObject = endpointGetAShowsEpisodes200ApplicationJSONObject;
        return this;
    }
}