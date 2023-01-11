package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupCategoryRequest {
    public UpdateGroupCategoryPathParams pathParams;
    public UpdateGroupCategoryRequest withPathParams(UpdateGroupCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupCategoryUpdate request;
    public UpdateGroupCategoryRequest withRequest(openapisdk.models.shared.GroupCategoryUpdate request) {
        this.request = request;
        return this;
    }
}