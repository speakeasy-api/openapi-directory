package openapisdk.models.operations;



public class DlpProjectsLocationsDeidentifyTemplatesListRequest {
    public DlpProjectsLocationsDeidentifyTemplatesListPathParams pathParams;
    public DlpProjectsLocationsDeidentifyTemplatesListRequest withPathParams(DlpProjectsLocationsDeidentifyTemplatesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsDeidentifyTemplatesListQueryParams queryParams;
    public DlpProjectsLocationsDeidentifyTemplatesListRequest withQueryParams(DlpProjectsLocationsDeidentifyTemplatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpProjectsLocationsDeidentifyTemplatesListSecurity security;
    public DlpProjectsLocationsDeidentifyTemplatesListRequest withSecurity(DlpProjectsLocationsDeidentifyTemplatesListSecurity security) {
        this.security = security;
        return this;
    }
}