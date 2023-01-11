package openapisdk.models.operations;



public class FormsFormsWatchesListRequest {
    public FormsFormsWatchesListPathParams pathParams;
    public FormsFormsWatchesListRequest withPathParams(FormsFormsWatchesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FormsFormsWatchesListQueryParams queryParams;
    public FormsFormsWatchesListRequest withQueryParams(FormsFormsWatchesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FormsFormsWatchesListSecurity security;
    public FormsFormsWatchesListRequest withSecurity(FormsFormsWatchesListSecurity security) {
        this.security = security;
        return this;
    }
}