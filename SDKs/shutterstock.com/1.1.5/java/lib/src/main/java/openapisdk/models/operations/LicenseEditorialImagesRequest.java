package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseEditorialImagesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseEditorialContentRequest request;
    public LicenseEditorialImagesRequest withRequest(openapisdk.models.shared.LicenseEditorialContentRequest request) {
        this.request = request;
        return this;
    }
    public LicenseEditorialImagesSecurity security;
    public LicenseEditorialImagesRequest withSecurity(LicenseEditorialImagesSecurity security) {
        this.security = security;
        return this;
    }
}