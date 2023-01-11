package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePowerPortInput request;
    public DcimPowerPortsCreateRequest withRequest(openapisdk.models.shared.WritablePowerPortInput request) {
        this.request = request;
        return this;
    }
}