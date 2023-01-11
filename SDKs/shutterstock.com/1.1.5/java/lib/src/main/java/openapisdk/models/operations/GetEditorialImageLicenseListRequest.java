package openapisdk.models.operations;



public class GetEditorialImageLicenseListRequest {
    public GetEditorialImageLicenseListQueryParams queryParams;
    public GetEditorialImageLicenseListRequest withQueryParams(GetEditorialImageLicenseListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialImageLicenseListSecurity security;
    public GetEditorialImageLicenseListRequest withSecurity(GetEditorialImageLicenseListSecurity security) {
        this.security = security;
        return this;
    }
}