package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseEditorialImageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseEditorialContentRequest request;
    public LicenseEditorialImageRequest withRequest(openapisdk.models.shared.LicenseEditorialContentRequest request) {
        this.request = request;
        return this;
    }
    public LicenseEditorialImageSecurity security;
    public LicenseEditorialImageRequest withSecurity(LicenseEditorialImageSecurity security) {
        this.security = security;
        return this;
    }
}