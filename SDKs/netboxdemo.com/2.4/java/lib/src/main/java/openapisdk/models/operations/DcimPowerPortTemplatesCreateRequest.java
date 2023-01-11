package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPortTemplateInput request;
    public DcimPowerPortTemplatesCreateRequest withRequest(openapisdk.models.shared.WritablePowerPortTemplateInput request) {
        this.request = request;
        return this;
    }
}