package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksPartialUpdateRequest {
    public DcimRacksPartialUpdatePathParams pathParams;
    public DcimRacksPartialUpdateRequest withPathParams(DcimRacksPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackInput request;
    public DcimRacksPartialUpdateRequest withRequest(openapisdk.models.shared.WritableRackInput request) {
        this.request = request;
        return this;
    }
}