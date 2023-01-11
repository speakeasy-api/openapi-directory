package openapisdk.models.operations;



public class GetPlaylistsRequest {
    public GetPlaylistsQueryParams queryParams;
    public GetPlaylistsRequest withQueryParams(GetPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPlaylistsHeaders headers;
    public GetPlaylistsRequest withHeaders(GetPlaylistsHeaders headers) {
        this.headers = headers;
        return this;
    }
}