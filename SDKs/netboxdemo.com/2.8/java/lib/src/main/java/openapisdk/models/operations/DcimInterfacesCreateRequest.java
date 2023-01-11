package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceInterfaceInput request;
    public DcimInterfacesCreateRequest withRequest(openapisdk.models.shared.WritableDeviceInterfaceInput request) {
        this.request = request;
        return this;
    }
}