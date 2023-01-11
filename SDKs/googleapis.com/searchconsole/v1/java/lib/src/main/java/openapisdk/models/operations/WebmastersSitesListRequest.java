package openapisdk.models.operations;



public class WebmastersSitesListRequest {
    public WebmastersSitesListQueryParams queryParams;
    public WebmastersSitesListRequest withQueryParams(WebmastersSitesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitesListSecurity security;
    public WebmastersSitesListRequest withSecurity(WebmastersSitesListSecurity security) {
        this.security = security;
        return this;
    }
}