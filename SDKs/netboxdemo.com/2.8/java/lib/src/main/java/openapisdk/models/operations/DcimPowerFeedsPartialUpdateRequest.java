package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerFeedsPartialUpdateRequest {
    public DcimPowerFeedsPartialUpdatePathParams pathParams;
    public DcimPowerFeedsPartialUpdateRequest withPathParams(DcimPowerFeedsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerFeedInput request;
    public DcimPowerFeedsPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePowerFeedInput request) {
        this.request = request;
        return this;
    }
}