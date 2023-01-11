package openapisdk.models.operations;



public class GetGenresRequest {
    public GetGenresQueryParams queryParams;
    public GetGenresRequest withQueryParams(GetGenresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGenresHeaders headers;
    public GetGenresRequest withHeaders(GetGenresHeaders headers) {
        this.headers = headers;
        return this;
    }
}