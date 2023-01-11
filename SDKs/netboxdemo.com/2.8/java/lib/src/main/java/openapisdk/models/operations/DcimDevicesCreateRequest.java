package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceWithConfigContextInput request;
    public DcimDevicesCreateRequest withRequest(openapisdk.models.shared.WritableDeviceWithConfigContextInput request) {
        this.request = request;
        return this;
    }
}