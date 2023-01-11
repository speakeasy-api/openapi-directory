package openapisdk.models.operations;



public class EndpointCheckUsersSavedEpisodesRequest {
    public EndpointCheckUsersSavedEpisodesQueryParams queryParams;
    public EndpointCheckUsersSavedEpisodesRequest withQueryParams(EndpointCheckUsersSavedEpisodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointCheckUsersSavedEpisodesHeaders headers;
    public EndpointCheckUsersSavedEpisodesRequest withHeaders(EndpointCheckUsersSavedEpisodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointCheckUsersSavedEpisodesSecurity security;
    public EndpointCheckUsersSavedEpisodesRequest withSecurity(EndpointCheckUsersSavedEpisodesSecurity security) {
        this.security = security;
        return this;
    }
}