package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSnowMonkeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public PatchSnowMonkeyRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public PatchSnowMonkeySecurity security;
    public PatchSnowMonkeyRequest withSecurity(PatchSnowMonkeySecurity security) {
        this.security = security;
        return this;
    }
}