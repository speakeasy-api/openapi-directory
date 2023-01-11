package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBaysPartialUpdateRequest {
    public DcimDeviceBaysPartialUpdatePathParams pathParams;
    public DcimDeviceBaysPartialUpdateRequest withPathParams(DcimDeviceBaysPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceBayInput request;
    public DcimDeviceBaysPartialUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceBayInput request) {
        this.request = request;
        return this;
    }
}