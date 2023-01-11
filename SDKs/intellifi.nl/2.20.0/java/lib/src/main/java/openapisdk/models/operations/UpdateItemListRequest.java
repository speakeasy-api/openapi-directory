package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemListRequest {
    public UpdateItemListPathParams pathParams;
    public UpdateItemListRequest withPathParams(UpdateItemListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemListInput request;
    public UpdateItemListRequest withRequest(openapisdk.models.shared.ItemListInput request) {
        this.request = request;
        return this;
    }
}