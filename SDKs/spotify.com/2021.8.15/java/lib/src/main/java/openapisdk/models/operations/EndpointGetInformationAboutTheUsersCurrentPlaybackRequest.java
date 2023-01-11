package openapisdk.models.operations;



public class EndpointGetInformationAboutTheUsersCurrentPlaybackRequest {
    public EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams queryParams;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackRequest withQueryParams(EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders headers;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackRequest withHeaders(EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity security;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackRequest withSecurity(EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity security) {
        this.security = security;
        return this;
    }
}