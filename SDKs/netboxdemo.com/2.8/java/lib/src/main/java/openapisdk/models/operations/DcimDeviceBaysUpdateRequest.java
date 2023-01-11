package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBaysUpdateRequest {
    public DcimDeviceBaysUpdatePathParams pathParams;
    public DcimDeviceBaysUpdateRequest withPathParams(DcimDeviceBaysUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceBayInput request;
    public DcimDeviceBaysUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceBayInput request) {
        this.request = request;
        return this;
    }
}