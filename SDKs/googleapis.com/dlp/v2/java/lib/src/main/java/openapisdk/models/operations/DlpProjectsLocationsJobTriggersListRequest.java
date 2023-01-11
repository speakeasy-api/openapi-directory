package openapisdk.models.operations;



public class DlpProjectsLocationsJobTriggersListRequest {
    public DlpProjectsLocationsJobTriggersListPathParams pathParams;
    public DlpProjectsLocationsJobTriggersListRequest withPathParams(DlpProjectsLocationsJobTriggersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsJobTriggersListQueryParams queryParams;
    public DlpProjectsLocationsJobTriggersListRequest withQueryParams(DlpProjectsLocationsJobTriggersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpProjectsLocationsJobTriggersListSecurity security;
    public DlpProjectsLocationsJobTriggersListRequest withSecurity(DlpProjectsLocationsJobTriggersListSecurity security) {
        this.security = security;
        return this;
    }
}