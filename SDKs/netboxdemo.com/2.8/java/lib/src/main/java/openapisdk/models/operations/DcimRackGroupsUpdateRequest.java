package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackGroupsUpdateRequest {
    public DcimRackGroupsUpdatePathParams pathParams;
    public DcimRackGroupsUpdateRequest withPathParams(DcimRackGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackGroupInput request;
    public DcimRackGroupsUpdateRequest withRequest(openapisdk.models.shared.WritableRackGroupInput request) {
        this.request = request;
        return this;
    }
}