package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddItemIdsListRequest {
    public AddItemIdsListPathParams pathParams;
    public AddItemIdsListRequest withPathParams(AddItemIdsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public AddItemIdsListRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}