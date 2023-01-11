package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxPublicTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxPublicTokenCreateRequest request;
    public SandboxPublicTokenCreateRequest withRequest(openapisdk.models.shared.SandboxPublicTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}