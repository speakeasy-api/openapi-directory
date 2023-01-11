package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAudioRendersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAudioRendersRequest request;
    public CreateAudioRendersRequest withRequest(openapisdk.models.shared.CreateAudioRendersRequest request) {
        this.request = request;
        return this;
    }
    public CreateAudioRendersSecurity security;
    public CreateAudioRendersRequest withSecurity(CreateAudioRendersSecurity security) {
        this.security = security;
        return this;
    }
}