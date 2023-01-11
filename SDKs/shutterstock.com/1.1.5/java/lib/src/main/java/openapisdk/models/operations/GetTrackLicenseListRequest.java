package openapisdk.models.operations;



public class GetTrackLicenseListRequest {
    public GetTrackLicenseListQueryParams queryParams;
    public GetTrackLicenseListRequest withQueryParams(GetTrackLicenseListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrackLicenseListSecurity security;
    public GetTrackLicenseListRequest withSecurity(GetTrackLicenseListSecurity security) {
        this.security = security;
        return this;
    }
}