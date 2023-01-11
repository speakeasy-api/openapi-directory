package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSandboxRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxRequest sandboxRequest;
    public PostSandboxRequests withSandboxRequest(openapisdk.models.shared.SandboxRequest sandboxRequest) {
        this.sandboxRequest = sandboxRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxRequest sandboxRequest1;
    public PostSandboxRequests withSandboxRequest1(openapisdk.models.shared.SandboxRequest sandboxRequest1) {
        this.sandboxRequest1 = sandboxRequest1;
        return this;
    }
}