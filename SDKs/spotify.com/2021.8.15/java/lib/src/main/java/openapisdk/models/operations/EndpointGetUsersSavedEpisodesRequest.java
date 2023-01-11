package openapisdk.models.operations;



public class EndpointGetUsersSavedEpisodesRequest {
    public EndpointGetUsersSavedEpisodesQueryParams queryParams;
    public EndpointGetUsersSavedEpisodesRequest withQueryParams(EndpointGetUsersSavedEpisodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetUsersSavedEpisodesHeaders headers;
    public EndpointGetUsersSavedEpisodesRequest withHeaders(EndpointGetUsersSavedEpisodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetUsersSavedEpisodesSecurity security;
    public EndpointGetUsersSavedEpisodesRequest withSecurity(EndpointGetUsersSavedEpisodesSecurity security) {
        this.security = security;
        return this;
    }
}