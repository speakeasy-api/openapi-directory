package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditGroupRequest {
    public EditGroupPathParams pathParams;
    public EditGroupRequest withPathParams(EditGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupEditRequest request;
    public EditGroupRequest withRequest(openapisdk.models.shared.GroupEditRequest request) {
        this.request = request;
        return this;
    }
}