package openapisdk.models.operations;



public class AdmobAccountsGetRequest {
    public AdmobAccountsGetPathParams pathParams;
    public AdmobAccountsGetRequest withPathParams(AdmobAccountsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdmobAccountsGetQueryParams queryParams;
    public AdmobAccountsGetRequest withQueryParams(AdmobAccountsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdmobAccountsGetSecurity security;
    public AdmobAccountsGetRequest withSecurity(AdmobAccountsGetSecurity security) {
        this.security = security;
        return this;
    }
}