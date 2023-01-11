package openapisdk.models.operations;



public class SasportalCustomersListRequest {
    public SasportalCustomersListQueryParams queryParams;
    public SasportalCustomersListRequest withQueryParams(SasportalCustomersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SasportalCustomersListSecurity security;
    public SasportalCustomersListRequest withSecurity(SasportalCustomersListSecurity security) {
        this.security = security;
        return this;
    }
}