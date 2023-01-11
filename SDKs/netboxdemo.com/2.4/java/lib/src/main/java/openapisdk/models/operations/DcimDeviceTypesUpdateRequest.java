package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceTypesUpdateRequest {
    public DcimDeviceTypesUpdatePathParams pathParams;
    public DcimDeviceTypesUpdateRequest withPathParams(DcimDeviceTypesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceTypeInput request;
    public DcimDeviceTypesUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceTypeInput request) {
        this.request = request;
        return this;
    }
}