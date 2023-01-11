package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddItemIdsSpotListRequest {
    public AddItemIdsSpotListPathParams pathParams;
    public AddItemIdsSpotListRequest withPathParams(AddItemIdsSpotListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public AddItemIdsSpotListRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}