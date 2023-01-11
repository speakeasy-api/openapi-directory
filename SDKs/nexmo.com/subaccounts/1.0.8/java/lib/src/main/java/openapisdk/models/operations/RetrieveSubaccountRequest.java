package openapisdk.models.operations;



public class RetrieveSubaccountRequest {
    public RetrieveSubaccountPathParams pathParams;
    public RetrieveSubaccountRequest withPathParams(RetrieveSubaccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveSubaccountSecurity security;
    public RetrieveSubaccountRequest withSecurity(RetrieveSubaccountSecurity security) {
        this.security = security;
        return this;
    }
}