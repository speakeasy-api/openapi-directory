package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditGroupCoverageRequest {
    public EditGroupCoveragePathParams pathParams;
    public EditGroupCoverageRequest withPathParams(EditGroupCoveragePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupCoverageEditRequest request;
    public EditGroupCoverageRequest withRequest(openapisdk.models.shared.GroupCoverageEditRequest request) {
        this.request = request;
        return this;
    }
}