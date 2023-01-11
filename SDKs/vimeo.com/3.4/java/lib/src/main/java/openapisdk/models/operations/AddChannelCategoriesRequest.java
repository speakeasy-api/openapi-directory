package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelCategoriesRequest {
    public AddChannelCategoriesPathParams pathParams;
    public AddChannelCategoriesRequest withPathParams(AddChannelCategoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddChannelCategoriesRequestBody request;
    public AddChannelCategoriesRequest withRequest(AddChannelCategoriesRequestBody request) {
        this.request = request;
        return this;
    }
}