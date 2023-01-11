package openapisdk.models.operations;



public class GetVideoLicenseListRequest {
    public GetVideoLicenseListQueryParams queryParams;
    public GetVideoLicenseListRequest withQueryParams(GetVideoLicenseListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVideoLicenseListSecurity security;
    public GetVideoLicenseListRequest withSecurity(GetVideoLicenseListSecurity security) {
        this.security = security;
        return this;
    }
}