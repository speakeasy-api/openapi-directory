package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseTrackRequest {
    public LicenseTrackQueryParams queryParams;
    public LicenseTrackRequest withQueryParams(LicenseTrackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseAudioRequest request;
    public LicenseTrackRequest withRequest(openapisdk.models.shared.LicenseAudioRequest request) {
        this.request = request;
        return this;
    }
    public LicenseTrackSecurity security;
    public LicenseTrackRequest withSecurity(LicenseTrackSecurity security) {
        this.security = security;
        return this;
    }
}