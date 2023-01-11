package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortTemplatesPartialUpdateRequest {
    public DcimPowerPortTemplatesPartialUpdatePathParams pathParams;
    public DcimPowerPortTemplatesPartialUpdateRequest withPathParams(DcimPowerPortTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPortTemplateInput request;
    public DcimPowerPortTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePowerPortTemplateInput request) {
        this.request = request;
        return this;
    }
}