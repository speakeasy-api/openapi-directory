package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackGroupsPartialUpdateRequest {
    public DcimRackGroupsPartialUpdatePathParams pathParams;
    public DcimRackGroupsPartialUpdateRequest withPathParams(DcimRackGroupsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackGroupInput request;
    public DcimRackGroupsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableRackGroupInput request) {
        this.request = request;
        return this;
    }
}