package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationInterfacesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceInput request;
    public VirtualizationInterfacesCreateRequest withRequest(openapisdk.models.shared.WritableInterfaceInput request) {
        this.request = request;
        return this;
    }
}