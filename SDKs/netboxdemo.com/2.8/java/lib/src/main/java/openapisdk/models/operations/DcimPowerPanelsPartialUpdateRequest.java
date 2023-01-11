package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPanelsPartialUpdateRequest {
    public DcimPowerPanelsPartialUpdatePathParams pathParams;
    public DcimPowerPanelsPartialUpdateRequest withPathParams(DcimPowerPanelsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPanelInput request;
    public DcimPowerPanelsPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePowerPanelInput request) {
        this.request = request;
        return this;
    }
}