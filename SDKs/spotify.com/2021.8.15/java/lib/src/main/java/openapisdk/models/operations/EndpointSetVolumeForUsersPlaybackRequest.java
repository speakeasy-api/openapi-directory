package openapisdk.models.operations;



public class EndpointSetVolumeForUsersPlaybackRequest {
    public EndpointSetVolumeForUsersPlaybackQueryParams queryParams;
    public EndpointSetVolumeForUsersPlaybackRequest withQueryParams(EndpointSetVolumeForUsersPlaybackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointSetVolumeForUsersPlaybackHeaders headers;
    public EndpointSetVolumeForUsersPlaybackRequest withHeaders(EndpointSetVolumeForUsersPlaybackHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointSetVolumeForUsersPlaybackSecurity security;
    public EndpointSetVolumeForUsersPlaybackRequest withSecurity(EndpointSetVolumeForUsersPlaybackSecurity security) {
        this.security = security;
        return this;
    }
}