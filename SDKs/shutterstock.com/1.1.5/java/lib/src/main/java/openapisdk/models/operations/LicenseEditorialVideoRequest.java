package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseEditorialVideoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseEditorialVideoContentRequest request;
    public LicenseEditorialVideoRequest withRequest(openapisdk.models.shared.LicenseEditorialVideoContentRequest request) {
        this.request = request;
        return this;
    }
    public LicenseEditorialVideoSecurity security;
    public LicenseEditorialVideoRequest withSecurity(LicenseEditorialVideoSecurity security) {
        this.security = security;
        return this;
    }
}