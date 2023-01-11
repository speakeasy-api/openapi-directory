package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPanelsUpdateRequest {
    public DcimPowerPanelsUpdatePathParams pathParams;
    public DcimPowerPanelsUpdateRequest withPathParams(DcimPowerPanelsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPanelInput request;
    public DcimPowerPanelsUpdateRequest withRequest(openapisdk.models.shared.WritablePowerPanelInput request) {
        this.request = request;
        return this;
    }
}