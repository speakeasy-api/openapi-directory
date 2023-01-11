package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesPartialUpdateRequest {
    public DcimDevicesPartialUpdatePathParams pathParams;
    public DcimDevicesPartialUpdateRequest withPathParams(DcimDevicesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceInput request;
    public DcimDevicesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceInput request) {
        this.request = request;
        return this;
    }
}