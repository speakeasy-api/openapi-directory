package openapisdk.models.operations;



public class GetImageLicenseListRequest {
    public GetImageLicenseListQueryParams queryParams;
    public GetImageLicenseListRequest withQueryParams(GetImageLicenseListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageLicenseListSecurity security;
    public GetImageLicenseListRequest withSecurity(GetImageLicenseListSecurity security) {
        this.security = security;
        return this;
    }
}