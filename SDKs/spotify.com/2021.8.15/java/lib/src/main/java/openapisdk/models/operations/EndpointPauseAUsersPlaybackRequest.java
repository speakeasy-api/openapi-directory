package openapisdk.models.operations;



public class EndpointPauseAUsersPlaybackRequest {
    public EndpointPauseAUsersPlaybackQueryParams queryParams;
    public EndpointPauseAUsersPlaybackRequest withQueryParams(EndpointPauseAUsersPlaybackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointPauseAUsersPlaybackHeaders headers;
    public EndpointPauseAUsersPlaybackRequest withHeaders(EndpointPauseAUsersPlaybackHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointPauseAUsersPlaybackSecurity security;
    public EndpointPauseAUsersPlaybackRequest withSecurity(EndpointPauseAUsersPlaybackSecurity security) {
        this.security = security;
        return this;
    }
}