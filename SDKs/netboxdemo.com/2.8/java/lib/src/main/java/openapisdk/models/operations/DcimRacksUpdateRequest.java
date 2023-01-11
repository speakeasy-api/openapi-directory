package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksUpdateRequest {
    public DcimRacksUpdatePathParams pathParams;
    public DcimRacksUpdateRequest withPathParams(DcimRacksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackInput request;
    public DcimRacksUpdateRequest withRequest(openapisdk.models.shared.WritableRackInput request) {
        this.request = request;
        return this;
    }
}