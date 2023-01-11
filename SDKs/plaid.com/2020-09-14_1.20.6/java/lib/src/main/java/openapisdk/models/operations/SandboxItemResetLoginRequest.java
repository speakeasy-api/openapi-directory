package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxItemResetLoginRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxItemResetLoginRequest request;
    public SandboxItemResetLoginRequest withRequest(openapisdk.models.shared.SandboxItemResetLoginRequest request) {
        this.request = request;
        return this;
    }
}