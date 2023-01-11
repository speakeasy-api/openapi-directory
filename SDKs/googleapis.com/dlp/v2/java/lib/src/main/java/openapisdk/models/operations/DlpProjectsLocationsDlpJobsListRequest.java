package openapisdk.models.operations;



public class DlpProjectsLocationsDlpJobsListRequest {
    public DlpProjectsLocationsDlpJobsListPathParams pathParams;
    public DlpProjectsLocationsDlpJobsListRequest withPathParams(DlpProjectsLocationsDlpJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsDlpJobsListQueryParams queryParams;
    public DlpProjectsLocationsDlpJobsListRequest withQueryParams(DlpProjectsLocationsDlpJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpProjectsLocationsDlpJobsListSecurity security;
    public DlpProjectsLocationsDlpJobsListRequest withSecurity(DlpProjectsLocationsDlpJobsListSecurity security) {
        this.security = security;
        return this;
    }
}