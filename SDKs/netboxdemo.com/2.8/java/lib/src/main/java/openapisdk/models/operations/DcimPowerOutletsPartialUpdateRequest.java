package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletsPartialUpdateRequest {
    public DcimPowerOutletsPartialUpdatePathParams pathParams;
    public DcimPowerOutletsPartialUpdateRequest withPathParams(DcimPowerOutletsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerOutletInput request;
    public DcimPowerOutletsPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePowerOutletInput request) {
        this.request = request;
        return this;
    }
}