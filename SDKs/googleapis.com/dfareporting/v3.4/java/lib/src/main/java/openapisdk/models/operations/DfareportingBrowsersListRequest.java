package openapisdk.models.operations;



public class DfareportingBrowsersListRequest {
    public DfareportingBrowsersListPathParams pathParams;
    public DfareportingBrowsersListRequest withPathParams(DfareportingBrowsersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingBrowsersListQueryParams queryParams;
    public DfareportingBrowsersListRequest withQueryParams(DfareportingBrowsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingBrowsersListSecurity security;
    public DfareportingBrowsersListRequest withSecurity(DfareportingBrowsersListSecurity security) {
        this.security = security;
        return this;
    }
}