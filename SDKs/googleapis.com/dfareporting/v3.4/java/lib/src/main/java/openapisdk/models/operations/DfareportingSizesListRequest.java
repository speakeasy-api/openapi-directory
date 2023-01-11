package openapisdk.models.operations;



public class DfareportingSizesListRequest {
    public DfareportingSizesListPathParams pathParams;
    public DfareportingSizesListRequest withPathParams(DfareportingSizesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSizesListQueryParams queryParams;
    public DfareportingSizesListRequest withQueryParams(DfareportingSizesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingSizesListSecurity security;
    public DfareportingSizesListRequest withSecurity(DfareportingSizesListSecurity security) {
        this.security = security;
        return this;
    }
}