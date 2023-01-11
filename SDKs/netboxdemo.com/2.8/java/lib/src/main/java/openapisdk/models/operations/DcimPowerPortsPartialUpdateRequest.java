package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortsPartialUpdateRequest {
    public DcimPowerPortsPartialUpdatePathParams pathParams;
    public DcimPowerPortsPartialUpdateRequest withPathParams(DcimPowerPortsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPortInput request;
    public DcimPowerPortsPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePowerPortInput request) {
        this.request = request;
        return this;
    }
}