package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortsPartialUpdateRequest {
    public DcimFrontPortsPartialUpdatePathParams pathParams;
    public DcimFrontPortsPartialUpdateRequest withPathParams(DcimFrontPortsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableFrontPortInput request;
    public DcimFrontPortsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableFrontPortInput request) {
        this.request = request;
        return this;
    }
}