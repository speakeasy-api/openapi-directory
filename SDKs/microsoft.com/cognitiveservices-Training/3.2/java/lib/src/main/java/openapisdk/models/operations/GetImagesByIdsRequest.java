package openapisdk.models.operations;



public class GetImagesByIdsRequest {
    public GetImagesByIdsPathParams pathParams;
    public GetImagesByIdsRequest withPathParams(GetImagesByIdsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImagesByIdsQueryParams queryParams;
    public GetImagesByIdsRequest withQueryParams(GetImagesByIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}