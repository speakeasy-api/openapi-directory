package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletTemplatesPartialUpdateRequest {
    public DcimPowerOutletTemplatesPartialUpdatePathParams pathParams;
    public DcimPowerOutletTemplatesPartialUpdateRequest withPathParams(DcimPowerOutletTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerOutletTemplateInput request;
    public DcimPowerOutletTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePowerOutletTemplateInput request) {
        this.request = request;
        return this;
    }
}