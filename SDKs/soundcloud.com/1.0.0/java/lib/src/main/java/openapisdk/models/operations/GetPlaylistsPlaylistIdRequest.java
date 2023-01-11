package openapisdk.models.operations;



public class GetPlaylistsPlaylistIdRequest {
    public GetPlaylistsPlaylistIdPathParams pathParams;
    public GetPlaylistsPlaylistIdRequest withPathParams(GetPlaylistsPlaylistIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPlaylistsPlaylistIdQueryParams queryParams;
    public GetPlaylistsPlaylistIdRequest withQueryParams(GetPlaylistsPlaylistIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPlaylistsPlaylistIdSecurity security;
    public GetPlaylistsPlaylistIdRequest withSecurity(GetPlaylistsPlaylistIdSecurity security) {
        this.security = security;
        return this;
    }
}