package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationInterfacesUpdateRequest {
    public VirtualizationInterfacesUpdatePathParams pathParams;
    public VirtualizationInterfacesUpdateRequest withPathParams(VirtualizationInterfacesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineInterfaceInput request;
    public VirtualizationInterfacesUpdateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineInterfaceInput request) {
        this.request = request;
        return this;
    }
}