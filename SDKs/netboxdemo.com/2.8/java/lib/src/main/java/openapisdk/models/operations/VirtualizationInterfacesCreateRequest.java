package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationInterfacesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualMachineInterfaceInput request;
    public VirtualizationInterfacesCreateRequest withRequest(openapisdk.models.shared.WritableVirtualMachineInterfaceInput request) {
        this.request = request;
        return this;
    }
}