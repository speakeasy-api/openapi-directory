package openapisdk.models.operations;



public class DfareportingSubaccountsListRequest {
    public DfareportingSubaccountsListPathParams pathParams;
    public DfareportingSubaccountsListRequest withPathParams(DfareportingSubaccountsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSubaccountsListQueryParams queryParams;
    public DfareportingSubaccountsListRequest withQueryParams(DfareportingSubaccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingSubaccountsListSecurity security;
    public DfareportingSubaccountsListRequest withSecurity(DfareportingSubaccountsListSecurity security) {
        this.security = security;
        return this;
    }
}