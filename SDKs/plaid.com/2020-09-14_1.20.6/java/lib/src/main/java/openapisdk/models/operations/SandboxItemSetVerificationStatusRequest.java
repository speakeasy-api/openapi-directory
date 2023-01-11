package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxItemSetVerificationStatusRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxItemSetVerificationStatusRequest request;
    public SandboxItemSetVerificationStatusRequest withRequest(openapisdk.models.shared.SandboxItemSetVerificationStatusRequest request) {
        this.request = request;
        return this;
    }
}