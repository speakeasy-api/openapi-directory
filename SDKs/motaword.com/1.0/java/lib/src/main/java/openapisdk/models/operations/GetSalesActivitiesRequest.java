package openapisdk.models.operations;



public class GetSalesActivitiesRequest {
    public GetSalesActivitiesPathParams pathParams;
    public GetSalesActivitiesRequest withPathParams(GetSalesActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSalesActivitiesQueryParams queryParams;
    public GetSalesActivitiesRequest withQueryParams(GetSalesActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}