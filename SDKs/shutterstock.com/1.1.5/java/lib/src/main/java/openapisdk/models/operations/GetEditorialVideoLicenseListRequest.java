package openapisdk.models.operations;



public class GetEditorialVideoLicenseListRequest {
    public GetEditorialVideoLicenseListQueryParams queryParams;
    public GetEditorialVideoLicenseListRequest withQueryParams(GetEditorialVideoLicenseListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialVideoLicenseListSecurity security;
    public GetEditorialVideoLicenseListRequest withSecurity(GetEditorialVideoLicenseListSecurity security) {
        this.security = security;
        return this;
    }
}