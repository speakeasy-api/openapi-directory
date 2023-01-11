package openapisdk.models.operations;



public class AdmobAccountsListRequest {
    public AdmobAccountsListQueryParams queryParams;
    public AdmobAccountsListRequest withQueryParams(AdmobAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdmobAccountsListSecurity security;
    public AdmobAccountsListRequest withSecurity(AdmobAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}