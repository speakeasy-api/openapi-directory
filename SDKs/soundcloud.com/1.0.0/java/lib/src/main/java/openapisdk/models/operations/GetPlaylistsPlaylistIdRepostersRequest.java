package openapisdk.models.operations;



public class GetPlaylistsPlaylistIdRepostersRequest {
    public GetPlaylistsPlaylistIdRepostersPathParams pathParams;
    public GetPlaylistsPlaylistIdRepostersRequest withPathParams(GetPlaylistsPlaylistIdRepostersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPlaylistsPlaylistIdRepostersQueryParams queryParams;
    public GetPlaylistsPlaylistIdRepostersRequest withQueryParams(GetPlaylistsPlaylistIdRepostersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPlaylistsPlaylistIdRepostersSecurity security;
    public GetPlaylistsPlaylistIdRepostersRequest withSecurity(GetPlaylistsPlaylistIdRepostersSecurity security) {
        this.security = security;
        return this;
    }
}