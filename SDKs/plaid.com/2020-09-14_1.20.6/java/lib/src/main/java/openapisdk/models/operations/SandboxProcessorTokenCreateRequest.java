package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxProcessorTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxProcessorTokenCreateRequest request;
    public SandboxProcessorTokenCreateRequest withRequest(openapisdk.models.shared.SandboxProcessorTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}