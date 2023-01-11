package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceTypesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceTypeInput request;
    public DcimDeviceTypesCreateRequest withRequest(openapisdk.models.shared.WritableDeviceTypeInput request) {
        this.request = request;
        return this;
    }
}