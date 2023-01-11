package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerOutletTemplateInput request;
    public DcimPowerOutletTemplatesCreateRequest withRequest(openapisdk.models.shared.WritablePowerOutletTemplateInput request) {
        this.request = request;
        return this;
    }
}