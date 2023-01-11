package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRearPortInput request;
    public DcimRearPortsCreateRequest withRequest(openapisdk.models.shared.WritableRearPortInput request) {
        this.request = request;
        return this;
    }
}