package openapisdk.models.operations;



public class GetActivitiesRequest {
    public GetActivitiesPathParams pathParams;
    public GetActivitiesRequest withPathParams(GetActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetActivitiesQueryParams queryParams;
    public GetActivitiesRequest withQueryParams(GetActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}