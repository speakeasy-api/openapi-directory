package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseImagesRequest {
    public LicenseImagesQueryParams queryParams;
    public LicenseImagesRequest withQueryParams(LicenseImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseImageRequest request;
    public LicenseImagesRequest withRequest(openapisdk.models.shared.LicenseImageRequest request) {
        this.request = request;
        return this;
    }
    public LicenseImagesSecurity security;
    public LicenseImagesRequest withSecurity(LicenseImagesSecurity security) {
        this.security = security;
        return this;
    }
}