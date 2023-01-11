package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerOutletInput request;
    public DcimPowerOutletsCreateRequest withRequest(openapisdk.models.shared.WritablePowerOutletInput request) {
        this.request = request;
        return this;
    }
}