package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxBankTransferSimulateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxBankTransferSimulateRequest request;
    public SandboxBankTransferSimulateRequest withRequest(openapisdk.models.shared.SandboxBankTransferSimulateRequest request) {
        this.request = request;
        return this;
    }
}