package openapisdk.models.operations;



public class ResellerCustomersGetRequest {
    public ResellerCustomersGetPathParams pathParams;
    public ResellerCustomersGetRequest withPathParams(ResellerCustomersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerCustomersGetQueryParams queryParams;
    public ResellerCustomersGetRequest withQueryParams(ResellerCustomersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ResellerCustomersGetSecurity security;
    public ResellerCustomersGetRequest withSecurity(ResellerCustomersGetSecurity security) {
        this.security = security;
        return this;
    }
}