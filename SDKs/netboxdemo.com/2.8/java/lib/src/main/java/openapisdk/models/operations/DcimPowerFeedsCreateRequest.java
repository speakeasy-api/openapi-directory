package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerFeedsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerFeedInput request;
    public DcimPowerFeedsCreateRequest withRequest(openapisdk.models.shared.WritablePowerFeedInput request) {
        this.request = request;
        return this;
    }
}