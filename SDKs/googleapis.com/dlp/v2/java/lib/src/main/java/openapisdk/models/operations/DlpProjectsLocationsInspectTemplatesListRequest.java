package openapisdk.models.operations;



public class DlpProjectsLocationsInspectTemplatesListRequest {
    public DlpProjectsLocationsInspectTemplatesListPathParams pathParams;
    public DlpProjectsLocationsInspectTemplatesListRequest withPathParams(DlpProjectsLocationsInspectTemplatesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsInspectTemplatesListQueryParams queryParams;
    public DlpProjectsLocationsInspectTemplatesListRequest withQueryParams(DlpProjectsLocationsInspectTemplatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpProjectsLocationsInspectTemplatesListSecurity security;
    public DlpProjectsLocationsInspectTemplatesListRequest withSecurity(DlpProjectsLocationsInspectTemplatesListSecurity security) {
        this.security = security;
        return this;
    }
}