package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineWithConfigContextInput request;
    public VirtualizationVirtualMachinesCreateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineWithConfigContextInput request) {
        this.request = request;
        return this;
    }
}