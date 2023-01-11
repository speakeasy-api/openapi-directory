package openapisdk.models.operations;



public class AdmobAccountsAdUnitsListRequest {
    public AdmobAccountsAdUnitsListPathParams pathParams;
    public AdmobAccountsAdUnitsListRequest withPathParams(AdmobAccountsAdUnitsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdmobAccountsAdUnitsListQueryParams queryParams;
    public AdmobAccountsAdUnitsListRequest withQueryParams(AdmobAccountsAdUnitsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdmobAccountsAdUnitsListSecurity security;
    public AdmobAccountsAdUnitsListRequest withSecurity(AdmobAccountsAdUnitsListSecurity security) {
        this.security = security;
        return this;
    }
}