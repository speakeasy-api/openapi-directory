package openapisdk.models.operations;



public class GetPlaylistsPlaylistIdTracksRequest {
    public GetPlaylistsPlaylistIdTracksPathParams pathParams;
    public GetPlaylistsPlaylistIdTracksRequest withPathParams(GetPlaylistsPlaylistIdTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPlaylistsPlaylistIdTracksQueryParams queryParams;
    public GetPlaylistsPlaylistIdTracksRequest withQueryParams(GetPlaylistsPlaylistIdTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPlaylistsPlaylistIdTracksSecurity security;
    public GetPlaylistsPlaylistIdTracksRequest withSecurity(GetPlaylistsPlaylistIdTracksSecurity security) {
        this.security = security;
        return this;
    }
}