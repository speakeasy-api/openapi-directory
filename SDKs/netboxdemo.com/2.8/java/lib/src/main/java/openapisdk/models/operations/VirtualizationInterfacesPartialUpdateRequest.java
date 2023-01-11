package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationInterfacesPartialUpdateRequest {
    public VirtualizationInterfacesPartialUpdatePathParams pathParams;
    public VirtualizationInterfacesPartialUpdateRequest withPathParams(VirtualizationInterfacesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineInterfaceInput request;
    public VirtualizationInterfacesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineInterfaceInput request) {
        this.request = request;
        return this;
    }
}