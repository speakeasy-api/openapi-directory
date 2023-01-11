package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletsUpdateRequest {
    public DcimPowerOutletsUpdatePathParams pathParams;
    public DcimPowerOutletsUpdateRequest withPathParams(DcimPowerOutletsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerOutletInput request;
    public DcimPowerOutletsUpdateRequest withRequest(openapisdk.models.shared.WritablePowerOutletInput request) {
        this.request = request;
        return this;
    }
}