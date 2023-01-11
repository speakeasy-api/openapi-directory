package openapisdk.models.operations;



public class GetGenreVodsRequest {
    public GetGenreVodsPathParams pathParams;
    public GetGenreVodsRequest withPathParams(GetGenreVodsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGenreVodsQueryParams queryParams;
    public GetGenreVodsRequest withQueryParams(GetGenreVodsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}