package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBaysCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceBayInput request;
    public DcimDeviceBaysCreateRequest withRequest(openapisdk.models.shared.WritableDeviceBayInput request) {
        this.request = request;
        return this;
    }
}