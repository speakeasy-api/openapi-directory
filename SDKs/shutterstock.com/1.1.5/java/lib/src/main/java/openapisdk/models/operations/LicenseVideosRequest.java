package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseVideosRequest {
    public LicenseVideosQueryParams queryParams;
    public LicenseVideosRequest withQueryParams(LicenseVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseVideoRequest request;
    public LicenseVideosRequest withRequest(openapisdk.models.shared.LicenseVideoRequest request) {
        this.request = request;
        return this;
    }
    public LicenseVideosSecurity security;
    public LicenseVideosRequest withSecurity(LicenseVideosSecurity security) {
        this.security = security;
        return this;
    }
}