package openapisdk.models.operations;



public class DlpProjectsStoredInfoTypesListRequest {
    public DlpProjectsStoredInfoTypesListPathParams pathParams;
    public DlpProjectsStoredInfoTypesListRequest withPathParams(DlpProjectsStoredInfoTypesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsStoredInfoTypesListQueryParams queryParams;
    public DlpProjectsStoredInfoTypesListRequest withQueryParams(DlpProjectsStoredInfoTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpProjectsStoredInfoTypesListSecurity security;
    public DlpProjectsStoredInfoTypesListRequest withSecurity(DlpProjectsStoredInfoTypesListSecurity security) {
        this.security = security;
        return this;
    }
}