package openapisdk.models.operations;



public class DlpLocationsInfoTypesListRequest {
    public DlpLocationsInfoTypesListPathParams pathParams;
    public DlpLocationsInfoTypesListRequest withPathParams(DlpLocationsInfoTypesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpLocationsInfoTypesListQueryParams queryParams;
    public DlpLocationsInfoTypesListRequest withQueryParams(DlpLocationsInfoTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpLocationsInfoTypesListSecurity security;
    public DlpLocationsInfoTypesListRequest withSecurity(DlpLocationsInfoTypesListSecurity security) {
        this.security = security;
        return this;
    }
}