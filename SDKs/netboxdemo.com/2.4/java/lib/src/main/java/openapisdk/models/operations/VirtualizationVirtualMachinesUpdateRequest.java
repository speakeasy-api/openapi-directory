package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesUpdateRequest {
    public VirtualizationVirtualMachinesUpdatePathParams pathParams;
    public VirtualizationVirtualMachinesUpdateRequest withPathParams(VirtualizationVirtualMachinesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineInput request;
    public VirtualizationVirtualMachinesUpdateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineInput request) {
        this.request = request;
        return this;
    }
}