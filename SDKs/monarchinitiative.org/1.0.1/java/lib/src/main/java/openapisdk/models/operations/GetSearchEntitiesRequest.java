package openapisdk.models.operations;



public class GetSearchEntitiesRequest {
    public GetSearchEntitiesPathParams pathParams;
    public GetSearchEntitiesRequest withPathParams(GetSearchEntitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSearchEntitiesQueryParams queryParams;
    public GetSearchEntitiesRequest withQueryParams(GetSearchEntitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}