package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineInput request;
    public VirtualizationVirtualMachinesCreateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineInput request) {
        this.request = request;
        return this;
    }
}