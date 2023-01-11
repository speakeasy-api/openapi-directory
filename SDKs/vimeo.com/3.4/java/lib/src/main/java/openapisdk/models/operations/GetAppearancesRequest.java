package openapisdk.models.operations;



public class GetAppearancesRequest {
    public GetAppearancesPathParams pathParams;
    public GetAppearancesRequest withPathParams(GetAppearancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppearancesQueryParams queryParams;
    public GetAppearancesRequest withQueryParams(GetAppearancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}