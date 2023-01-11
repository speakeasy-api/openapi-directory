package openapisdk.models.operations;



public class GetPlaylistByIdRequest {
    public GetPlaylistByIdPathParams pathParams;
    public GetPlaylistByIdRequest withPathParams(GetPlaylistByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPlaylistByIdQueryParams queryParams;
    public GetPlaylistByIdRequest withQueryParams(GetPlaylistByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPlaylistByIdHeaders headers;
    public GetPlaylistByIdRequest withHeaders(GetPlaylistByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}