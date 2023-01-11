package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPanelsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPanelInput request;
    public DcimPowerPanelsCreateRequest withRequest(openapisdk.models.shared.WritablePowerPanelInput request) {
        this.request = request;
        return this;
    }
}