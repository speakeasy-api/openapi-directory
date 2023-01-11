package openapisdk.models.operations;



public class GetGenreRequest {
    public GetGenrePathParams pathParams;
    public GetGenreRequest withPathParams(GetGenrePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGenreQueryParams queryParams;
    public GetGenreRequest withQueryParams(GetGenreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}