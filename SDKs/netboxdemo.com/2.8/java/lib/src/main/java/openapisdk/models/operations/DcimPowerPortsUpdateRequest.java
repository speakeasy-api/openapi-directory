package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortsUpdateRequest {
    public DcimPowerPortsUpdatePathParams pathParams;
    public DcimPowerPortsUpdateRequest withPathParams(DcimPowerPortsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPortInput request;
    public DcimPowerPortsUpdateRequest withRequest(openapisdk.models.shared.WritablePowerPortInput request) {
        this.request = request;
        return this;
    }
}