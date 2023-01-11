package openapisdk.models.operations;



public class GetUsersUserIdPlaylistsRequest {
    public GetUsersUserIdPlaylistsPathParams pathParams;
    public GetUsersUserIdPlaylistsRequest withPathParams(GetUsersUserIdPlaylistsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdPlaylistsQueryParams queryParams;
    public GetUsersUserIdPlaylistsRequest withQueryParams(GetUsersUserIdPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersUserIdPlaylistsSecurity security;
    public GetUsersUserIdPlaylistsRequest withSecurity(GetUsersUserIdPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}