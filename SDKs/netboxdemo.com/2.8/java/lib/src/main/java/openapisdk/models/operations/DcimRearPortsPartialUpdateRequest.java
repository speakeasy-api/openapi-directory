package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortsPartialUpdateRequest {
    public DcimRearPortsPartialUpdatePathParams pathParams;
    public DcimRearPortsPartialUpdateRequest withPathParams(DcimRearPortsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRearPortInput request;
    public DcimRearPortsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableRearPortInput request) {
        this.request = request;
        return this;
    }
}