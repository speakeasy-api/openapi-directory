package openapisdk.models.operations;



public class GetUserVodsRequest {
    public GetUserVodsPathParams pathParams;
    public GetUserVodsRequest withPathParams(GetUserVodsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserVodsQueryParams queryParams;
    public GetUserVodsRequest withQueryParams(GetUserVodsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}