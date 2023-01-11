package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortsUpdateRequest {
    public DcimRearPortsUpdatePathParams pathParams;
    public DcimRearPortsUpdateRequest withPathParams(DcimRearPortsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRearPortInput request;
    public DcimRearPortsUpdateRequest withRequest(openapisdk.models.shared.WritableRearPortInput request) {
        this.request = request;
        return this;
    }
}