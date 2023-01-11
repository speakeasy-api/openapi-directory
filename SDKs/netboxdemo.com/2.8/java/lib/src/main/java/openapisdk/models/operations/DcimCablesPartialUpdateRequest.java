package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimCablesPartialUpdateRequest {
    public DcimCablesPartialUpdatePathParams pathParams;
    public DcimCablesPartialUpdateRequest withPathParams(DcimCablesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCableInput request;
    public DcimCablesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableCableInput request) {
        this.request = request;
        return this;
    }
}