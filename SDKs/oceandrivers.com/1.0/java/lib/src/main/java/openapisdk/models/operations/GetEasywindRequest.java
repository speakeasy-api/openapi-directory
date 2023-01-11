package openapisdk.models.operations;



public class GetEasywindRequest {
    public GetEasywindPathParams pathParams;
    public GetEasywindRequest withPathParams(GetEasywindPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEasywindQueryParams queryParams;
    public GetEasywindRequest withQueryParams(GetEasywindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}