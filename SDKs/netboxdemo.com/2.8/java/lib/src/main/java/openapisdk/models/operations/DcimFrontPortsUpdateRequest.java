package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortsUpdateRequest {
    public DcimFrontPortsUpdatePathParams pathParams;
    public DcimFrontPortsUpdateRequest withPathParams(DcimFrontPortsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableFrontPortInput request;
    public DcimFrontPortsUpdateRequest withRequest(openapisdk.models.shared.WritableFrontPortInput request) {
        this.request = request;
        return this;
    }
}