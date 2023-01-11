package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemRequest {
    public UpdateItemPathParams pathParams;
    public UpdateItemRequest withPathParams(UpdateItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemUpdate request;
    public UpdateItemRequest withRequest(openapisdk.models.shared.ItemUpdate request) {
        this.request = request;
        return this;
    }
}