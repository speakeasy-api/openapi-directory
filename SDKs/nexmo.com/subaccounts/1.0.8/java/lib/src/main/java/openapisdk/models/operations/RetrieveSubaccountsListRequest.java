package openapisdk.models.operations;



public class RetrieveSubaccountsListRequest {
    public RetrieveSubaccountsListPathParams pathParams;
    public RetrieveSubaccountsListRequest withPathParams(RetrieveSubaccountsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveSubaccountsListSecurity security;
    public RetrieveSubaccountsListRequest withSecurity(RetrieveSubaccountsListSecurity security) {
        this.security = security;
        return this;
    }
}