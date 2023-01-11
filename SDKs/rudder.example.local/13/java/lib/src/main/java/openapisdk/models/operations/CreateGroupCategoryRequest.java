package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupCategoryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupCategory request;
    public CreateGroupCategoryRequest withRequest(openapisdk.models.shared.GroupCategory request) {
        this.request = request;
        return this;
    }
}