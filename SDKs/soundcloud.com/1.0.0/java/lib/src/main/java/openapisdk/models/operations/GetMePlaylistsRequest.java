package openapisdk.models.operations;



public class GetMePlaylistsRequest {
    public GetMePlaylistsQueryParams queryParams;
    public GetMePlaylistsRequest withQueryParams(GetMePlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMePlaylistsSecurity security;
    public GetMePlaylistsRequest withSecurity(GetMePlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}