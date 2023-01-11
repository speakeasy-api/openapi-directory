package openapisdk.models.operations;



public class EndpointGetMultipleEpisodesRequest {
    public EndpointGetMultipleEpisodesQueryParams queryParams;
    public EndpointGetMultipleEpisodesRequest withQueryParams(EndpointGetMultipleEpisodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetMultipleEpisodesHeaders headers;
    public EndpointGetMultipleEpisodesRequest withHeaders(EndpointGetMultipleEpisodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetMultipleEpisodesSecurity security;
    public EndpointGetMultipleEpisodesRequest withSecurity(EndpointGetMultipleEpisodesSecurity security) {
        this.security = security;
        return this;
    }
}