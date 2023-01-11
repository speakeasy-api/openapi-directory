package openapisdk.models.operations;



public class PlusActivitiesListRequest {
    public PlusActivitiesListPathParams pathParams;
    public PlusActivitiesListRequest withPathParams(PlusActivitiesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlusActivitiesListQueryParams queryParams;
    public PlusActivitiesListRequest withQueryParams(PlusActivitiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusActivitiesListSecurity security;
    public PlusActivitiesListRequest withSecurity(PlusActivitiesListSecurity security) {
        this.security = security;
        return this;
    }
}