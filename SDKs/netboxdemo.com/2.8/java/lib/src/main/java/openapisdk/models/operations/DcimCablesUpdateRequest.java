package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimCablesUpdateRequest {
    public DcimCablesUpdatePathParams pathParams;
    public DcimCablesUpdateRequest withPathParams(DcimCablesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCableInput request;
    public DcimCablesUpdateRequest withRequest(openapisdk.models.shared.WritableCableInput request) {
        this.request = request;
        return this;
    }
}