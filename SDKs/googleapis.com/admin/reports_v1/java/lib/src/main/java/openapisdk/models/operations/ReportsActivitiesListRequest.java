package openapisdk.models.operations;



public class ReportsActivitiesListRequest {
    public ReportsActivitiesListPathParams pathParams;
    public ReportsActivitiesListRequest withPathParams(ReportsActivitiesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportsActivitiesListQueryParams queryParams;
    public ReportsActivitiesListRequest withQueryParams(ReportsActivitiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportsActivitiesListSecurity security;
    public ReportsActivitiesListRequest withSecurity(ReportsActivitiesListSecurity security) {
        this.security = security;
        return this;
    }
}