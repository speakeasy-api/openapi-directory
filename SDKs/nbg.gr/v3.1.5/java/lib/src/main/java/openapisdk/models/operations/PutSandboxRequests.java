package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSandboxRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Sandbox sandbox;
    public PutSandboxRequests withSandbox(openapisdk.models.shared.Sandbox sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Sandbox sandbox1;
    public PutSandboxRequests withSandbox1(openapisdk.models.shared.Sandbox sandbox1) {
        this.sandbox1 = sandbox1;
        return this;
    }
}