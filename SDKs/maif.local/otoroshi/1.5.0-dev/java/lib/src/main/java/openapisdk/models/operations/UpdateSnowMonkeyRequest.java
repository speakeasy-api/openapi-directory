package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSnowMonkeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public UpdateSnowMonkeyRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public UpdateSnowMonkeySecurity security;
    public UpdateSnowMonkeyRequest withSecurity(UpdateSnowMonkeySecurity security) {
        this.security = security;
        return this;
    }
}