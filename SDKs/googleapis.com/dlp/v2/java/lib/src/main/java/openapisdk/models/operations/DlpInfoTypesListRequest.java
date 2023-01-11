package openapisdk.models.operations;



public class DlpInfoTypesListRequest {
    public DlpInfoTypesListQueryParams queryParams;
    public DlpInfoTypesListRequest withQueryParams(DlpInfoTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DlpInfoTypesListSecurity security;
    public DlpInfoTypesListRequest withSecurity(DlpInfoTypesListSecurity security) {
        this.security = security;
        return this;
    }
}