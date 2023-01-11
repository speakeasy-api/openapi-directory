package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceTypesPartialUpdateRequest {
    public DcimDeviceTypesPartialUpdatePathParams pathParams;
    public DcimDeviceTypesPartialUpdateRequest withPathParams(DcimDeviceTypesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceTypeInput request;
    public DcimDeviceTypesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceTypeInput request) {
        this.request = request;
        return this;
    }
}