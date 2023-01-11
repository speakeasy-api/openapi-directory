package openapisdk.models.operations;



public class ListLicenseesRequest {
    public ListLicenseesPathParams pathParams;
    public ListLicenseesRequest withPathParams(ListLicenseesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListLicenseesQueryParams queryParams;
    public ListLicenseesRequest withQueryParams(ListLicenseesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLicenseesSecurity security;
    public ListLicenseesRequest withSecurity(ListLicenseesSecurity security) {
        this.security = security;
        return this;
    }
}