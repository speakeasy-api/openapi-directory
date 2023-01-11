package openapisdk.models.operations;



public class AppsactivityActivitiesListRequest {
    public AppsactivityActivitiesListQueryParams queryParams;
    public AppsactivityActivitiesListRequest withQueryParams(AppsactivityActivitiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppsactivityActivitiesListSecurity security;
    public AppsactivityActivitiesListRequest withSecurity(AppsactivityActivitiesListSecurity security) {
        this.security = security;
        return this;
    }
}