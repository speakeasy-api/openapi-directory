package openapisdk.models.operations;



public class GetAlbumsRequest {
    public GetAlbumsPathParams pathParams;
    public GetAlbumsRequest withPathParams(GetAlbumsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAlbumsQueryParams queryParams;
    public GetAlbumsRequest withQueryParams(GetAlbumsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}