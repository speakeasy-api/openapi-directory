package openapisdk.models.operations;



public class GetAccountOrganizationsRequest {
    public GetAccountOrganizationsQueryParams queryParams;
    public GetAccountOrganizationsRequest withQueryParams(GetAccountOrganizationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountOrganizationsSecurity security;
    public GetAccountOrganizationsRequest withSecurity(GetAccountOrganizationsSecurity security) {
        this.security = security;
        return this;
    }
}