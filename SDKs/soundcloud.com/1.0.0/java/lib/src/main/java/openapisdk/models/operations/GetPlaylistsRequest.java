package openapisdk.models.operations;



public class GetPlaylistsRequest {
    public GetPlaylistsQueryParams queryParams;
    public GetPlaylistsRequest withQueryParams(GetPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPlaylistsSecurity security;
    public GetPlaylistsRequest withSecurity(GetPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}