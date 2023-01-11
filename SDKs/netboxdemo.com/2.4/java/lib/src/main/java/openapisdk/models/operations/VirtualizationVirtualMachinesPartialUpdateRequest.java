package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesPartialUpdateRequest {
    public VirtualizationVirtualMachinesPartialUpdatePathParams pathParams;
    public VirtualizationVirtualMachinesPartialUpdateRequest withPathParams(VirtualizationVirtualMachinesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineInput request;
    public VirtualizationVirtualMachinesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineInput request) {
        this.request = request;
        return this;
    }
}