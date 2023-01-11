package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletTemplatesUpdateRequest {
    public DcimPowerOutletTemplatesUpdatePathParams pathParams;
    public DcimPowerOutletTemplatesUpdateRequest withPathParams(DcimPowerOutletTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerOutletTemplateInput request;
    public DcimPowerOutletTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritablePowerOutletTemplateInput request) {
        this.request = request;
        return this;
    }
}