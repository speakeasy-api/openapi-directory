package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesUpdateRequest {
    public DcimDevicesUpdatePathParams pathParams;
    public DcimDevicesUpdateRequest withPathParams(DcimDevicesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceInput request;
    public DcimDevicesUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceInput request) {
        this.request = request;
        return this;
    }
}