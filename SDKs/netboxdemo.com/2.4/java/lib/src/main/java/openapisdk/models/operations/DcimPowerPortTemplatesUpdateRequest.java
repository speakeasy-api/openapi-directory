package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortTemplatesUpdateRequest {
    public DcimPowerPortTemplatesUpdatePathParams pathParams;
    public DcimPowerPortTemplatesUpdateRequest withPathParams(DcimPowerPortTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPortTemplateInput request;
    public DcimPowerPortTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritablePowerPortTemplateInput request) {
        this.request = request;
        return this;
    }
}