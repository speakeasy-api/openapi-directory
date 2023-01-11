package openapisdk.models.operations;



public class EndpointGetAShowsEpisodesRequest {
    public EndpointGetAShowsEpisodesPathParams pathParams;
    public EndpointGetAShowsEpisodesRequest withPathParams(EndpointGetAShowsEpisodesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAShowsEpisodesQueryParams queryParams;
    public EndpointGetAShowsEpisodesRequest withQueryParams(EndpointGetAShowsEpisodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAShowsEpisodesHeaders headers;
    public EndpointGetAShowsEpisodesRequest withHeaders(EndpointGetAShowsEpisodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAShowsEpisodesSecurity security;
    public EndpointGetAShowsEpisodesRequest withSecurity(EndpointGetAShowsEpisodesSecurity security) {
        this.security = security;
        return this;
    }
}