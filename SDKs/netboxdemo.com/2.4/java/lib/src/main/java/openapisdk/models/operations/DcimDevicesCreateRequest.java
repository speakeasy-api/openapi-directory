package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceInput request;
    public DcimDevicesCreateRequest withRequest(openapisdk.models.shared.WritableDeviceInput request) {
        this.request = request;
        return this;
    }
}