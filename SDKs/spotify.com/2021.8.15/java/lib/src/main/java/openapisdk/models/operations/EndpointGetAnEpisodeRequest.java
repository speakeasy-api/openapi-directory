package openapisdk.models.operations;



public class EndpointGetAnEpisodeRequest {
    public EndpointGetAnEpisodePathParams pathParams;
    public EndpointGetAnEpisodeRequest withPathParams(EndpointGetAnEpisodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAnEpisodeQueryParams queryParams;
    public EndpointGetAnEpisodeRequest withQueryParams(EndpointGetAnEpisodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAnEpisodeHeaders headers;
    public EndpointGetAnEpisodeRequest withHeaders(EndpointGetAnEpisodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAnEpisodeSecurity security;
    public EndpointGetAnEpisodeRequest withSecurity(EndpointGetAnEpisodeSecurity security) {
        this.security = security;
        return this;
    }
}