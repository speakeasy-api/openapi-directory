package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerFeedsUpdateRequest {
    public DcimPowerFeedsUpdatePathParams pathParams;
    public DcimPowerFeedsUpdateRequest withPathParams(DcimPowerFeedsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerFeedInput request;
    public DcimPowerFeedsUpdateRequest withRequest(openapisdk.models.shared.WritablePowerFeedInput request) {
        this.request = request;
        return this;
    }
}